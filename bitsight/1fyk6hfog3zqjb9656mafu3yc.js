(function(window, undefined) {
    if (window.sf$) {
        return;
    }
    window.ReachForce = {},
        window.ReachForce.SmartForms = {},
        window.sf$ = ReachForce.SmartForms,
        sf$ = window.sf$,

        sf$.smartFormsLoaded = false,
        sf$.sfjqLoaded = typeof sfjq$ === 'function',
        sf$.rfAppVersion = "4.0.0";

    // True if sfjq$ is available and make sure it's available
    if (!sf$.sfjqLoaded) {
        window.sfjq$ = false;
    }
    sfjq$ = window.sfjq$;

    sf$.legacyConfig = false
    //SF is not loaded yet
    var isSFLoaded = false,

        cdnURL = "https://d26n74bqaye0ia.cloudfront.net/",
        //cdnUrl = "https://d26n74bqaye0ia.cloudfront.net/",

        // Array to hold functions to be called when SF is loaded
        fnsToCallWhenReady = [],
        //default false (no sfjq$ loaded, but it hasn't been checked yet)

        getScript = function(scriptSrc, callback, param) {
            var loaded = false;
            var jq    = document.createElement('script');
            jq.src    = scriptSrc;
            jq.onload = jq.onreadystatechange = function(){
                var state = this.readyState;
                if (state) if (state != 'complete') if (state != 'loaded') return;
                try {
                    if(!loaded){
                        callback(param);
                    }
                } catch(e){}
                loaded = true;
            };
            // Attempt to append it to the <head>, otherwise append to the document.
            (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(jq);
        },
        // Either loads jquery or sets jquery to sfjq$
        loadSFJQ = function(){
            // If sfjq$ is available, load SF and legacy config = true (up to date configs shouldn't be setting sfjq$)
            if (sf$.sfjqLoaded) {
                loadSF();
                sf$.legacyConfig = true;
                // If jQuery does not exist on the page, load it.
            } else if ( window.jQuery === undefined ) {
                getScript('//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js', loadSFJQhandler, false);
            } else if (!(/^[1]\.([7-9]|[1-9][0-9]+)(\.[0-9]+)?$/.test(window.jQuery.fn.jquery)) && !(/^[2]\.([0-9]|[1-9][0-9]+)(\.[0-9]+)?$/.test(window.jQuery.fn.jquery)) && !(/^[3]\.([0-9]|[1-9][0-9]+)(\.[0-9]+)?$/.test(window.jQuery.fn.jquery))) {
                // jQuery exists, but it is not the version we want, so we need to manage duplicate jQuery objects.
                getScript('//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js', loadSFJQhandler, true);
            } else {
                // The version of jQuery loaded into the window is what we want to use, so we can just load the handler and output content.
                sfjq$ = window.jQuery;
                loadSF();
            }
        },

        // Prepare to mitigate any conflicts on jQuery.
        loadSFJQhandler = function(available){
            // If jQuery already exists, don't overwrite the global but set noConflict to properly handle multiple versions.
            if ( available ) {
                // Don't set global jQuery object - just store in our property.
                sfjq$ = window.jQuery.noConflict(true);
                loadSF();
            } else {
                // Store the global jQuery object since it does not exist yet.
                jQuery = window.jQuery.noConflict(true);
                sfjq$ = jQuery;
                loadSF();
            }
            if(typeof sfjq$ === 'function'){
                sf$.sfjqLoaded = true;
            }
        },

        //Loaded after jQuery is ready. This is where the magic happens. Initializes rest of library, calls ready functions, and tries to load cloud config
        loadSF = function(){
            // initializeLibrary(sf$);
            // isSFLoaded = true;
            // callReadyFns(fnsToCallWhenReady)
            loadCloudConfig();

        },

        //Calls the functions stored in array (fnsToCallWhenReady array mostly)
        callReadyFns = function(fnsToCall) {
            var len = fnsToCall.length,
                i = 0;
            for (; i < len; i++) {
                if (typeof fnsToCall[i] === 'function') {
                    fnsToCall[i].call(sf$);
                }
            }
        },

        //If the data attributes are available, get cloud config.
        loadCloudConfig = function() {
            sfjq$('script').each(function(s, script) {
                if (script.src.indexOf('SmartForms.js') > -1) {
                    var script$ = sfjq$(script),
                        token = script$.data('token'),
                        local = script$.data('local');
                    local = local || false;

                    if (token) {
                        getCloudConfig(token, local)
                    }
                }
            })
        },

        //Use jquery.getScript to load the cloudConfig.
        getCloudConfig = function(token, local) {
            var configUrl;
            if (local) {
                configUrl = local;
            } else {
                configUrl = cdnURL + token + '.js'
            }
            getScript(configUrl, function(data) {
                sf$.token = token;
                if(sf$.config) {
                    sf$.loadSF4();
                } else {
                    sf$.loadSF3();
                }
                sf$.onSFLoad();
            });
        };

    sf$.loadSF4 = function() {
        getScript(cdnURL + 'sf4-load.js', function() {
            isSFLoaded = true;
            callReadyFns(fnsToCallWhenReady);

            sf$.configure(sf$.config)
        })
    }

    sf$.loadSF3 = function() {
        getScript(cdnURL + 'sf3-load.js', function() {
            isSFLoaded = true;
            callReadyFns(fnsToCallWhenReady);
        })
    }

    //Setter function that takes a function and calls it if SF is ready,
    //otherwise puts it in an array to be called later
    sf$.onSFLoad = function(callback) {
        if (typeof callback === 'undefined') {
            return isSFLoaded;
        } else {
            if (isSFLoaded) {
                callback.call(sf$);
            } else {
                fnsToCallWhenReady.push(callback)
            }
        }
    }

    loadSFJQ();

    return sfjq$;
})(this);