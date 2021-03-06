(function(window, undefined) {
    
    //Initialize the 'old' smartforms
    var initializeLibrary = function(smartForms) {
        var sf$ = smartForms;

        sf$.rfAppVersion = "3.0.10a",
        sf$.serviceURL = "//smartforms-gtw.reachforce.com/SmartForms3-0/";
        //sf$.serviceURL="//smartforms-gtw.reachforce.com/SmartForms3-0/";

        sf$.doSetup = true;
        sf$.canRun = true;
        sf$.showSmartFormAlerts = false;
        sf$.showCriticalAlerts = false;
        sf$.showJSONPAlerts = false;
        sf$.overrideSubmit = true;
        sf$.oquery = true;
        sf$.assignIDsByName = false;
        sf$.selectListDivID = "RFDisplayFrame";
        sf$.doFindByIPFlag = false;
        sf$.doAppendByIPOnLoadFlag = false;
        sf$.doCompanySelectFlag = true;
        sf$.allowContactRemFlag = false;
        sf$.retrievingContact = false
        sf$.readyToSubmitContactFlag = true;
        sf$.contactRetrieved = false;
        sf$.autoDeploySelectListEventsFlag = true;
        sf$.deployDropDownFlag = false;
        sf$.ddAppendToStandardFieldsFlag = true;
        sf$.revIPFilterFlag = true;
        sf$.resultLength = 5;
        sf$.allowEmailOnlyFilter = false;
        sf$.emailOnlyFilterFlag = false;
        sf$.phoneFilterFlag = true;
        sf$.phoneAutoFillFlag = false; // drop-down mode
        sf$.phoneFormatUsed = "###-###-####";
        sf$.selectListTitlePhrase = "<caption><h3>Please select to verify your company</h3><hr style='color:#CCCCCC;background-color:#CCCCCC;height:1px;border:none;'></caption>";
        sf$.notaPhrase = "None of the Above";
        sf$.selectListFooterPhrase = "";
        sf$.selectListDivFade = "fast";
        sf$.selectListDivTopOffset = 7;
        sf$.remediateCompanyFlag = true;
        sf$.remediateCompanyLevelUsed = "review";
        sf$.useStateText = false;
        sf$.useCountryText = false;
        sf$.formCheckIDs = [];
        sf$.deployDynaInput = false;
        sf$.dynaInputIDs = [];
        sf$.isDynaInputVisible = true;
        sf$.junkNames = ["abc", "acme", "adf", "admin", "asd", "asdf", "co name", "college", "company", "company name", "confidential",
            "consultant", "consulting", "contact", "contractor", "customer", "default", "demo", "false", "freelance", "freelancer",
            "home", "home office", "independant", "independant consultant", "independent", "independent consultant", "individual",
            "internet marketing company", "it", "it conlsultant", "me", "my", "myself", "na", "name", "no", "no company", "no name yet",
            "nocompany", "non", "none", "not provided", "null", "other", "personal", "privat", "private", "qwe", "qwer", "qwert",
            "qwerty", "qwertyu", "retired", "self", "self employed", "student", "system", "tbd", "test", "test inc", "testing",
            "true", "undisclosed", "unemployed", "university", "unk", "unknown", "valued", "xxx", "xyz"
        ];

        sf$.frmChanged = true;
        sf$.sessionID;
        sf$.compID = "";
        sf$.revIPCompID;
        sf$.revIPCty;
        sf$.revIPSt;
        sf$.revIPStc;
        sf$.revIPCntry;
        sf$.revIPAreaCd;
        sf$.revIPLat;
        sf$.revIPLong;
        sf$.rVXIDFlag = "";
        sf$.vXID = "";
        sf$.mCity = "";
        sf$.mState = "";
        sf$.mCountry = "";
        sf$.mContCd = "";
        sf$.callIndex = 0; // to keep from displaying an old data set
        sf$.lastSearch = "";
        sf$.lastEmail = "";
        sf$.lastRFID = "";
        sf$.fieldFocus = false;
        sf$.mouseOver = false;
        sf$.fillByIP = false;
        sf$.dropFilled = false;
        sf$.savingOnExit = false; // not used
        sf$.formSaved = false;
        sf$.junkNameDetected = false;
        sf$.junkEmailDetected = true;
        sf$.rqurl = "";
        sf$.latestSearchResultsNames = null;
        sf$.latestSearchResultsData = null;
        sf$.latestSearchResultsIDs = null;
        sf$.allowDropDownHide = true;
        sf$.dataSubmitInProcess = false;
        sf$.dataReady = false;
        sf$.hrefLoc;
        sf$.httpProtocol = (("https:" == document.location.protocol) ? "https://" : "http://");
        sf$.ieVer;
        sf$.ieMode;
        sf$.ipLoc;
        sf$.techFilled = false;
        sf$.frmElt;

        // these should be user defined:
        sf$.token;
        sf$.dropDownDisplayDivID;
        sf$.doFindByIP;
        sf$.doAppendByIPOnLoad;
        sf$.doCompanySelect;
        sf$.autoDeploySelectListEvents;
        sf$.deployDropDown;
        sf$.ddAppendToStandardFields;
        sf$.useInferredFilter;
        sf$.searchResultCount;
        sf$.selectListHoverColor;
        sf$.selectListColor1;
        sf$.selectListColor2;
        sf$.selectListNAColor1;
        sf$.selectListNAColor2;
        sf$.usePhoneFilter;
        sf$.autoFillPhone;
        sf$.phoneFormat;
        sf$.selectListTitle;
        sf$.noneOfTheAbove;
        sf$.selectListFooter;
        sf$.remediateCompany;
        sf$.remediateCompanyLevel;

        sf$.smartFormID;
        sf$.firstNameFieldAlias;
        sf$.lastNameFieldAlias;
        sf$.emailFieldAlias;

        sf$.companyNameFieldAlias;
        sf$.addr1FieldAlias;
        sf$.addr2FieldAlias;
        sf$.cityFieldAlias;
        sf$.stateFieldAlias;
        sf$.zipFieldAlias;
        sf$.countryFieldAlias;
        sf$.phoneFieldAlias;
        sf$.titleFieldAlias;

        sf$.confidenceLevelFieldAlias;
        sf$.confidenceDescFieldAlias;
        sf$.matchScoreFieldAlias;
        sf$.thresholdScoreFieldAlias;
        sf$.rpmEngFieldAlias;

        sf$.contactEmail;
        sf$.contactFirstName;
        sf$.contactLastName;
        sf$.contactCompany;
        sf$.contactCompanyWebsite;
        sf$.contactTitle;
        sf$.contactJobRole;
        sf$.contactJobFunction;
        sf$.contactSubFunction;
        sf$.contactEducation;
        sf$.contactExpertise;
        sf$.contactPhone;
        sf$.contactLinkedInHandle;
        sf$.contactLocation;
        sf$.contactTwitterHandle;
        sf$.contactFacebookHandle;
        sf$.contactStatus;

        sf$.mCompXIDFieldAlias;
        sf$.mCompVXIDFieldAlias;
        sf$.mCompanyNameFieldAlias;
        sf$.mAddr1FieldAlias;
        sf$.mAddr2FieldAlias;
        sf$.mCityFieldAlias;
        sf$.mStateFieldAlias;
        sf$.mZipFieldAlias;
        sf$.mCountryFieldAlias;
        sf$.mPhoneFieldAlias;
        sf$.mTradeNameFieldAlias;
        sf$.mYearStartFieldAlias;
        sf$.mStateCodeFieldAlias;
        sf$.mCountryCodeFieldAlias;
        sf$.mEmplyeeCountFieldAlias;
        sf$.mEmplyeeHereFieldAlias;
        sf$.mAnnualRevFieldAlias;
        sf$.mSicFieldAlias;
        sf$.mSicNameFieldAlias;
        sf$.mSic8FieldAlias;
        sf$.mSic8NameFieldAlias;
        sf$.mAltSicFieldAlias;
        sf$.mNaicsFieldAlias;
        sf$.mNaicsNameFieldAlias;
        sf$.mAltNaicsFieldAlias;
        sf$.mUrlFieldAlias;
        sf$.mLocationTypeFieldAlias;
        sf$.mSubsidiaryFieldAlias;
        sf$.mFamilyMemsFieldAlias;
        sf$.mGlobal2KFieldAlias;
        sf$.mFortune500FieldAlias;
        sf$.mTickerFieldAlias;
        sf$.mLatitudeFieldAlias;
        sf$.mLongitudeFieldAlias;

        sf$.rattr1FieldAlias;
        sf$.rattr2FieldAlias;
        sf$.rattr3FieldAlias;
        sf$.rattr4FieldAlias;
        sf$.rattr5FieldAlias;

        sf$.hqCompXIDFieldAlias;
        sf$.hqCompVXIDFieldAlias;
        sf$.hqCompanyNameFieldAlias;
        sf$.hqAddr1FieldAlias;
        sf$.hqAddr2FieldAlias;
        sf$.hqCityFieldAlias;
        sf$.hqStateFieldAlias;
        sf$.hqZipFieldAlias;
        sf$.hqCountryFieldAlias;
        sf$.hqPhoneFieldAlias;
        sf$.hqTradeNameFieldAlias;
        sf$.hqYearStartFieldAlias;
        sf$.hqStateCodeFieldAlias;
        sf$.hqCountryCodeFieldAlias;
        sf$.hqEmplyeeCountFieldAlias;
        sf$.hqEmplyeeHereFieldAlias;
        sf$.hqAnnualRevFieldAlias;
        sf$.hqSicFieldAlias;
        sf$.hqSicNameFieldAlias;
        sf$.hqSic8FieldAlias;
        sf$.hqSic8NameFieldAlias;
        sf$.hqAltSicFieldAlias;
        sf$.hqNaicsFieldAlias;
        sf$.hqNaicsNameFieldAlias;
        sf$.hqAltNaicsFieldAlias;
        sf$.hqUrlFieldAlias;
        sf$.hqLocationTypeFieldAlias;
        sf$.hqSubsidiaryFieldAlias;
        sf$.hqFamilyMemsFieldAlias;
        sf$.hqGlobal2KFieldAlias;
        sf$.hqFortune500FieldAlias;
        sf$.hqTickerFieldAlias;
        sf$.hqLatitudeFieldAlias;
        sf$.hqLongitudeFieldAlias;

        sf$.dhqCompXIDFieldAlias;
        sf$.dhqCompVXIDFieldAlias;
        sf$.dhqCompanyNameFieldAlias;
        sf$.dhqAddr1FieldAlias;
        sf$.dhqAddr2FieldAlias;
        sf$.dhqCityFieldAlias;
        sf$.dhqStateFieldAlias;
        sf$.dhqZipFieldAlias;
        sf$.dhqCountryFieldAlias;
        sf$.dhqPhoneFieldAlias;
        sf$.dhqTradeNameFieldAlias;
        sf$.dhqYearStartFieldAlias;
        sf$.dhqStateCodeFieldAlias;
        sf$.dhqCountryCodeFieldAlias;
        sf$.dhqEmplyeeCountFieldAlias;
        sf$.dhqEmplyeeHereFieldAlias;
        sf$.dhqAnnualRevFieldAlias;
        sf$.dhqSicFieldAlias;
        sf$.dhqSicNameFieldAlias;
        sf$.dhqSic8FieldAlias;
        sf$.dhqSic8NameFieldAlias;
        sf$.dhqAltSicFieldAlias;
        sf$.dhqNaicsFieldAlias;
        sf$.dhqNaicsNameFieldAlias;
        sf$.dhqAltNaicsFieldAlias;
        sf$.dhqUrlFieldAlias;
        sf$.dhqLocationTypeFieldAlias;
        sf$.dhqSubsidiaryFieldAlias;
        sf$.dhqFamilyMemsFieldAlias;
        sf$.dhqGlobal2KFieldAlias;
        sf$.dhqFortune500FieldAlias;
        sf$.dhqTickerFieldAlias;
        sf$.dhqLatitudeFieldAlias;
        sf$.dhqLongitudeFieldAlias;

        sf$.ghqCompXIDFieldAlias;
        sf$.ghqCompVXIDFieldAlias;
        sf$.ghqCompanyNameFieldAlias;
        sf$.ghqAddr1FieldAlias;
        sf$.ghqAddr2FieldAlias;
        sf$.ghqCityFieldAlias;
        sf$.ghqStateFieldAlias;
        sf$.ghqZipFieldAlias;
        sf$.ghqCountryFieldAlias;
        sf$.ghqPhoneFieldAlias;
        sf$.ghqTradeNameFieldAlias;
        sf$.ghqYearStartFieldAlias;
        sf$.ghqStateCodeFieldAlias;
        sf$.ghqCountryCodeFieldAlias;
        sf$.ghqEmplyeeCountFieldAlias;
        sf$.ghqEmplyeeHereFieldAlias;
        sf$.ghqAnnualRevFieldAlias;
        sf$.ghqSicFieldAlias;
        sf$.ghqSicNameFieldAlias;
        sf$.ghqSic8FieldAlias;
        sf$.ghqSic8NameFieldAlias;
        sf$.ghqAltSicFieldAlias;
        sf$.ghqNaicsFieldAlias;
        sf$.ghqNaicsNameFieldAlias;
        sf$.ghqAltNaicsFieldAlias;
        sf$.ghqUrlFieldAlias;
        sf$.ghqLocationTypeFieldAlias;
        sf$.ghqSubsidiaryFieldAlias;
        sf$.ghqFamilyMemsFieldAlias;
        sf$.ghqGlobal2KFieldAlias;
        sf$.ghqFortune500FieldAlias;
        sf$.ghqTickerFieldAlias;
        sf$.ghqLatitudeFieldAlias;
        sf$.ghqLongitudeFieldAlias;

        sf$.inferredCityFieldAlias;
        sf$.inferredStateFieldAlias;
        sf$.inferredCountryFieldAlias;
        sf$.inferredAreaCodeFieldAlias;
        sf$.inferredEmployeesFieldAlias;
        sf$.inferredIndustryFieldAlias;
        sf$.inferredPublicFieldAlias;
        sf$.inferredRevenueFieldAlias;

        sf$.techAdvertisementFieldAlias;
        sf$.techAlexaFieldAlias;
        sf$.techAnalyticsAndTrackingFieldAlias;
        sf$.techChatsFieldAlias;
        sf$.techCMSFieldAlias;
        sf$.techCommentsFieldAlias;
        sf$.techContentDeliveryNetworksFieldAlias;
        sf$.techDomainNameServicesFieldAlias;
        sf$.techECommerceFieldAlias;
        sf$.techEmailDeliverySpamProtectionFieldAlias;
        sf$.techEmailMarketingFieldAlias;
        sf$.techEmailProvidersFieldAlias;
        sf$.techFontsFieldAlias;
        sf$.techHostedFormsFieldAlias;
        sf$.techHostingFieldAlias;
        sf$.techLoadBalancersFieldAlias;
        sf$.techMarketingAutomationFieldAlias;
        sf$.techMediaFieldAlias;
        sf$.techPaymentsFieldAlias;
        sf$.techPersonalizationFieldAlias;
        sf$.techRecruitmentFieldAlias;
        sf$.techRestaurantReservationServicesFieldAlias;
        sf$.techSecurityFieldAlias;
        sf$.techSSLCertificatesFieldAlias;
        sf$.techSupportFieldAlias;
        sf$.techTagManagementFieldAlias;
        sf$.techWebAcceleratorsFieldAlias;
        sf$.techWebPerformanceMonitoringFieldAlias;
        sf$.techWidgetsFieldAlias;

        sf$.uid1FieldAlias;
        sf$.uid2FieldAlias;
        sf$.uid3FieldAlias;

        /* Inialize page */
        sfjq$(document).ready(function() {
            if (window.sf$ && typeof window.sf$.runSFSetup === "function" && sf$.legacyConfig)
                sf$.runSFSetup();
        });

        sf$.runDefaultSetup = function() {
            if (sf$.doSetup) {
                sf$.hrefLoc = window.location.href;
                sf$.hrefLoc = sf$.hrefLoc.substr(0, (sf$.hrefLoc.indexOf("?", 0) == -1) ? sf$.hrefLoc.length : sf$.hrefLoc.indexOf("?", 0));
                // determine IE version
                sf$.ieVer = (function() {
                    var undef, v = 3,
                        divElt = document.createElement("div"),
                        allI = divElt.getElementsByTagName("i");
                    while (
                        divElt.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->",
                        allI[0]
                    );
                    return v > 4 ? v : undef;
                }());
                sf$.ieMode = (function() {
                    if (undefined != sf$.ieVer && sf$.ieVer != null) return (document.documentMode == 5) ? "quirks" : "strict";
                }());
                // set up parameters that should have been defined
                if (sf$.selectListHoverColor == null || sf$.selectListHoverColor == "")
                    sf$.selectListHoverColor = "#8888ff";
                if (sf$.selectListColor1 == null || sf$.selectListColor1 == "")
                    sf$.selectListColor1 = "#cccccc";
                if (sf$.selectListColor2 == null || sf$.selectListColor2 == "")
                    sf$.selectListColor2 = "#ffffff";
                if (sf$.selectListNAColor1 == null || sf$.selectListNAColor1 == "")
                    sf$.selectListNAColor1 = sf$.selectListColor1;
                if (sf$.selectListNAColor2 == null || sf$.selectListNAColor2 == "")
                    sf$.selectListNAColor2 = sf$.selectListColor2;
                if (sf$.searchResultCount != null && sf$.searchResultCount > 0 && sf$.searchResultCount < 11)
                    sf$.resultLength = sf$.searchResultCount;
                if (sf$.dropDownDisplayDivID != null && sf$.dropDownDisplayDivID != "")
                    sf$.selectListDivID = sf$.dropDownDisplayDivID;
                if (sf$.phoneFormat != null)
                    sf$.phoneFormatUsed = sf$.phoneFormat;
                if (sf$.usePhoneFilter != null)
                    sf$.phoneFilterFlag = sf$.usePhoneFilter;
                if (sf$.autoFillPhone != null)
                    sf$.phoneAutoFillFlag = sf$.autoFillPhone;
                if (sf$.useInferredFilter != null)
                    sf$.revIPFilterFlag = sf$.useInferredFilter;
                if (sf$.doFindByIP != null)
                    sf$.doFindByIPFlag = sf$.doFindByIP;
                if (sf$.doAppendByIPOnLoad != null)
                    sf$.doAppendByIPOnLoadFlag = sf$.doAppendByIPOnLoad;
                if (sf$.doCompanySelect != null)
                    sf$.doCompanySelectFlag = sf$.doCompanySelect;
                if (sf$.autoDeploySelectListEvents != null)
                    sf$.autoDeploySelectListEventsFlag = sf$.autoDeploySelectListEvents;
                // force no auto fill if in pop up mode
                sf$.phoneAutoFillFlag = (!sf$.deployDropDownFlag) ? false : sf$.phoneAutoFillFlag;
                if (sf$.selectListTitle != null)
                    sf$.selectListTitlePhrase = sf$.selectListTitle;
                if (sf$.noneOfTheAbove != null)
                    sf$.notaPhrase = sf$.noneOfTheAbove;
                if (sf$.selectListFooter != null)
                    sf$.selectListFooterPhrase = sf$.selectListFooter;
                if (sf$.remediateCompany != null)
                    sf$.remediateCompanyFlag = sf$.remediateCompany;
                // force remediation only if no company select method
                sf$.remediateCompanyFlag = (!sf$.doCompanySelectFlag) ? true : sf$.remediateCompanyFlag;
                if (sf$.remediateCompanyLevel != null)
                    sf$.remediateCompanyLevelUsed = sf$.remediateCompanyLevel;
                if (sf$.deployDropDown != null)
                    sf$.deployDropDownFlag = sf$.deployDropDown;
                if (sf$.ddAppendToStandardFields != null)
                    sf$.ddAppendToStandardFieldsFlag = sf$.ddAppendToStandardFields;

                sf$.emailOnlyFilterFlag = sf$.allowEmailOnlyFilter ? sf$.emailOnlyFilterFlag : false;
            }
        }

        sf$.setFormIdIfNull = function(frmElt) {
            // detect/set the form ID
            if (undefined != frmElt && frmElt != null) {
                var formID = frmElt.id;
                if (!formID.length) {
                    formID = "smartForm1";
                    sf$.smartFormID = formID;
                    frmElt.id = formID;
                } else if (formID != sf$.smartFormID) {
                    sf$.smartFormID = formID;
                }
            }
        }

        sf$.resetDefaultVariables = function() {
            sf$.sessionID = function() {}();
            sf$.frmElt = function() {}();
            sf$.compID = "";
            sf$.callIndex = 0;
            sf$.lastSearch = "";
            sf$.lastEmail = "";
            sf$.lastRFID = "";
            sf$.formSaved = false;
            sf$.junkNameDetected = false;
            sf$.rqurl = "";
            sf$.latestSearchResultsNames = null;
            sf$.latestSearchResultsData = null;
            sf$.latestSearchResultsIDs = null;
            sf$.dataReady = false;
            sf$.techFilled = false;
            sf$.dataReady = false;
            sf$.hrefLoc = window.location.href;
            sf$.hrefLoc = sf$.hrefLoc.substr(0, (sf$.hrefLoc.indexOf("?", 0) == -1) ? sf$.hrefLoc.length : sf$.hrefLoc.indexOf("?", 0));
            //Reset contact Enrich flags
            sf$.retrievingContact = false;
            sf$.contactRetrieved = false;
            sf$.dataSubmitInProcess = false;
        }

        sf$.runSFSetup = function() {
            if (sf$.doSetup) {
                sf$.assignIDs();
                sf$.hideDynaInput();

                sf$.runDefaultSetup();

                var reason = "",
                    msg = "";
                if (sf$.emailOnlyFilterFlag || undefined === sf$.companyNameFieldAlias || sfjq$("#" + sf$.companyNameFieldAlias).length === 0 || (sfjq$("#" + sf$.companyNameFieldAlias).length > 0 && sfjq$("#" + sf$.companyNameFieldAlias).is("input[type=hidden]"))) {
                    msg = "*    sf$.companyNameFieldAlias\n";
                    sf$.companyNameFieldAlias = undefined;
                    sf$.canRun = false;
                } else {
                    sf$.frmElt = sf$.grabElementById(sf$.companyNameFieldAlias).form;
                }

                if (!sf$.canRun && (undefined === sf$.emailFieldAlias || sfjq$("#" + sf$.emailFieldAlias).length === 0 || (sfjq$("#" + sf$.emailFieldAlias).length > 0 && sfjq$("#" + sf$.emailFieldAlias).is("input[type=hidden]")))) {
                    msg = msg + "*    sf$.emailFieldAlias\n";
                    sf$.canRun = false;
                } else {
                    if (sf$.frmElt == null) {
                        sf$.frmElt = sf$.grabElementById(sf$.emailFieldAlias).form;
                        if (sf$.allowEmailOnlyFilter) {
                            sf$.canRun = true;
                            sf$.emailOnlyFilterFlag = true;
                        } else {
                            sf$.canRun = false;
                            sf$.emailOnlyFilterFlag = false;
                        }
                    }
                }

                if (!sf$.canRun) reason = "* These configuration variables do not hold the ID of an existing input element.\n" + msg;

                if (sf$.frmElt == null) {
                    if (sf$.smartFormID != null) sf$.frmElt = sf$.grabElementById(sf$.smartFormID);
                    if (sf$.frmElt == null) {
                        if (window.console) window.console.log("(!) SmartForms cannot detect a form element on the page.");
                        if (sf$.showCriticalAlerts) alert("SmartForms CRITICAL ALERT!\n\nThe form cannot run:\n\n" + "* The form element cannot be detected. Try setting sf$.smartFormID equal to the ID of the form element.\n");
                    }
                }

                sf$.setFormIdIfNull(sf$.frmElt)

                if (sf$.overrideSubmit && undefined != sf$.frmElt && sf$.frmElt != null) {
                    try {
                        // temporarily rename elements on the form named "submit" to something else
                        sfjq$("#" + sf$.smartFormID + " :input").each(function(i) {
                            if (sfjq$(this).attr("name") == "submit") {
                                sfjq$(this).attr("name", "timbus_tempnm");
                            }
                            if (sfjq$(this).attr("id") == "submit") {
                                sfjq$(this).attr("id", "timbus_tempid");
                            }
                        });
                    } catch (err) {}

                    // save original submit action and override the form submit action with forceSelection
                    sf$.frmElt._submit = sf$.frmElt.submit; // saved reference
                    sf$.frmElt.submit = function() {
                        if (!sf$.formSaved)
                            sf$.forceSelection();
                    };

                    try {
                        // undo earlier rename
                        sfjq$("#" + sf$.smartFormID + " :input").each(function(i) {
                            if (sfjq$(this).attr("name") == "timbus_tempnm") {
                                sfjq$(this).attr("name", "submit");
                            }
                            if (sfjq$(this).attr("id") == "timbus_tempid") {
                                sfjq$(this).attr("id", "submit");
                            }
                        });
                    } catch (err) {}
                }

                if (sf$.autoDeploySelectListEventsFlag && sf$.canRun) {
                    sf$.addEvents();
                }
                //dyno or manual, doCompanySelectFlag
                if (sf$.doCompanySelectFlag && sf$.grabElementById(sf$.selectListDivID) == null) {
                    sf$.canRun = false;
                    if (!sf$.autoDeploySelectListEventsFlag) {
                        reason = reason + "* sf$.dropDownDisplayDivID does not hold the ID of an existing div element.\n";
                    }
                }
                if (!sf$.canRun) {
                    if (window.console) window.console.log("(!) SmartForms is not properly configured.\n" + reason);
                    if (sf$.showSmartFormAlerts) alert("SmartForms WARNING!\n\nSmartForms is not properly configured and will not run:\n\n" + reason);
                }

                sf$.clearHidden();
                sf$.clearTech();
                sf$.clearContact()
                if (!sf$.ipLoc) {
                    sf$.findByIP();
                }
                sf$.doSetup = false;
            }
        };

        /**
         * Define event listeners for dynamic usage.
         */
        sf$.evntListener = [
            function() { sf$.hideDisplay(-1); }, // focus
            function() { sf$.dataChanged(); }, // change
            function() { sf$.fieldChanged(); }, // company keyup; email, phone, state, country blur
            function() { sf$.hideDisplay(1); }, // company blur
            function() { sf$.showDisplay(1); }, // company focus
            function() { sf$.showDisplay(2); }, // displayFrame mouseover
            function() { sf$.hideDisplay(2); }, // displayFrame mouseout
            function() { sf$.blockFrameOnOver(); }, // blockFrame mouseover
            function() { sf$.blockFrameOnOut(); }, // blockFrame mouseout
            function() { sf$.checkDyna(); }, // company blur
            function(event) { sf$.contactEventHandler(event); } // company blur; email, phone, state, country blur

        ];

        /**
         * Dynamically add events and required elements to form.
         */
        sf$.addEvents = function() {
            if (sf$.doCompanySelectFlag && sf$.autoDeploySelectListEventsFlag && sf$.canRun) {
                for (var i = 0; i < sf$.frmElt.elements.length; i++) {
                    var fld = sf$.frmElt.elements[i];
                    if (fld.type != "hidden" && fld.type != "button" && fld.type != "submit") {
                        if (fld.id != sf$.companyNameFieldAlias) {
                            if (sf$.deployDropDownFlag &&
                                ((!sf$.emailOnlyFilterFlag && fld.id == sf$.emailFieldAlias) || fld.id != sf$.emailFieldAlias)) {
                                if (fld.onfocus == null || fld.onfocus.toString().indexOf("sf$.hideDisplay") == -1) {
                                    if (fld.addEventListener) {
                                        fld.addEventListener("focus", sf$.evntListener[0], false);
                                    } else if (fld.attachEvent) {
                                        fld.attachEvent("onfocus", sf$.evntListener[0]);
                                    } else {
                                        fld.onfocus = sf$.evntListener[0];
                                    }
                                }
                            }
                            if (fld.id == sf$.addr1FieldAlias || fld.id == sf$.addr2FieldAlias || fld.id == sf$.cityFieldAlias || fld.id == sf$.stateFieldAlias ||
                                fld.id == sf$.zipFieldAlias || fld.id == sf$.countryFieldAlias ||
                                (fld.id == sf$.phoneFieldAlias && sf$.deployDropDownFlag && sf$.phoneAutoFillFlag)) {
                                if (fld.onchange == null || fld.onchange.toString().indexOf("sf$.dataChanged") == -1) {
                                    if (fld.addEventListener) {
                                        fld.addEventListener("change", sf$.evntListener[1], false);
                                    } else if (fld.attachEvent) {
                                        fld.attachEvent("onchange", sf$.evntListener[1]);
                                    } else {
                                        fld.onchange = sf$.evntListener[1];
                                    }
                                }
                            }
                            if ((!sf$.emailOnlyFilterFlag && fld.id == sf$.emailFieldAlias) ||
                                fld.id == sf$.phoneFieldAlias || fld.id == sf$.stateFieldAlias || fld.id == sf$.countryFieldAlias) {
                                if (fld.onblur == null || fld.onblur.toString().indexOf("sf$.fieldChanged") == -1) {
                                    if (fld.addEventListener) {
                                        fld.addEventListener("blur", sf$.evntListener[2], false);
                                    } else if (fld.attachEvent) {
                                        fld.attachEvent("onblur", sf$.evntListener[2]);
                                    } else {
                                        fld.onblur = sf$.evntListener[2];
                                    }
                                }
                            }
                        }

                        if (sf$.allowContactRemFlag && (fld.id == sf$.emailFieldAlias || fld.id == sf$.companyNameFieldAlias)) {
                            // fld.id == sf$.cityFieldAlias || fld.id == sf$.stateFieldAlias || fld.id == sf$.countryFieldAlias ||
                            // fld.id == sf$.firstNameFieldAlias || sf$.lastNameFieldAlias ||
                            if (fld.onchange == null || fld.onchange.toString().indexOf("sf$.contactEventHandler") == -1) {
                                if (fld.addEventListener) {
                                    fld.addEventListener("change", sf$.evntListener[10], false);
                                } else if (fld.attachEvent) {
                                    fld.attachEvent("onchange", sf$.evntListener[10]);
                                } else {
                                    fld.onchange = sf$.evntListener[10];
                                }
                            }
                        }

                        if (fld.id == sf$.companyNameFieldAlias || (sf$.emailOnlyFilterFlag && fld.id == sf$.emailFieldAlias)) {
                            if (fld.onkeyup == null || fld.onkeyup.toString().indexOf("sf$.fieldChanged") == -1) {
                                if (fld.addEventListener) {
                                    fld.addEventListener("keyup", sf$.evntListener[2], false);
                                    if (sf$.deployDropDownFlag) {
                                        //                      fld.addEventListener("blur", sf$.evntListener[3], false);
                                        fld.addEventListener("focus", sf$.evntListener[4], false);
                                        if (sf$.deployDynaInput) {
                                            fld.addEventListener("blur", sf$.evntListener[9], false);
                                        }
                                    }
                                } else if (fld.attachEvent) {
                                    fld.attachEvent("onkeyup", sf$.evntListener[2]);
                                    if (sf$.deployDropDownFlag) {
                                        //                      fld.attachEvent("onblur", sf$.evntListener[3]);
                                        fld.attachEvent("onfocus", sf$.evntListener[4]);
                                        if (sf$.deployDynaInput) {
                                            fld.attachEvent("onblur", sf$.evntListener[9]);
                                        }
                                    }
                                } else {
                                    fld.onkeyup = sf$.evntListener[2];
                                    if (sf$.deployDropDownFlag) {
                                        //                      fld.onblur = sf$.evntListener[3];
                                        fld.onfocus = sf$.evntListener[4];
                                        if (sf$.deployDynaInput) {
                                            fld.onfocus = sf$.evntListener[9];
                                        }
                                    }
                                }
                            }
                            var autoFillDisable = window.chrome ?'new-password' : 'off';
                            fld.setAttribute("autocomplete", autoFillDisable);
                        }
                    }
                }

                var displayFrame = sf$.grabElementById(sf$.selectListDivID);
                if (displayFrame == null) {
                    // add select list display frame
                    displayFrame = document.createElement("div");
                    displayFrame.setAttribute("id", sf$.selectListDivID);

                    // IE7/8 hack - use both className and class
                    if (sf$.ieVer != null && (sf$.ieVer < 9 || sf$.ieMode == "quirks"))
                        displayFrame.setAttribute("className", "divDisplayFrame");
                    displayFrame.setAttribute("class", "divDisplayFrame");

                    if (sf$.ieVer != null && (sf$.ieVer < 9 || sf$.ieMode == "quirks"))
                        displayFrame.style.setAttribute("cssText", "visibility:hidden; border-width:medium; width:402px; height:auto; display:none; position:absolute; z-index:100; background-color:#ffffff;");
                    else
                        displayFrame.setAttribute("style", "visibility:hidden; border-width:medium; width:402px; height:auto; display:none; position:absolute; z-index:100; background-color:#ffffff;");

                    sfjq$("body").prepend(displayFrame);
                }
                if (sf$.deployDropDownFlag && !sf$.deployDynaInput) {
                    if (displayFrame.onmouseover == null || displayFrame.onmouseover.toString().indexOf("sf$.showDisplay") == -1) {
                        if (displayFrame.addEventListener) {
                            displayFrame.addEventListener("mouseover", sf$.evntListener[5], false);
                            displayFrame.addEventListener("mouseout", sf$.evntListener[6], false);
                        } else if (displayFrame.attachEvent) {
                            displayFrame.attachEvent("onmouseover", sf$.evntListener[5]);
                            displayFrame.attachEvent("onmouseout", sf$.evntListener[6]);
                        } else {
                            displayFrame.onmouseover = sf$.evntListener[5];
                            displayFrame.onmouseout = sf$.evntListener[6];
                        }
                    }
                }
            }
        };

        /**
         * Dynamically remove events that were dynamically added.
         */
        sf$.removeEvents = function() {
            if (sf$.autoDeploySelectListEventsFlag) {
                for (var i = 0; i < sf$.frmElt.elements.length; i++) {
                    var fld = sf$.frmElt.elements[i];
                    if (fld.type != "hidden" && fld.type != "button" && fld.type != "submit") {
                        if (fld.id != sf$.companyNameFieldAlias) {
                            if (fld.removeEventListener) {
                                fld.removeEventListener("focus", sf$.evntListener[0], false);
                            } else if (fld.detachEvent) {
                                fld.detachEvent("onfocus", sf$.evntListener[0]);
                            } else {
                                fld.onfocus = null;
                            }
                            if (fld.id == sf$.addr1FieldAlias || fld.id == sf$.addr2FieldAlias || fld.id == sf$.cityFieldAlias || fld.id == sf$.stateFieldAlias ||
                                fld.id == sf$.zipFieldAlias || fld.id == sf$.countryFieldAlias || fld.id == sf$.phoneFieldAlias) {
                                if (fld.removeEventListener) {
                                    fld.removeEventListener("change", sf$.evntListener[1], false);
                                } else if (fld.detachEvent) {
                                    fld.detachEvent("onchange", sf$.evntListener[1]);
                                } else {
                                    fld.onchange = null;
                                }
                            }
                            if (fld.id == sf$.emailFieldAlias || fld.id == sf$.phoneFieldAlias ||
                                fld.id == sf$.stateFieldAlias || fld.id == sf$.countryFieldAlias) {
                                if (fld.removeEventListener) {
                                    fld.removeEventListener("blur", sf$.evntListener[2], false);
                                } else if (fld.attachEvent) {
                                    fld.detachEvent("onblur", sf$.evntListener[2]);
                                } else {
                                    fld.onblur = null;
                                }
                            }
                        }
                    }

                    if (fld.id == sf$.companyNameFieldAlias || fld.id == sf$.emailFieldAlias) {
                        if (fld.removeEventListener) {
                            fld.removeEventListener("keyup", sf$.evntListener[2], false);
                            fld.removeEventListener("blur", sf$.evntListener[3], false);
                            fld.removeEventListener("focus", sf$.evntListener[4], false);
                        } else if (fld.detachEvent) {
                            fld.detachEvent("onkeyup", sf$.evntListener[2]);
                            fld.detachEvent("onblur", sf$.evntListener[3]);
                            fld.detachEvent("onfocus", sf$.evntListener[4]);
                        } else {
                            fld.onkeyup = null;
                            fld.onblur = null;
                            fld.onfocus = null;
                        }
                    }
                }

                var displayFrame = sf$.grabElementById(sf$.selectListDivID);
                if (displayFrame != null)
                    sfjq$(displayFrame).remove();
            }
        };

        /**
         * Called on initialization to perform a reverse IP look up.
         */
        sf$.findByIP = function() {
            //if (sf$.canRun && (sf$.revIPFilterFlag || sf$.doFindByIPFlag || sf$.doAppendByIPOnLoadFlag)) {
            if (sf$.canRun) {
                sf$.fillByIP = true;
                var servletHTML = "FetchIPCompany.html";
                sfjq$.getJSON(sf$.serviceURL + servletHTML + "?jsonp=?", {
                        "tkn": sf$.token,
                        "fbip": sf$.doFindByIPFlag,
                        "acol": sf$.doAppendByIPOnLoadFlag,
                        "phnf": encodeURIComponent(sf$.phoneFormatUsed),
                        "av": sf$.rfAppVersion,
                        "bip": sf$.ipLoc,
                        "ref": encodeURIComponent(sf$.hrefLoc)
                    },
                    function(response) {
                        if (response != null && response.data.length > 0)
                            sf$.findByIPHandler(sf$.stringToXML(response.data));
                    })
                    .fail(function() {
                        if (window.console) window.console.log("(!) SmartForms encountered an issue during find by IP.");
                        if (sf$.showJSONPAlerts) alert("SmartForms encountered an issue during find by IP.");
                    })
                    .done(function() {
                        sf$.fillByIP = false;
                        var emailField = sf$.grabElementFromForm(sf$.emailFieldAlias);
                        var companyField = sf$.grabElementFromForm(sf$.companyNameFieldAlias);
                        if (sf$.frmChanged && ((companyField && companyField.value) || (emailField && emailField.value)))
                            sf$.fieldChanged();
                    });

                sf$.doAppendByIPOnLoadFlag = false;
            }
        };

        sf$.findByIPHandler = function(resXML) {
            var ipFound = "false",
                compFound = "false",
                techFound = "false";
            if (resXML.getElementsByTagName("ip")[0].firstChild != null)
                sf$.ipLoc = resXML.getElementsByTagName("ip")[0].firstChild.data;
            if (resXML.getElementsByTagName("ipfound")[0].firstChild != null)
                ipFound = resXML.getElementsByTagName("ipfound")[0].firstChild.data;
            if (ipFound == "true") {
                sf$.fillFromIPXML(resXML);
                if (sf$.doAppendByIPOnLoadFlag && resXML.getElementsByTagName("compfound")[0].firstChild != null) {
                    compFound = resXML.getElementsByTagName("compfound")[0].firstChild.data;
                }
                sf$.fillFromXML(resXML, compFound, "ip");

                if (compFound == "true") {
                    if (resXML.getElementsByTagName("cofound")[0].firstChild != null)
                        techFound = resXML.getElementsByTagName("cofound")[0].firstChild.data;
                    if (techFound === "true") {
                        sf$.fillFromTechXML(resXML);
                    }
                }
            } else {
                if (resXML.getElementsByTagName("suid")[0].firstChild != null)
                    sf$.fillSuid(resXML.getElementsByTagName("suid")[0].firstChild.data);
            }
        };

        /**
         * Called when the form company information is altered. Performs a search to populate the select list.
         */
        sf$.fieldChanged = function() {
            if (sf$.callIndex != -1 && sf$.doCompanySelectFlag && sf$.canRun) {
                var elt, nameFieldVal = "",
                    emailFieldVal = "",
                    phoneFieldVal = "",
                    stateFieldVal = "",
                    stateCodeFieldVal = "",
                    countryFieldVal = "",
                    revIPAreaCdFieldVal = "",
                    revIPStFieldVal = "",
                    revIPStcFieldVal = "",
                    revIPCntryFieldVal = "",
                    revIPCompIDFieldVal = "";
                elt = sf$.grabElementFromForm(sf$.companyNameFieldAlias);
                if (elt != null && elt.value.length > 0) {
                    if ((sf$.dynaInputIDs.toString().indexOf(sf$.companyNameFieldAlias) === -1) ||
                        (sf$.dynaInputIDs.toString().indexOf(sf$.companyNameFieldAlias) > -1 && sf$.isDynaInputVisible)) {
                        nameFieldVal = sfjq$.trim(elt.value);
                    }
                }
                elt = sf$.grabElementFromForm(sf$.emailFieldAlias);
                if (elt != null && elt.value.length > 0) {
                    if ((sf$.dynaInputIDs.toString().indexOf(sf$.emailFieldAlias) === -1) ||
                        (sf$.dynaInputIDs.toString().indexOf(sf$.emailFieldAlias) > -1 && sf$.isDynaInputVisible)) {
                        emailFieldVal = sfjq$.trim(elt.value);
                    }
                }
                elt = sf$.grabElementFromForm(sf$.phoneFieldAlias);
                if (sf$.phoneFilterFlag && elt != null && elt.value.length > 0) {
                    if ((sf$.dynaInputIDs.toString().indexOf(sf$.phoneFieldAlias) === -1) ||
                        (sf$.dynaInputIDs.toString().indexOf(sf$.phoneFieldAlias) > -1 && sf$.isDynaInputVisible)) {
                        phoneFieldVal = sfjq$.trim(elt.value);
                    }
                }
                elt = sf$.grabElementFromForm(sf$.stateFieldAlias);
                if (elt != null && elt.value.length > 0) {
                    if ((sf$.dynaInputIDs.toString().indexOf(sf$.stateFieldAlias) === -1) ||
                        (sf$.dynaInputIDs.toString().indexOf(sf$.stateFieldAlias) > -1 && sf$.isDynaInputVisible)) {
                        stateFieldVal = sfjq$.trim(sf$.getInputData(sf$.stateFieldAlias, sf$.useStateText));
                    }
                }
                elt = sf$.grabElementFromForm(sf$.countryFieldAlias);
                if (elt != null && elt.value.length > 0) {
                    if ((sf$.dynaInputIDs.toString().indexOf(sf$.countryFieldAlias) === -1) ||
                        (sf$.dynaInputIDs.toString().indexOf(sf$.countryFieldAlias) > -1 && sf$.isDynaInputVisible)) {
                        countryFieldVal = sfjq$.trim(sf$.getInputData(sf$.countryFieldAlias, sf$.useCountryText));
                    }
                }

                if (sf$.revIPFilterFlag) {
                    revIPAreaCdFieldVal = sfjq$.trim(sf$.revIPAreaCd);
                    revIPStFieldVal = sfjq$.trim(sf$.revIPSt);
                    revIPStcFieldVal = sfjq$.trim(sf$.revIPStc);
                    revIPCntryFieldVal = sfjq$.trim(sf$.revIPCntry);
                }

                if (sf$.doFindByIPFlag) revIPCompIDFieldVal = sfjq$.trim(sf$.revIPCompID);

                var currentSearch = (nameFieldVal).toLowerCase() + emailFieldVal + phoneFieldVal + (stateFieldVal || revIPStFieldVal || stateCodeFieldVal || revIPStcFieldVal) + (countryFieldVal || revIPCntryFieldVal);
                // if (sf$.lastSearch != currentSearch) sf$.hideDisplay(-1);
                if (nameFieldVal.length === 0) sf$.hideDisplay(-1);
                if (sf$.lastEmail != emailFieldVal || emailFieldVal == null || emailFieldVal.length == 0) {
                    sf$.clearTech();
                    //if (!sf$.emailOnlyFilterFlag)
                    sf$.junkEmailDetected = true;
                }

                sf$.isJunkName(nameFieldVal);
                if ((sf$.lastSearch != currentSearch && (!sf$.junkNameDetected || !sf$.junkEmailDetected)) ||
                    (sf$.lastEmail != emailFieldVal && sf$.junkEmailDetected) ||
                    (revIPCompIDFieldVal != null && revIPCompIDFieldVal.length > 0 && sf$.lastRFID != revIPCompIDFieldVal && nameFieldVal != null && nameFieldVal.length > 1)) {
                    sf$.frmChanged = true;
                    sf$.dataReady = false;
                    sf$.lastSearch = currentSearch;
                    sf$.lastEmail = emailFieldVal;
                    sf$.lastRFID = revIPCompIDFieldVal;

                    var servletHTML = "NameMatch.html";
                    sfjq$.getJSON(sf$.serviceURL + servletHTML + "?jsonp=?", {
                            "tkn": sf$.token,
                            "cid": (++sf$.callIndex),
                            "resl": sf$.resultLength,
                            "jnd": sf$.junkNameDetected,
                            "pnm": encodeURIComponent(nameFieldVal),
                            "em": encodeURIComponent(emailFieldVal),
                            "phn": encodeURIComponent(phoneFieldVal),
                            "st": encodeURIComponent(stateFieldVal),
                            "stc": encodeURIComponent(stateCodeFieldVal),
                            "ctry": encodeURIComponent(countryFieldVal),
                            "rac": encodeURIComponent(revIPAreaCdFieldVal),
                            "rst": encodeURIComponent(revIPStFieldVal),
                            "rstc": encodeURIComponent(revIPStcFieldVal),
                            "rctry": encodeURIComponent(revIPCntryFieldVal),
                            "rfid": encodeURIComponent(revIPCompIDFieldVal),
                            "tf": encodeURIComponent(sf$.techFilled),
                            "referer": encodeURIComponent(sf$.hrefLoc)
                        },
                        function(response) {
                            if (response != null && response.data.length > 0)
                                sf$.fieldChangedHandler(sf$.stringToXML(response.data));
                        })
                        .fail(function() {
                            if (window.console) window.console.log("(!) SmartForms encountered an issue during select list search.");
                            if (sf$.showJSONPAlerts) alert("SmartForms encountered an issue during select list search.");
                        });
                }
            }
        };

        sf$.fieldChangedHandler = function(resXML) {
            if (resXML != null) {
                var callID = 0;
                if (resXML.getElementsByTagName("callID") != null && resXML.getElementsByTagName("callID")[0] != null && resXML.getElementsByTagName("callID")[0].firstChild != null)
                    callID = resXML.getElementsByTagName("callID")[0].firstChild.data;

                var companies = resXML.getElementsByTagName("company");
                var nameList = [],
                    detailList = [],
                    idList = [];
                for (var x = 0; x < companies.length; x++) {
                    if (companies[x].getElementsByTagName("name")[0] != null)
                        nameList.push(companies[x].getElementsByTagName("name")[0].firstChild.data);
                    else
                        nameList.push("");
                    var details = "";
                    if (companies[x].getElementsByTagName("tradeStyleName")[0] != null && companies[x].getElementsByTagName("tradeStyleName")[0].firstChild != null)
                        details += "(" + companies[x].getElementsByTagName("tradeStyleName")[0].firstChild.data + ") ";
                    if (sf$.phoneFilterFlag) {
                        if (companies[x].getElementsByTagName("streetAddress1")[0] != null && companies[x].getElementsByTagName("streetAddress1")[0].firstChild != null)
                            details += companies[x].getElementsByTagName("streetAddress1")[0].firstChild.data + ",  ";
                    }
                    if (companies[x].getElementsByTagName("city")[0] != null && companies[x].getElementsByTagName("city")[0].firstChild != null)
                        details += companies[x].getElementsByTagName("city")[0].firstChild.data;
                    if (companies[x].getElementsByTagName("state")[0] != null && companies[x].getElementsByTagName("state")[0].firstChild != null)
                        details += ", " + companies[x].getElementsByTagName("state")[0].firstChild.data;
                    if (companies[x].getElementsByTagName("countrycode")[0] != null && companies[x].getElementsByTagName("countrycode")[0].firstChild != null)
                        details += ", " + companies[x].getElementsByTagName("countrycode")[0].firstChild.data;

                    detailList.push(details);
                    if (companies[x].getElementsByTagName("rfid")[0] != null)
                        idList.push(companies[x].getElementsByTagName("rfid")[0].firstChild.data);
                    else idList.push("");
                }
                if (callID == sf$.callIndex) { // only save the 'most current' data
                    sf$.latestSearchResultsNames = nameList;
                    sf$.latestSearchResultsData = detailList;
                    sf$.latestSearchResultsIDs = idList;
                }
                // let forceSelection know list is ready
                sf$.dataReady = true;
                if (sf$.deployDropDownFlag != false)
                    sf$.dataAvailable(callID, nameList, detailList, idList);

                if (resXML.getElementsByTagName("junkemail")[0].firstChild != null)
                    switch (resXML.getElementsByTagName("junkemail")[0].firstChild.data) {
                        case "false":
                            sf$.junkEmailDetected = false;
                            break;
                        default:
                            sf$.junkEmailDetected = true;
                    }
                var found = "false";
                if (resXML.getElementsByTagName("cofound")[0].firstChild != null)
                    found = resXML.getElementsByTagName("cofound")[0].firstChild.data;
                if (found === "true") {
                    sf$.fillFromTechXML(resXML);
                }
            }
        };

        /**
         * Called when a company is selected form the select list, it sends a request to
         * get details of the selected company for appending company information.
         */
        sf$.getDetails = function(name, rfCompID) {
            if (rfCompID == 0) {
                if (sf$.dataSubmitInProcess) {
                    sf$.completeOngoingSubmit();
                    return;
                } else {
                    sf$.showDynaInput();
                }
            }
            if (rfCompID != 0) {
                sf$.callIndex = -1;
                sf$.hideDisplay(0);
                sf$.compID = rfCompID;

                var selectMeth = (!sf$.doCompanySelectFlag) ? "none" : sf$.deployDropDownFlag;
                var servletHTML = "FetchCompany.html";
                sfjq$.getJSON(sf$.serviceURL + servletHTML + "?jsonp=?", {
                        "tkn": sf$.token,
                        "suid": sf$.sessionID,
                        "rfid": rfCompID,
                        "phnf": encodeURIComponent(sf$.phoneFormatUsed),
                        "mth": selectMeth,
                        "av": sf$.rfAppVersion,
                        "tf" : encodeURIComponent(sf$.techFilled), // 2/2018 - from fieldChanged, email domain should take precedence 
                        "rqurl": encodeURIComponent(sf$.rqurl),
                        "referer": encodeURIComponent(sf$.hrefLoc)
                    },
                    function(response) {
                        if (response != null && response.data.length > 0)
                            sf$.getDetailsHandler(sf$.stringToXML(response.data));
                    })
                    .fail(function() {
                        if (window.console) window.console.log("(!) SmartForms encountered an issue during get company details.");
                        if (sf$.showJSONPAlerts) alert("SmartForms encountered an issue during get company details.");
                    });
            }
        };

        sf$.getDetailsHandler = function(resXML) {
            var found = "false";
            if (resXML.getElementsByTagName("cofound")[0].firstChild != null)
                found = resXML.getElementsByTagName("cofound")[0].firstChild.data;
            if (found === "true") {
                sf$.fillFromTechXML(resXML);
            }

            sf$.fillFromXML(resXML, "true", "details");
            sf$.completeOngoingSubmit();

        };

        sf$.contactEventHandler = function(event) {
            //   if(sf$.isContactReady()){
            if (!sf$.retrievingContact && !sf$.contactRetrieved) {
                sf$.getContact();
            }
        }

        sf$.isContactReady = function() {
            var emailReady = sf$.checkFieldValidity(sf$.emailFieldAlias);
            var firstNameReady = sf$.checkFieldValidity(sf$.firstNameFieldAlias);
            var lastNameReady = sf$.checkFieldValidity(sf$.lastNameFieldAlias);
            var companyReady = sf$.checkFieldValidity(sf$.companyNameFieldAlias);
            // var countryReady = sf$.checkFieldValidity(sf$.countryFieldAlias);
            // var stateReady = sf$.checkFieldValidity(sf$.stateFieldAlias);
            // var cityReady = sf$.checkFieldValidity(sf$.cityFieldAlias);

            // return(emailReady && firstNameReady && lastNameReady && companyReady && countryReady && stateReady && cityReady)
            return (emailReady && firstNameReady && lastNameReady && companyReady)
        }

        sf$.checkFieldValidity = function(fieldID) {
            return !(fieldID && !!sf$.grabElementFromForm(fieldID) && !sf$.grabElementFromForm(fieldID).value)
        }

        sf$.triggerFieldchange = function(elmID) {
            var element = sf$.grabElementFromForm(elmID);
            if ("createEvent" in document) {
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                element.dispatchEvent(evt);
            } else
                element.fireEvent("onchange");
        }

        sf$.getContact = function(inputData) {
            sf$.clearContact();
            if (sf$.allowContactRemFlag) {
                sf$.retrievingContact = true;
                var inputData = {
                    "tkn": sf$.token,
                    "suid": sf$.sessionID,
                    // "rfid": sf$.compID,
                    // "phnf": encodeURIComponent(sf$.phoneFormatUsed),
                    // "mth": selectMeth,
                    "av": sf$.rfAppVersion,
                    // "rqurl": encodeURIComponent(sf$.rqurl),
                    // "referer": encodeURIComponent(sf$.hrefLoc),
                };

                elt = sf$.grabElementFromForm(sf$.emailFieldAlias);
                inputData.email = (elt != null) ? elt.value : '';
                elt = sf$.grabElementFromForm(sf$.firstNameFieldAlias);
                inputData.firstName = (elt != null) ? elt.value : '';
                elt = sf$.grabElementFromForm(sf$.lastNameFieldAlias);
                inputData.lastName = (elt != null) ? elt.value : '';
                elt = sf$.grabElementFromForm(sf$.titleFieldAlias);
                inputData.title = (elt != null) ? elt.value : '';
                elt = sf$.grabElementFromForm(sf$.companyNameFieldAlias);
                inputData.company = (elt != null) ? elt.value : '';
                //Do we want to use inferred Url?
                // elt = sf$.grabElementFromForm(sf$.emailFieldAlias);
                // if (elt != null) inputData.companyUrl = elt.value;
                elt = sf$.grabElementFromForm(sf$.countryFieldAlias);
                inputData.country = (elt != null) ? elt.value : '';
                elt = sf$.grabElementFromForm(sf$.stateFieldAlias);
                inputData.state = (elt != null) ? elt.value : '';
                elt = sf$.grabElementFromForm(sf$.cityFieldAlias);
                inputData.city = (elt != null) ? elt.value : '';

                // var selectMeth = (!sf$.doCompanySelectFlag) ? "none" : sf$.deployDropDownFlag;
                var servletHTML = "FetchContact.html";
                sfjq$.getJSON(sf$.serviceURL + servletHTML + "?jsonp=?", {
                            "tkn": sf$.token,
                            "suid": sf$.sessionID,
                            // "rfid": sf$.compID,
                            // "phnf": encodeURIComponent(sf$.phoneFormatUsed),
                            // "mth": selectMeth,
                            "av": sf$.rfAppVersion,
                            // "rqurl": encodeURIComponent(sf$.rqurl),
                            // "referer": encodeURIComponent(sf$.hrefLoc),
                            'email': inputData.email,
                            'firstName': inputData.firstName,
                            'lastName': inputData.lastName,
                            'title': inputData.title,
                            'company': inputData.company,
                            'companyURL': inputData.companyUrl,
                            'country': inputData.country,
                            'state': inputData.state,
                            'city': inputData.city
                        },
                        function(response) {
                            if (response != null && response.data.length > 0)
                                sf$.retrievingContact = false;

                            var contact = JSON.parse(response.data).contacts;
                            if (typeof contact === 'object' && Array.isArray(contact)) {
                                var oData = contact[0].oceanosData;

                                var email = oData.email || '';
                                var firstName = oData.firstName || '';
                                var lastName = oData.lastName || '';
                                var company = oData.company || '';
                                var companyWebsite = oData.companyWebsite || '';
                                var title = oData.title || '';
                                var jobRole = oData.jobRole || '';
                                var jobFunction = oData.jobFunction || '';
                                var jobSubFunction = oData.jobSubFunction || '';
                                var education = oData.education || '';
                                var expertise = oData.expertise || '';
                                var contactPhone = oData.contactPhone || '';
                                var linkedInHandle = oData.linkedInHandle || '';
                                var location = oData.location || '';
                                var twitterHandle = oData.twitterHandle || '';
                                var facebookHandle = oData.facebookHandle || '';
                                var oceanosStatus = oData.oceanosStatus || '';

                                if (title || jobRole || jobFunction || contactPhone) {
                                    sf$.contactRetrieved = true;
                                }
                                // Append time after first name
                                // Append disp or reason after last name
                                // flag to disable contact remediation

                                // CHECK FIELD EXIST BEFORE GRABBING VALUE
                                sf$.setElementValue(sf$.contactEmail, email);
                                sf$.setElementValue(sf$.contactFirstName, firstName);
                                sf$.setElementValue(sf$.contactLastName, lastName);
                                sf$.setElementValue(sf$.contactCompany, company);
                                sf$.setElementValue(sf$.contactCompanyWebsite, companyWebsite);
                                sf$.setElementValue(sf$.contactTitle, title);
                                sf$.setElementValue(sf$.contactJobRole, jobRole);
                                sf$.setElementValue(sf$.contactJobFunction, jobFunction);
                                sf$.setElementValue(sf$.contactSubFunction, jobSubFunction);
                                sf$.setElementValue(sf$.contactEducation, education);;
                                sf$.setElementValue(sf$.contactExpertise, expertise);;
                                sf$.setElementValue(sf$.contactPhone, contactPhone);
                                sf$.setElementValue(sf$.contactLinkedInHandle, linkedInHandle);
                                sf$.setElementValue(sf$.contactLocation, location);
                                sf$.setElementValue(sf$.contactTwitterHandle, twitterHandle);
                                sf$.setElementValue(sf$.contactFacebookHandle, facebookHandle);
                                sf$.setElementValue(sf$.contactStatus, oceanosStatus);

                                if (sf$.contactTimeoutID) {
                                    window.clearTimeout(sf$.contactTimeoutID)
                                    sf$.saveUse()
                                }
                            }
                        })
                        .fail(function() {
                            if (window.console) window.console.log("(!) SmartForms encountered an issue during get contact details.");
                            if (sf$.showJSONPAlerts) alert("SmartForms encountered an issue during get contact details.");
                        });
            }
        };

        sf$.contactTimeout = function() {
            if (sf$.retrievingContact) {
                sf$.retrievingContact = false;
                sf$.saveUse();
            }
        }


        /**
         * Should be the method use to Submit the form. Handles drop-down and confirmation methods of submit.
         */
        sf$.forceSelection = function() {
            // in drop-down mode or nothing in the select list to display
            if (sf$.deployDropDownFlag || (sf$.latestSearchResultsNames == null || sf$.latestSearchResultsNames.length == 0)) {
                sf$.saveUse();
                return;
            }

            var blockFrame = document.createElement("div");
            blockFrame.setAttribute("id", "RFBlockFrame");
            // IE7/8 hack - use both className and class
            if (sf$.ieVer != null && (sf$.ieVer < 9 || sf$.ieMode == "quirks"))
                blockFrame.setAttribute("className", "divBlockFrame");
            blockFrame.setAttribute("class", "divBlockFrame");

            var height = sfjq$(document).height();
            var width = sfjq$(document).width();

            if (sf$.ieVer != null && (sf$.ieVer < 9 || sf$.ieMode == "quirks")) {
                blockFrame.style.setAttribute("cssText",
                    "width:" + width + "px; height:" + height + "px; left:0; top:0; position:absolute; background-color:#888888; filter:alpha(opacity=60); " +
                    "visibility:visible; z-index:1000; background-image:url(" + sf$.httpProtocol + "d12ulf131zb0yj.cloudfront.net/SmartForms3-0/assets/img/grey.jpg);");
            } else
                blockFrame.setAttribute("style",
                    "width:" + width + "px; height:" + height + "px; left:0; top:0; position:absolute; background-color:#888888; " +
                    "-moz-opacity:0.6; opacity:0.6; visibility:visible; z-index:1000; background-image:url(" + sf$.httpProtocol + "d12ulf131zb0yj.cloudfront.net/SmartForms3-0/assets/img/grey.jpg);");

            sfjq$("body").prepend(blockFrame);

            if (blockFrame.addEventListener) {
                blockFrame.addEventListener("mouseover", sf$.evntListener[7], false);
                blockFrame.addEventListener("mouseout", sf$.evntListener[8], false);
            } else if (blockFrame.attachEvent) {
                blockFrame.attachEvent("onmouseover", sf$.evntListener[7]);
                blockFrame.attachEvent("onmouseout", sf$.evntListener[8]);
            } else {
                blockFrame.onmouseover = sf$.evntListener[7];
                blockFrame.onmouseout = sf$.evntListener[8];
            }

            var dispObj = sf$.grabElementById(sf$.selectListDivID);
            dispObj.style.zIndex = 1001;

            sf$.allowDropDownHide = false;
            sf$.dataSubmitInProcess = true;
            sf$.displayConfirmation();
        };

        /**
         * Wait for field changed to complete.
         */
        sf$.displayConfirmation = function() {
            if (!sf$.dataReady) {
                setTimeout("sf$.displayConfirmation();", 100);
            } else {
                sf$.dataAvailable(sf$.callIndex, sf$.latestSearchResultsNames, sf$.latestSearchResultsData, sf$.latestSearchResultsIDs);
                sf$.centerSelectListDiv();
            }
        };

        /**
         * Called by the fieldChange handler to hand over returned data.
         * Builds a table of the return results and puts it in the 'RFDisplayFrame' div.
         */
        sf$.dataAvailable = function(callId, nameList, detailsList, idList) {
            if (callId == sf$.callIndex) {
                bigResult = "<table class=\"tabCompList\" width=\"100%\" >";
                if (!sf$.allowDropDownHide) {
                    bigResult += sf$.selectListTitlePhrase;
                }
                if (nameList != null && nameList.length > 0 && nameList[nameList.length - 1] != sf$.notaPhrase) {
                    nameList.push(sf$.notaPhrase);
                    detailsList.push("&nbsp;");
                    idList.push("0");
                }
                for (var x = 0; x < nameList.length && x < detailsList.length && x < idList.length; x++) {
                    var color;
                    if (x < (nameList.length - 1)) {
                        color = sf$.selectListColor2;
                        if (x % 2 == 1)
                            color = sf$.selectListColor1;
                        result = "<tr class=\"tabCompTR\" onclick=\"sf$.getDetails('" + escape(nameList[x]) + "','" + idList[x] +
                            "');sf$.hideDisplay(0);\" onmouseover=\"sf$.onOver(this)\" onmouseout=\"sf$.onOut(this," + x % 2 +
                            ",1)\" style=\"background-color:" + color + ";\">" + "<td class=\"tabCompTD\"><div class=\"divCompList\" >" +
                            "<div class=\"divCompName\">" + nameList[x] + "</div><div class=\"divCompDetails\" style=\"font-size:75%;\">" + detailsList[x] + "</div>";
                        bigResult += result + "</div></td></tr>\n";
                    } else {
                        color = sf$.selectListNAColor2;
                        if (x % 2 == 1)
                            color = sf$.selectListNAColor1;
                        result = "<tr class=\"tabCompNATR\" onclick=\"sf$.getDetails('" + escape(nameList[x]) + "','" + idList[x] +
                            "');sf$.hideDisplay(0);\" onmouseover=\"sf$.onOver(this)\" onmouseout=\"sf$.onOut(this," + x % 2 +
                            ",2)\" style=\"background-color:" + color + ";\">" + "<td class=\"tabCompNATD\"><div class=\"divCompNAList\" >" +
                            "<div class=\"divCompNADetails\" style=\"font-size:75%;\">" + detailsList[x] + "</div><div class=\"divCompNAName\">" + nameList[x] + "</div>";
                        bigResult += result + "</div></td></tr>\n";
                    }
                }
                if (sf$.deployDropDownFlag && nameList.length == 0) {
                    sf$.clearDropdown();
                    sf$.hideDisplay(-1)
                }
                if (nameList.length > 0) {
                    sf$.dropFilled = true;
                    if ((sf$.deployDropDownFlag && (sfjq$(document.activeElement).attr("id") == sf$.companyNameFieldAlias || sfjq$(document.activeElement).attr("id") == sf$.emailFieldAlias)) || !sf$.deployDropDownFlag)
                        sf$.showDisplay(0);
                    var Dframe = sf$.grabElementById(sf$.selectListDivID);
                    Dframe.innerHTML = bigResult + "</table><div class=\"divCompFooter\">" + sf$.selectListFooterPhrase + "</div>";
                } else if (sf$.dataSubmitInProcess)
                    sf$.completeOngoingSubmit();
            }
        };

        /**
         * Used with the confirmation method to complete a submit request.
         */
        sf$.completeOngoingSubmit = function() {
            if (sf$.dataSubmitInProcess) {
                sf$.displayLoadingDiv();
                sf$.saveUse();
            }
        };

        sf$.displayLoadingDiv = function() {
            // loading animation
            var loadingFrame = document.createElement("div");
            loadingFrame.setAttribute("id", "RFLoadingFrame");
            // IE7/8 hack - use both className and class
            if (sf$.ieVer != null && (sf$.ieVer < 9 || sf$.ieMode == "quirks"))
                loadingFrame.setAttribute("className", "divLoadingFrame");
            loadingFrame.setAttribute("class", "divLoadingFrame");

            if (sf$.ieVer != null && (sf$.ieVer < 9 || sf$.ieMode == "quirks"))
                loadingFrame.style.setAttribute("cssText",
                    "width:75px; height:75px; position:absolute; " +
                    "visibility:visible; z-index:1001; background-image:url(" + sf$.httpProtocol + "d12ulf131zb0yj.cloudfront.net/SmartForms3-0/assets/img/loading-animation-75.gif);");
            else
                loadingFrame.setAttribute("style",
                    "width:75px; height:75px; position:absolute; " +
                    "visibility:visible; z-index:1001; background-image:url(" + sf$.httpProtocol + "d12ulf131zb0yj.cloudfront.net/SmartForms3-0/assets/img/loading-animation-75.gif);");

            sfjq$("body").prepend(loadingFrame);
            sf$.centerLoadingDiv();
        }

        /**
         * Called from forceSelection(). Informs the ReachForce system which company was
         * used(if any) and sends any manually entered data for cleansing and verification.
         */
        sf$.saveUse = function() {
            if (sf$.retrievingContact) {
                sf$.displayLoadingDiv();
                sf$.contactTimeoutID = setTimeout("sf$.contactTimeout();", 1000);
                return;
            }
            if (sf$.canRun) {
                sf$.formSaved = true;
                sf$.hideDisplay(0);

                var elt, first = "",
                    last = "",
                    email = "",
                    uid1 = "",
                    uid2 = "",
                    uid3 = "",
                    revIPCty = "",
                    revIPSt = "",
                    revIPStc = "",
                    revIPCntry = "",
                    revIPAreaCd = "";
                elt = sf$.grabElementFromForm(sf$.firstNameFieldAlias);
                if (elt != null) first = elt.value;
                elt = sf$.grabElementFromForm(sf$.lastNameFieldAlias);
                if (elt != null) last = elt.value;
                elt = sf$.grabElementFromForm(sf$.emailFieldAlias);
                if (elt != null) email = elt.value;
                elt = sf$.grabElementFromForm(sf$.uid1FieldAlias);
                if (elt != null) uid1 = elt.value;
                elt = sf$.grabElementFromForm(sf$.uid2FieldAlias);
                if (elt != null) uid2 = elt.value;
                elt = sf$.grabElementFromForm(sf$.uid3FieldAlias);
                if (elt != null) uid3 = elt.value;

                if (sf$.revIPFilterFlag) {
                    revIPCty = sfjq$.trim(sf$.revIPCty);
                    revIPSt = sfjq$.trim(sf$.revIPSt);
                    revIPStc = sfjq$.trim(sf$.revIPStc);
                    revIPCntry = sfjq$.trim(sf$.revIPCntry);
                    revIPAreaCd = sfjq$.trim(sf$.revIPAreaCd);
                }

                //log company firmographics
                var addr1 = "",
                    addr2 = "",
                    city = "",
                    state = "",
                    zip = "",
                    name = "",
                    country = "",
                    phone = "";
                if (sf$.frmChanged || !sf$.deployDropDownFlag) {
                    elt = sf$.grabElementFromForm(sf$.addr1FieldAlias);
                    if (elt != null) addr1 = elt.value;
                    elt = sf$.grabElementFromForm(sf$.addr2FieldAlias);
                    if (elt != null) addr2 = elt.value;
                    elt = sf$.grabElementFromForm(sf$.cityFieldAlias);
                    if (elt != null) city = elt.value;
                    elt = sf$.grabElementFromForm(sf$.stateFieldAlias);
                    if (elt != null) state = sf$.getInputData(sf$.stateFieldAlias, sf$.useStateText);
                    elt = sf$.grabElementFromForm(sf$.zipFieldAlias);
                    if (elt != null) zip = elt.value;
                    elt = sf$.grabElementFromForm(sf$.companyNameFieldAlias);
                    if (elt != null)
                        name = elt.value;
                    else
                        sf$.junkNameDetected = true;
                    elt = sf$.grabElementFromForm(sf$.countryFieldAlias);
                    if (elt != null) country = sf$.getInputData(sf$.countryFieldAlias, sf$.useCountryText);
                    elt = sf$.grabElementFromForm(sf$.phoneFieldAlias);
                    if (elt != null) phone = elt.value;
                }

                var selectMeth = (!sf$.doCompanySelectFlag) ? "none" : sf$.deployDropDownFlag;
                if (!sf$.emailOnlyFilterFlag && (!sf$.junkNameDetected || (!sf$.frmChanged && sf$.grabElementFromForm(sf$.companyNameFieldAlias).value.length > 0) || sf$.callIndex < 0)) {
                    sf$.isJunkName(sf$.grabElementFromForm(sf$.companyNameFieldAlias).value);
                }
                if (sf$.lastEmail != email || email == null || email.length == 0) {
                	//clearTech() removed so tech data won't be removed on remediation. It should have techData from fetchCompany
                	sf$.clearTech(); // 2/2018 - if email has changed, check tech install again. email domain sould take precedence
                    sf$.junkEmailDetected = true;                    
                }
                sf$.callIndex = -1;
                var servletHTML = "CompanyUsed.html";

                // JSONP does not have native error handling - timeout in a reasonable amount of time
                var errTimeoutID = setTimeout(sf$.saveUseTimeoutHandler, 10000); //10000=10sec
                if (sf$.frmChanged || !sf$.deployDropDownFlag) {
                    sfjq$.getJSON(sf$.serviceURL + servletHTML + "?jsonp=?", {
                        "tkn": sf$.token,
                        "rfid": encodeURIComponent(sf$.compID),
                        "rvxidflg": encodeURIComponent(sf$.rVXIDFlag),
                        "vxid": encodeURIComponent(sf$.vXID),
                        "mcty": encodeURIComponent(sf$.mCity),
                        "mst": encodeURIComponent(sf$.mState),
                        "mctry": encodeURIComponent(sf$.mCountry),
                        "mcont": encodeURIComponent(sf$.mContCd),
                        "chng": sf$.frmChanged,
                        "rpm": sf$.remediateCompanyFlag,
                        "rpml": sf$.remediateCompanyLevelUsed,
                        "jnd": sf$.junkNameDetected,
                        "mth": selectMeth,
                        "av": sf$.rfAppVersion,
                        "fn": encodeURIComponent(first),
                        "ln": encodeURIComponent(last),
                        "em": encodeURIComponent(email),
                        "u1": uid1,
                        "u2": uid2,
                        "u3": uid3,
                        "suid": sf$.sessionID,
                        "rcty": encodeURIComponent(revIPCty),
                        "rst": encodeURIComponent(revIPSt),
                        "rstc": encodeURIComponent(revIPStc),
                        "rctry": encodeURIComponent(revIPCntry),
                        "rac": encodeURIComponent(revIPAreaCd),
                        "browserIP": sf$.ipLoc,
                        //"tf": "false",
                        "tf" : encodeURIComponent(sf$.techFilled),
                        "rqurl": encodeURIComponent(sf$.rqurl),
                        "referer": encodeURIComponent(sf$.hrefLoc),
                        "soe": sf$.savingOnExit,
                        "addr1": encodeURIComponent(addr1),
                        "addr2": encodeURIComponent(addr2),
                        "cty": encodeURIComponent(city),
                        "st": encodeURIComponent(state),
                        "zp": encodeURIComponent(zip),
                        "nm": encodeURIComponent(name),
                        "ctry": encodeURIComponent(country),
                        "phn": encodeURIComponent(phone),
                        "phnf": encodeURIComponent(sf$.phoneFormatUsed)
                    },
                    function(response) {
                        clearTimeout(errTimeoutID);
                        if (response != null && response.data.length > 0)
                            sf$.saveUseHandler(sf$.stringToXML(response.data));
                    })
                    .fail(function() {
                        clearTimeout(errTimeoutID);
                        sf$.fillScore("unexpected error", "", "", "");
                        if (window.console) window.console.log("(!) SmartForms encountered an issue during save use (a).");
                        if (sf$.showJSONPAlerts) alert("SmartForms encountered an issue during save use (a).");
                    })
                    .done(function() {
                        sf$.doSmartFormSubmit();
                    });
                } else {
                    sfjq$.getJSON(sf$.serviceURL + servletHTML + "?jsonp=?", {
                        "tkn": sf$.token,
                        "rfid": encodeURIComponent(sf$.compID),
                        "rvxidflg": encodeURIComponent(sf$.rVXIDFlag),
                        "vxid": encodeURIComponent(sf$.vXID),
                        "mcty": encodeURIComponent(sf$.mCity),
                        "mst": encodeURIComponent(sf$.mState),
                        "mctry": encodeURIComponent(sf$.mCountry),
                        "mcont": encodeURIComponent(sf$.mContCd),
                        "chng": sf$.frmChanged,
                        "rpm": sf$.remediateCompanyFlag,
                        "rpml": sf$.remediateCompanyLevelUsed,
                        "jnd": sf$.junkNameDetected,
                        "mth": selectMeth,
                        "av": sf$.rfAppVersion,
                        "fn": encodeURIComponent(first),
                        "ln": encodeURIComponent(last),
                        "em": encodeURIComponent(email),
                        "u1": uid1,
                        "u2": uid2,
                        "u3": uid3,
                        "suid": sf$.sessionID,
                        "rcty": encodeURIComponent(revIPCty),
                        "rst": encodeURIComponent(revIPSt),
                        "rstc": encodeURIComponent(revIPStc),
                        "rctry": encodeURIComponent(revIPCntry),
                        "rac": encodeURIComponent(revIPAreaCd),
                        "browserIP": sf$.ipLoc,
                        //"tf": "false",
                        "tf" : encodeURIComponent(sf$.techFilled),
                        "rqurl": encodeURIComponent(sf$.rqurl),
                        "referer": encodeURIComponent(sf$.hrefLoc),
                        "soe": sf$.savingOnExit
                        },
                        function(response) {
                            clearTimeout(errTimeoutID);
                            // not expecting a response with data
                            if (response != null && response.data.length > 0)
                                sf$.saveUseHandler(sf$.stringToXML(response.data));
                        })
                        .fail(function() {
                            clearTimeout(errTimeoutID);
                            sf$.fillScore("unexpected error", "", "", "");
                            if (window.console) window.console.log("(!) SmartForms encountered an issue during save use (b).");
                            if (sf$.showJSONPAlerts) alert("SmartForms encountered an issue during save use (b).");
                        })
                        .done(function() {
                            sf$.doSmartFormSubmit();
                        });
                }
            } else {
                sf$.doSmartFormSubmit();
            }
        };

        sf$.saveUseHandler = function(resXML) {
            if (resXML.getElementsByTagName("junkemail")[0].firstChild != null) {
                switch (resXML.getElementsByTagName("junkemail")[0].firstChild.data) {
                    case "false":
                        sf$.junkEmailDetected = false;
                        break;
                    default:
                        sf$.junkEmailDetected = true;
                }
                sf$.fillScore("user", "", "", "");
            }

            var found = "false";
            if (resXML.getElementsByTagName("cofound")[0].firstChild != null)
                found = resXML.getElementsByTagName("cofound")[0].firstChild.data;
            if (found === "true") {
                sf$.fillFromTechXML(resXML);
            }

            found = "false";
            if (resXML.getElementsByTagName("found")[0].firstChild != null) {
                found = resXML.getElementsByTagName("found")[0].firstChild.data;
                //results of an RPM
                sf$.fillFromXML(resXML, found, "rpm");
            }
        };

        /**
         * JSONP pseudo error handler for saveUse
         */
        sf$.saveUseTimeoutHandler = function() {
            // JSONP request took too long b/c a possible error occurred, submit the page
            sf$.fillScore("time out", "", "", "");
            sf$.doSmartFormSubmit();
        };

        /**
         * If the form has not been saved, and at least one non-empty field, this saves the field.
         * Should be called from <body onbeforeunload="savePartialOnExit();">
         */
        sf$.savePartialOnExit = function() {
            if (!sf$.formSaved &&
                ((sf$.grabElementFromForm(sf$.firstNameFieldAlias) != null && sf$.grabElementFromForm(sf$.firstNameFieldAlias).value != "") ||
                    (sf$.grabElementFromForm(sf$.lastNameFieldAlias) != null && sf$.grabElementFromForm(sf$.lastNameFieldAlias).value != "") ||
                    (sf$.grabElementFromForm(sf$.emailFieldAlias) != null && sf$.grabElementFromForm(sf$.emailFieldAlias).value != "") ||
                    (sf$.grabElementFromForm(sf$.addr1FieldAlias) != null && sf$.grabElementFromForm(sf$.addr1FieldAlias).value != "") ||
                    (sf$.grabElementFromForm(sf$.addr2FieldAlias) != null && sf$.grabElementFromForm(sf$.addr2FieldAlias).value != "") ||
                    (sf$.grabElementFromForm(sf$.cityFieldAlias) != null && sf$.grabElementFromForm(sf$.cityFieldAlias).value != "") ||
                    (sf$.grabElementFromForm(sf$.stateFieldAlias) != null && sf$.grabElementFromForm(sf$.stateFieldAlias).value != "") ||
                    (sf$.grabElementFromForm(sf$.zipFieldAlias) != null && sf$.grabElementFromForm(sf$.zipFieldAlias).value != "") ||
                    (sf$.grabElementFromForm(sf$.companyNameFieldAlias) != null && sf$.grabElementFromForm(sf$.companyNameFieldAlias).value != "") ||
                    (sf$.grabElementFromForm(sf$.countryFieldAlias) != null && sf$.grabElementFromForm(sf$.countryFieldAlias).value != "") ||
                    (sf$.grabElementFromForm(sf$.phoneFieldAlias) != null && sf$.grabElementFromForm(sf$.phoneFieldAlias).value != ""))) {
                sf$.savingOnExit = true;
                sf$.saveUse();
            }
        };

        /**
         * Submit the page.
         */
        sf$.doSmartFormSubmit = function() {
            if (sf$.overrideSubmit) {
                try {
                    sf$.frmElt._submit();
                } catch (err) {
                    // probably because runSFSetup() failed and form.submit() was not over written
                    sf$.frmElt.submit();
                }
            }
        };

        // Takes an xml object and a key and returns the value
        sf$.getXmlValue = function(xml, key) {
            var node = xml.getElementsByTagName(key)[0].firstChild;
            return node != null ? sf$.xmlDecode(node.data) : "";
        }

        //Fills elements on the form with geo-IP inferred data.
        sf$.fillFromIPXML = function(inXML) {
            if (inXML != null) {
                var ipResXML = inXML.getElementsByTagName("ipinferred")[0];
                if (ipResXML != null) {
                    var city = sf$.getXmlValue(ipResXML, "city"),
                        stateCode = sf$.getXmlValue(ipResXML, "statecode"),
                        country = sf$.getXmlValue(ipResXML, "country"),
                        areaCode = sf$.getXmlValue(ipResXML, "areacode"),
                        latitude = sf$.getXmlValue(ipResXML, "latitude"),
                        longitude = sf$.getXmlValue(ipResXML, "longitude"),
                        rfid = "";
                    if (ipResXML.getElementsByTagName("rfid")[0].firstChild != null)
                        rfid = ipResXML.getElementsByTagName("rfid")[0].firstChild.data;

                    sf$.revIPCompID = rfid;
                    sf$.revIPCty = city;
                    sf$.revIPSt = stateCode;
                    sf$.revIPCntry = country;
                    sf$.revIPAreaCd = areaCode;
                    sf$.revIPLat = latitude;
                    sf$.revIPLong = longitude;

                    var elt = sf$.grabElementFromForm(sf$.inferredCityFieldAlias);
                    if (elt != null) elt.value = city;
                    elt = sf$.grabElementFromForm(sf$.inferredStateFieldAlias);
                    if (elt != null) elt.value = stateCode;
                    elt = sf$.grabElementFromForm(sf$.inferredCountryFieldAlias);
                    if (elt != null) elt.value = country;
                    elt = sf$.grabElementFromForm(sf$.inferredAreaCodeFieldAlias);
                    if (elt != null) elt.value = areaCode;
                }
            }
        };

        /**
         * Fills elements on the form with tech inferred data.
         */
        sf$.fillFromTechXML = function(inXML) {
            if (inXML != null) {
                sf$.clearTech();

                var elt, coInfXML = inXML.getElementsByTagName("coinferred")[0];
                if (coInfXML != null) {
                    if (coInfXML.getElementsByTagName("rqurl") != null && coInfXML.getElementsByTagName("rqurl")[0] != null && coInfXML.getElementsByTagName("rqurl")[0].firstChild != null)
                        sf$.rqurl = sf$.xmlDecode(coInfXML.getElementsByTagName("rqurl")[0].firstChild.data);

                    elt = sf$.grabElementFromForm(sf$.inferredEmployeesFieldAlias);
                    if (elt != null && coInfXML.getElementsByTagName("emptotal")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coInfXML.getElementsByTagName("emptotal")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.inferredIndustryFieldAlias);
                    if (elt != null && coInfXML.getElementsByTagName("industry")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coInfXML.getElementsByTagName("industry")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.inferredPublicFieldAlias);
                    if (elt != null && coInfXML.getElementsByTagName("public")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coInfXML.getElementsByTagName("public")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.inferredRevenueFieldAlias);
                    if (elt != null && coInfXML.getElementsByTagName("sales")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coInfXML.getElementsByTagName("sales")[0].firstChild.data);
                }
                var coTechXML = inXML.getElementsByTagName("cotech")[0];
                if (coTechXML != null) {
                    elt = sf$.grabElementFromForm(sf$.techAdvertisementFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tadvert")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tadvert")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techAlexaFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("talexa")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("talexa")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techAnalyticsAndTrackingFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tanalytics")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tanalytics")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techChatsFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tchats")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tchats")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techCMSFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tcms")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tcms")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techCommentsFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tcomments")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tcomments")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techContentDeliveryNetworksFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tcdn")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tcdn")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techDomainNameServicesFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tdns")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tdns")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techECommerceFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tecom")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tecom")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techEmailDeliverySpamProtectionFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tespamprotect")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tespamprotect")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techEmailMarketingFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("temarketing")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("temarketing")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techEmailProvidersFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("teproviders")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("teproviders")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techFontsFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tfonts")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tfonts")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techHostedFormsFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tforms")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tforms")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techHostingFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("thosting")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("thosting")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techLoadBalancersFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tloadbal")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tloadbal")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techMarketingAutomationFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tma")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tma")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techMediaFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tmedia")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tmedia")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techPaymentsFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tpay")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tpay")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techPersonalizationFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tpersonal")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tpersonal")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techRecruitmentFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("trecruit")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("trecruit")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techRestaurantReservationServicesFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("trestressers")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("trestressers")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techSecurityFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tsec")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tsec")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techSSLCertificatesFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tsslcerts")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tsslcerts")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techSupportFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("tsupport")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("tsupport")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techTagManagementFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("ttagmgt")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("ttagmgt")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techWebAcceleratorsFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("twebaccel")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("twebaccel")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techWebPerformanceMonitoringFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("twebperfmon")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("twebperfmon")[0].firstChild.data);
                    elt = sf$.grabElementFromForm(sf$.techWidgetsFieldAlias);
                    if (elt != null && coTechXML.getElementsByTagName("twidgets")[0].firstChild != null)
                        elt.value = sf$.xmlDecode(coTechXML.getElementsByTagName("twidgets")[0].firstChild.data);
                }
                sf$.techFilled = true;
            }
        };

        // Fills elements on the form with selected or matched company information.
        sf$.fillFromXML = function(inXML, companyFound, src) {
            var fromRPM = false;
            if (inXML != null) {
                sf$.clearHidden();

                if (inXML.getElementsByTagName("suid")[0].firstChild != null)
                    sf$.fillSuid(inXML.getElementsByTagName("suid")[0].firstChild.data);

                if (src === "rpm" && inXML.getElementsByTagName("confidencelevel")[0].firstChild != null) {
                    var confidenceLevel = inXML.getElementsByTagName("confidencelevel")[0].firstChild.data;
                    var matchScore = "",
                        threshold = "",
                        engineType = "";
                    if (inXML.getElementsByTagName("matchscore")[0].firstChild != null)
                        matchScore = inXML.getElementsByTagName("matchscore")[0].firstChild.data;
                    if (inXML.getElementsByTagName("threshold")[0].firstChild != null)
                        threshold = inXML.getElementsByTagName("threshold")[0].firstChild.data;
                    if (inXML.getElementsByTagName("enginetype")[0].firstChild != null)
                        engineType = inXML.getElementsByTagName("enginetype")[0].firstChild.data;
                    sf$.fillScore(confidenceLevel, matchScore, threshold, engineType);
                    fromRPM = true;
                } else {
                    sf$.fillScore("user", "", "", "");
                }

                if (companyFound == "true") {
                    var compResponseXML = inXML.getElementsByTagName("company")[0];
                    if (compResponseXML != null) {
                        var name = sf$.getXmlValue(compResponseXML, "name"),
                            address1 = sf$.getXmlValue(compResponseXML, "streetAddress1"),
                            address2 = sf$.getXmlValue(compResponseXML, "streetAddress2"),
                            city = sf$.getXmlValue(compResponseXML, "city"),
                            state = sf$.getXmlValue(compResponseXML, "state"),
                            zip = sf$.getXmlValue(compResponseXML, "zip"),
                            country = sf$.getXmlValue(compResponseXML, "country"),
                            phone = sf$.getXmlValue(compResponseXML, "phone"),
                            tradeStyleName = sf$.getXmlValue(compResponseXML, "tradestylename"),
                            yearstart = sf$.getXmlValue(compResponseXML, "yearstart"),
                            stateCode = sf$.getXmlValue(compResponseXML, "statecode"),
                            countryCode = sf$.getXmlValue(compResponseXML, "countrycode"),
                            empTotal = sf$.getXmlValue(compResponseXML, "emptotal"),
                            empHere = sf$.getXmlValue(compResponseXML, "emphere"),
                            sales = sf$.getXmlValue(compResponseXML, "sales"),
                            sic = sf$.getXmlValue(compResponseXML, "sic"),
                            sicName = sf$.getXmlValue(compResponseXML, "sicname"),
                            sic8 = sf$.getXmlValue(compResponseXML, "sic8"),
                            sic8Name = sf$.getXmlValue(compResponseXML, "sic8name"),
                            naics = sf$.getXmlValue(compResponseXML, "naics"),
                            naicsName = sf$.getXmlValue(compResponseXML, "naicsname"),
                            url = sf$.getXmlValue(compResponseXML, "url"),
                            locType = sf$.getXmlValue(compResponseXML, "type"),
                            subsidiary = sf$.getXmlValue(compResponseXML, "subsidiary"),
                            familyMems = sf$.getXmlValue(compResponseXML, "familymembers"),
                            g2k = sf$.getXmlValue(compResponseXML, "g2k"),
                            f500 = sf$.getXmlValue(compResponseXML, "f500"),
                            tkr = sf$.getXmlValue(compResponseXML, "tkr"),
                            lat = sf$.getXmlValue(compResponseXML, "lat"),
                            long = sf$.getXmlValue(compResponseXML, "long"),
                            xid = sf$.getXmlValue(compResponseXML, "xid"),
                            vxid = sf$.getXmlValue(compResponseXML, "vxid"),
                            coattr1 = sf$.getXmlValue(compResponseXML, "coattr1"),
                            coattr2 = sf$.getXmlValue(compResponseXML, "coattr2"),
                            coattr3 = sf$.getXmlValue(compResponseXML, "coattr3"),
                            coattr4 = sf$.getXmlValue(compResponseXML, "coattr4"),
                            coattr5 = sf$.getXmlValue(compResponseXML, "coattr5"),
                            rfid = sf$.getXmlValue(compResponseXML, "rfid");

                        sf$.rVXIDFlag      = sf$.getXmlValue(compResponseXML, "rvxidflg");
                        sf$.vXID           = vxid;
                        sf$.mCity          = city;
                        sf$.mState         = state;
                        sf$.mCountry       = countryCode;
                        sf$.mContCd        = sf$.getXmlValue(compResponseXML, "continentCode");

                        sf$.fillFields(name, address1, address2, city, state, zip, country, phone,
                            tradeStyleName, yearstart, stateCode, countryCode, empTotal, empHere, sales, sic,
                            sicName, sic8, sic8Name, naics, naicsName, url, locType, subsidiary, familyMems,
                            g2k, f500, tkr, lat, long, xid, vxid, coattr1, coattr2, coattr3, coattr4,
                            coattr5, rfid, fromRPM);
                    }

                    var hqCompResponseXML = inXML.getElementsByTagName("hqcompany")[0];
                    if (hqCompResponseXML != null) {
                        name = sf$.getXmlValue(hqCompResponseXML, "name");
                        address1 = sf$.getXmlValue(hqCompResponseXML, "streetAddress1");
                        address2 = sf$.getXmlValue(hqCompResponseXML, "streetAddress2");
                        city = sf$.getXmlValue(hqCompResponseXML, "city");
                        state = sf$.getXmlValue(hqCompResponseXML, "state");
                        zip = sf$.getXmlValue(hqCompResponseXML, "zip");
                        country = sf$.getXmlValue(hqCompResponseXML, "country");
                        phone = sf$.getXmlValue(hqCompResponseXML, "phone");
                        tradeStyleName = sf$.getXmlValue(hqCompResponseXML, "tradestylename");
                        yearstart = sf$.getXmlValue(hqCompResponseXML, "yearstart");
                        stateCode = sf$.getXmlValue(hqCompResponseXML, "statecode");
                        countryCode = sf$.getXmlValue(hqCompResponseXML, "countrycode");
                        empTotal = sf$.getXmlValue(hqCompResponseXML, "emptotal");
                        empHere = sf$.getXmlValue(hqCompResponseXML, "emphere");
                        sales = sf$.getXmlValue(hqCompResponseXML, "sales");
                        sic = sf$.getXmlValue(hqCompResponseXML, "sic");
                        sicName = sf$.getXmlValue(hqCompResponseXML, "sicname");
                        sic8 = sf$.getXmlValue(hqCompResponseXML, "sic8");
                        sic8Name = sf$.getXmlValue(hqCompResponseXML, "sic8name");
                        naics = sf$.getXmlValue(hqCompResponseXML, "naics");
                        naicsName = sf$.getXmlValue(hqCompResponseXML, "naicsname");
                        url = sf$.getXmlValue(hqCompResponseXML, "url");
                        locType = sf$.getXmlValue(hqCompResponseXML, "type");
                        subsidiary = sf$.getXmlValue(hqCompResponseXML, "subsidiary");
                        familyMems = sf$.getXmlValue(hqCompResponseXML, "familymembers");
                        g2k = sf$.getXmlValue(hqCompResponseXML, "g2k");
                        f500 = sf$.getXmlValue(hqCompResponseXML, "f500");
                        tkr = sf$.getXmlValue(hqCompResponseXML, "tkr");
                        lat = sf$.getXmlValue(hqCompResponseXML, "lat");
                        long = sf$.getXmlValue(hqCompResponseXML, "long");
                        xid = sf$.getXmlValue(hqCompResponseXML, "xid");
                        vxid = sf$.getXmlValue(hqCompResponseXML, "vxid");

                        sf$.fillHQFields(name, address1, address2, city, state, zip, country, phone,
                            tradeStyleName, yearstart, stateCode, countryCode, empTotal, empHere, sales, sic,
                            sicName, sic8, sic8Name, naics, naicsName, url, locType, subsidiary, familyMems,
                            g2k, f500, tkr, lat, long, xid, vxid);
                    }

                    var dhqCompResponseXML = inXML.getElementsByTagName("dhqcompany")[0];
                    if (dhqCompResponseXML != null) {
                        name = sf$.getXmlValue(dhqCompResponseXML, "name");
                        address1 = sf$.getXmlValue(dhqCompResponseXML, "streetAddress1");
                        address2 = sf$.getXmlValue(dhqCompResponseXML, "streetAddress2");
                        city = sf$.getXmlValue(dhqCompResponseXML, "city");
                        state = sf$.getXmlValue(dhqCompResponseXML, "state");
                        zip = sf$.getXmlValue(dhqCompResponseXML, "zip");
                        country = sf$.getXmlValue(dhqCompResponseXML, "country");
                        phone = sf$.getXmlValue(dhqCompResponseXML, "phone");
                        tradeStyleName = sf$.getXmlValue(dhqCompResponseXML, "tradestylename");
                        yearstart = sf$.getXmlValue(dhqCompResponseXML, "yearstart");
                        stateCode = sf$.getXmlValue(dhqCompResponseXML, "statecode");
                        countryCode = sf$.getXmlValue(dhqCompResponseXML, "countrycode");
                        empTotal = sf$.getXmlValue(dhqCompResponseXML, "emptotal");
                        empHere = sf$.getXmlValue(dhqCompResponseXML, "emphere");
                        sales = sf$.getXmlValue(dhqCompResponseXML, "sales");
                        sic = sf$.getXmlValue(dhqCompResponseXML, "sic");
                        sicName = sf$.getXmlValue(dhqCompResponseXML, "sicname");
                        sic8 = sf$.getXmlValue(dhqCompResponseXML, "sic8");
                        sic8Name = sf$.getXmlValue(dhqCompResponseXML, "sic8name");
                        naics = sf$.getXmlValue(dhqCompResponseXML, "naics");
                        naicsName = sf$.getXmlValue(dhqCompResponseXML, "naicsname");
                        url = sf$.getXmlValue(dhqCompResponseXML, "url");
                        locType = sf$.getXmlValue(dhqCompResponseXML, "type");
                        subsidiary = sf$.getXmlValue(dhqCompResponseXML, "subsidiary");
                        familyMems = sf$.getXmlValue(dhqCompResponseXML, "familymembers");
                        g2k = sf$.getXmlValue(dhqCompResponseXML, "g2k");
                        f500 = sf$.getXmlValue(dhqCompResponseXML, "f500");
                        tkr = sf$.getXmlValue(dhqCompResponseXML, "tkr");
                        lat = sf$.getXmlValue(dhqCompResponseXML, "lat");
                        long = sf$.getXmlValue(dhqCompResponseXML, "long");
                        xid = sf$.getXmlValue(dhqCompResponseXML, "xid");
                        vxid = sf$.getXmlValue(dhqCompResponseXML, "vxid");

                        sf$.fillDHQFields(name, address1, address2, city, state, zip, country, phone,
                            tradeStyleName, yearstart, stateCode, countryCode, empTotal, empHere, sales, sic,
                            sicName, sic8, sic8Name, naics, naicsName, url, locType, subsidiary, familyMems,
                            g2k, f500, tkr, lat, long, xid, vxid);
                    }

                    var ghqCompResponseXML = inXML.getElementsByTagName("ghqcompany")[0];
                    if (ghqCompResponseXML != null) {
                        name = sf$.getXmlValue(ghqCompResponseXML, "name");
                        address1 = sf$.getXmlValue(ghqCompResponseXML, "streetAddress1");
                        address2 = sf$.getXmlValue(ghqCompResponseXML, "streetAddress2");
                        city = sf$.getXmlValue(ghqCompResponseXML, "city");
                        state = sf$.getXmlValue(ghqCompResponseXML, "state");
                        zip = sf$.getXmlValue(ghqCompResponseXML, "zip");
                        country = sf$.getXmlValue(ghqCompResponseXML, "country");
                        phone = sf$.getXmlValue(ghqCompResponseXML, "phone");
                        tradeStyleName = sf$.getXmlValue(ghqCompResponseXML, "tradestylename");
                        yearstart = sf$.getXmlValue(ghqCompResponseXML, "yearstart");
                        stateCode = sf$.getXmlValue(ghqCompResponseXML, "statecode");
                        countryCode = sf$.getXmlValue(ghqCompResponseXML, "countrycode");
                        empTotal = sf$.getXmlValue(ghqCompResponseXML, "emptotal");
                        empHere = sf$.getXmlValue(ghqCompResponseXML, "emphere");
                        sales = sf$.getXmlValue(ghqCompResponseXML, "sales");
                        sic = sf$.getXmlValue(ghqCompResponseXML, "sic");
                        sicName = sf$.getXmlValue(ghqCompResponseXML, "sicname");
                        sic8 = sf$.getXmlValue(ghqCompResponseXML, "sic8");
                        sic8Name = sf$.getXmlValue(ghqCompResponseXML, "sic8name");
                        naics = sf$.getXmlValue(ghqCompResponseXML, "naics");
                        naicsName = sf$.getXmlValue(ghqCompResponseXML, "naicsname");
                        url = sf$.getXmlValue(ghqCompResponseXML, "url");
                        locType = sf$.getXmlValue(ghqCompResponseXML, "type");
                        subsidiary = sf$.getXmlValue(ghqCompResponseXML, "subsidiary");
                        familyMems = sf$.getXmlValue(ghqCompResponseXML, "familymembers");
                        g2k = sf$.getXmlValue(ghqCompResponseXML, "g2k");
                        f500 = sf$.getXmlValue(ghqCompResponseXML, "f500");
                        tkr = sf$.getXmlValue(ghqCompResponseXML, "tkr");
                        lat = sf$.getXmlValue(ghqCompResponseXML, "lat");
                        long = sf$.getXmlValue(ghqCompResponseXML, "long");
                        xid = sf$.getXmlValue(ghqCompResponseXML, "xid");
                        vxid = sf$.getXmlValue(ghqCompResponseXML, "vxid");

                        sf$.fillGHQFields(name, address1, address2, city, state, zip, country, phone,
                            tradeStyleName, yearstart, stateCode, countryCode, empTotal, empHere, sales, sic,
                            sicName, sic8, sic8Name, naics, naicsName, url, locType, subsidiary, familyMems,
                            g2k, f500, tkr, lat, long, xid, vxid);
                    }
                }
            }
        };

        sf$.fillSuid = function(suidVal) {
            if (suidVal != null && suidVal.length > 1)
                sf$.sessionID = suidVal;
        };

        sf$.fillScore = function(confidenceLevelVal, matchScoreVal, thresholdScoreVal, engineTypeVal) {
            var elt, confidenceDescVal = "";
            elt = sf$.grabElementFromForm(sf$.companyNameFieldAlias);
            if (elt != null && sf$.junkNameDetected)
                confidenceDescVal = "suspect company name";
            elt = sf$.grabElementFromForm(sf$.emailFieldAlias);
            if (elt != null && sf$.junkEmailDetected && sf$.canRun) {
                if (confidenceDescVal != "") {
                    confidenceDescVal = confidenceDescVal + ", ";
                    confidenceLevelVal = "suspect data detected";
                }
                confidenceDescVal = confidenceDescVal + "suspect email";
            }
            elt = sf$.grabElementFromForm(sf$.confidenceDescFieldAlias);
            if (elt != null) elt.value = confidenceDescVal;

            elt = sf$.grabElementFromForm(sf$.confidenceLevelFieldAlias);
            if (elt != null && confidenceLevelVal != "") elt.value = confidenceLevelVal;
            elt = sf$.grabElementFromForm(sf$.matchScoreFieldAlias);
            if (elt != null && matchScoreVal != "") elt.value = matchScoreVal;
            elt = sf$.grabElementFromForm(sf$.thresholdScoreFieldAlias);
            if (elt != null && thresholdScoreVal != "") elt.value = thresholdScoreVal;
            elt = sf$.grabElementFromForm(sf$.rpmEngFieldAlias);
            if (elt != null && engineTypeVal != "") elt.value = engineTypeVal;
        };

        // translates value if translation available and sets as element's value if available
        sf$.setElementValue = function(fieldID, value, translation) {
            var elt = sf$.grabElementFromForm(fieldID);
            var newValue = value;
            if (elt != null) {
                if (typeof translation === 'function') {
                    var newValue = translation(value, fieldID);
                }
                elt.value = newValue;
            }
        }

        // Recieves data from a response handler and uses it to fill the appropriate fields in the form.
        sf$.fillFields = function(name, address1, address2, city, state, zip, country, phone,
            tradeStyleName, yearstart, stateCode, countryCode, empTotal, empHere, sales, sicVal,
            sicNameVal, sic8Val, sic8NameVal, naicsVal, naicsNameVal, urlVal, locType, subsidiary, familyMems,
            g2k, f500, tkr, lat, long, xid, vxid, coattr1, coattr2, coattr3,
            coattr4, coattr5, rfidVal, fromRPM) {
            sf$.callIndex = 0;
            if (undefined != name && name != null) {
                // overwrite user fields if using drop-down method and data is not from RPM
                if ((sf$.fillByIP || sf$.deployDropDownFlag) && !fromRPM) {
                    sf$.setElementValue(sf$.companyNameFieldAlias, name);
                    sf$.triggerFieldchange(sf$.companyNameFieldAlias);

                    if (sf$.ddAppendToStandardFieldsFlag) {
                        sf$.setElementValue(sf$.addr1FieldAlias, address1);
                        sf$.setElementValue(sf$.addr2FieldAlias, address2);
                        sf$.setElementValue(sf$.cityFieldAlias, city);
                        sf$.setElementValue(sf$.stateFieldAlias, state, sf$.translateStateNm);

                        if (zip.length == 9)
                            zip = zip.substring(0, 5) + "-" + zip.substring(5);
                        sf$.setElementValue(sf$.zipFieldAlias, zip);
                        sf$.setElementValue(sf$.countryFieldAlias, country, sf$.translateCountryNm);
                        if (sf$.phoneAutoFillFlag)
                            sf$.setElementValue(sf$.phoneFieldAlias, phone);
                    }
                }
                if (rfidVal != null && rfidVal.length > 1)
                    sf$.compID = rfidVal;

                sf$.frmChanged = false;

                //rank "m"atched
                sf$.setElementValue(sf$.mCompanyNameFieldAlias, name);
                sf$.setElementValue(sf$.mAddr1FieldAlias, address1);
                sf$.setElementValue(sf$.mAddr2FieldAlias, address2);
                sf$.setElementValue(sf$.mCityFieldAlias, city);
                sf$.setElementValue(sf$.mStateFieldAlias, state, sf$.translateStateNm);
                sf$.setElementValue(sf$.mZipFieldAlias, zip);
                sf$.setElementValue(sf$.mCountryFieldAlias, country, sf$.translateCountryNm);
                sf$.setElementValue(sf$.mPhoneFieldAlias, phone);
                sf$.setElementValue(sf$.mTradeNameFieldAlias, tradeStyleName);
                sf$.setElementValue(sf$.mYearStartFieldAlias, yearstart);
                sf$.setElementValue(sf$.mStateCodeFieldAlias, stateCode, sf$.translateStateCd);
                sf$.setElementValue(sf$.mCountryCodeFieldAlias, countryCode, sf$.translateCountryCd);
                sf$.setElementValue(sf$.mEmplyeeCountFieldAlias, empTotal, sf$.translateEmployeeCnt);
                sf$.setElementValue(sf$.mEmplyeeHereFieldAlias, empHere, sf$.translateEmployeeCnt);
                sf$.setElementValue(sf$.mAnnualRevFieldAlias, sales, sf$.translateAnnualRev);
                sf$.setElementValue(sf$.mSicFieldAlias, sicVal, sf$.translateSic);
                sf$.setElementValue(sf$.mSicNameFieldAlias, sicNameVal);
                sf$.setElementValue(sf$.mSic8FieldAlias, sic8Val);
                sf$.setElementValue(sf$.mSic8NameFieldAlias, sic8NameVal);
                sf$.setElementValue(sf$.mAltSicFieldAlias, sicVal, sf$.translateAltSic);
                sf$.setElementValue(sf$.mNaicsFieldAlias, naicsVal, sf$.translateNaics);
                sf$.setElementValue(sf$.mNaicsNameFieldAlias, naicsNameVal);
                sf$.setElementValue(sf$.mAltNaicsFieldAlias, naicsVal, sf$.translateAltNaics);
                sf$.setElementValue(sf$.mUrlFieldAlias, urlVal);
                sf$.setElementValue(sf$.mLocationTypeFieldAlias, locType);
                sf$.setElementValue(sf$.mSubsidiaryFieldAlias, subsidiary);
                sf$.setElementValue(sf$.mFamilyMemsFieldAlias, familyMems);
                sf$.setElementValue(sf$.mGlobal2KFieldAlias, g2k);
                sf$.setElementValue(sf$.mFortune500FieldAlias, f500);
                sf$.setElementValue(sf$.mTickerFieldAlias, tkr);
                sf$.setElementValue(sf$.mLatitudeFieldAlias, lat);
                sf$.setElementValue(sf$.mLongitudeFieldAlias, long);
                sf$.setElementValue(sf$.mCompXIDFieldAlias, xid);
                sf$.setElementValue(sf$.mCompVXIDFieldAlias, vxid);
                sf$.setElementValue(sf$.rattr1FieldAlias, coattr1);
                sf$.setElementValue(sf$.rattr2FieldAlias, coattr2);
                sf$.setElementValue(sf$.rattr3FieldAlias, coattr3);
                sf$.setElementValue(sf$.rattr4FieldAlias, coattr4);
                sf$.setElementValue(sf$.rattr5FieldAlias, coattr5);
            }
        };

        sf$.fillHQFields = function(name, address1, address2, city, state, zip, country, phone,
            tradeStyleName, yearstart, stateCode, countryCode, empTotal, empHere, sales, sicVal,
            sicNameVal, sic8Val, sic8NameVal, naicsVal, naicsNameVal, urlVal, locType, subsidiary, familyMems,
            g2k, f500, tkr, lat, long, xid, vxid) {
            if (undefined != name && name != null) {
                //rank "hq"
                sf$.setElementValue(sf$.hqCompanyNameFieldAlias, name);
                sf$.setElementValue(sf$.hqAddr1FieldAlias, address1);
                sf$.setElementValue(sf$.hqAddr2FieldAlias, address2);
                sf$.setElementValue(sf$.hqCityFieldAlias, city);
                sf$.setElementValue(sf$.hqStateFieldAlias, state, sf$.translateStateNm);

                if (zip.length == 9)
                    zip = zip.substring(0, 5) + "-" + zip.substring(5);
                sf$.setElementValue(sf$.hqZipFieldAlias, zip);
                sf$.setElementValue(sf$.hqCountryFieldAlias, country, sf$.translateCountryNm);
                sf$.setElementValue(sf$.hqPhoneFieldAlias, phone);
                sf$.setElementValue(sf$.hqTradeNameFieldAlias, tradeStyleName);
                sf$.setElementValue(sf$.hqYearStartFieldAlias, yearstart);
                sf$.setElementValue(sf$.hqStateCodeFieldAlias, stateCode, sf$.translateStateCd);

                sf$.setElementValue(sf$.hqCountryCodeFieldAlias, countryCode, sf$.translateCountryCd);
                sf$.setElementValue(sf$.hqEmplyeeCountFieldAlias, empTotal, sf$.translateEmployeeCnt);
                sf$.setElementValue(sf$.hqEmplyeeHereFieldAlias, empHere, sf$.translateEmployeeCnt);
                sf$.setElementValue(sf$.hqAnnualRevFieldAlias, sales, sf$.translateAnnualRev);
                sf$.setElementValue(sf$.hqSicFieldAlias, sicVal, sf$.translateSic);
                sf$.setElementValue(sf$.hqSicNameFieldAlias, sicNameVal);
                sf$.setElementValue(sf$.hqSic8FieldAlias, sic8Val);
                sf$.setElementValue(sf$.hqSic8NameFieldAlias, sic8NameVal);
                sf$.setElementValue(sf$.hqAltSicFieldAlias, sicVal, sf$.translateAltSic);
                sf$.setElementValue(sf$.hqNaicsFieldAlias, naicsVal, sf$.translateNaics);
                sf$.setElementValue(sf$.hqNaicsNameFieldAlias, naicsNameVal);
                sf$.setElementValue(sf$.hqAltNaicsFieldAlias, naicsVal, sf$.translateAltNaics);

                sf$.setElementValue(sf$.hqUrlFieldAlias, urlVal);
                sf$.setElementValue(sf$.hqLocationTypeFieldAlias, locType);
                sf$.setElementValue(sf$.hqSubsidiaryFieldAlias, subsidiary);
                sf$.setElementValue(sf$.hqFamilyMemsFieldAlias, familyMems);
                sf$.setElementValue(sf$.hqGlobal2KFieldAlias, g2k);
                sf$.setElementValue(sf$.hqFortune500FieldAlias, f500);
                sf$.setElementValue(sf$.hqTickerFieldAlias, tkr);
                sf$.setElementValue(sf$.hqLatitudeFieldAlias, lat);
                sf$.setElementValue(sf$.hqLongitudeFieldAlias, long);
                sf$.setElementValue(sf$.hqCompXIDFieldAlias, xid);
                sf$.setElementValue(sf$.hqCompVXIDFieldAlias, vxid);
            }
        };

        sf$.fillDHQFields = function(name, address1, address2, city, state, zip, country, phone,
            tradeStyleName, yearstart, stateCode, countryCode, empTotal, empHere, sales, sicVal,
            sicNameVal, sic8Val, sic8NameVal, naicsVal, naicsNameVal, urlVal, locType, subsidiary, familyMems,
            g2k, f500, tkr, lat, long, xid, vxid) {
            if (undefined != name && name != null) {
                //rank "dhq"
                sf$.setElementValue(sf$.dhqCompanyNameFieldAlias, name);
                sf$.setElementValue(sf$.dhqAddr1FieldAlias, address1);
                sf$.setElementValue(sf$.dhqAddr2FieldAlias, address2);
                sf$.setElementValue(sf$.dhqCityFieldAlias, city);
                sf$.setElementValue(sf$.dhqStateFieldAlias, state, sf$.translateStateNm);

                if (zip.length == 9)
                    zip = zip.substring(0, 5) + "-" + zip.substring(5);
                sf$.setElementValue(sf$.dhqZipFieldAlias, zip);

                sf$.setElementValue(sf$.dhqCountryFieldAlias, country, sf$.translateCountryNm);
                sf$.setElementValue(sf$.dhqPhoneFieldAlias, phone);
                sf$.setElementValue(sf$.dhqTradeNameFieldAlias, tradeStyleName);
                sf$.setElementValue(sf$.dhqYearStartFieldAlias, yearstart);
                sf$.setElementValue(sf$.dhqStateCodeFieldAlias, stateCode, sf$.translateStateCd);

                sf$.setElementValue(sf$.dhqCountryCodeFieldAlias, countryCode, sf$.translateCountryCd);
                sf$.setElementValue(sf$.dhqEmplyeeCountFieldAlias, empTotal, sf$.translateEmployeeCnt);
                sf$.setElementValue(sf$.dhqEmplyeeHereFieldAlias, empHere, sf$.translateEmployeeCnt);
                sf$.setElementValue(sf$.dhqAnnualRevFieldAlias, sales, sf$.translateAnnualRev);
                sf$.setElementValue(sf$.dhqSicFieldAlias, sicVal, sf$.translateSic);
                sf$.setElementValue(sf$.dhqSicNameFieldAlias, sicNameVal);
                sf$.setElementValue(sf$.dhqSic8FieldAlias, sic8Val);
                sf$.setElementValue(sf$.dhqSic8NameFieldAlias, sic8NameVal);
                sf$.setElementValue(sf$.dhqAltSicFieldAlias, sicVal, sf$.translateAltSic);
                sf$.setElementValue(sf$.dhqNaicsFieldAlias, naicsVal, sf$.translateNaics);
                sf$.setElementValue(sf$.dhqNaicsNameFieldAlias, naicsNameVal);
                sf$.setElementValue(sf$.dhqAltNaicsFieldAlias, naicsVal, sf$.translateAltNaics);

                sf$.setElementValue(sf$.dhqUrlFieldAlias, urlVal);
                sf$.setElementValue(sf$.dhqLocationTypeFieldAlias, locType);
                sf$.setElementValue(sf$.dhqSubsidiaryFieldAlias, subsidiary);
                sf$.setElementValue(sf$.dhqFamilyMemsFieldAlias, familyMems);
                sf$.setElementValue(sf$.dhqGlobal2KFieldAlias, g2k);
                sf$.setElementValue(sf$.dhqFortune500FieldAlias, f500);
                sf$.setElementValue(sf$.dhqTickerFieldAlias, tkr);
                sf$.setElementValue(sf$.dhqLatitudeFieldAlias, lat);
                sf$.setElementValue(sf$.dhqLongitudeFieldAlias, long);
                sf$.setElementValue(sf$.dhqCompXIDFieldAlias, xid);
                sf$.setElementValue(sf$.dhqCompVXIDFieldAlias, vxid);
            }
        };

        sf$.fillGHQFields = function(name, address1, address2, city, state, zip, country, phone,
            tradeStyleName, yearstart, stateCode, countryCode, empTotal, empHere, sales, sicVal,
            sicNameVal, sic8Val, sic8NameVal, naicsVal, naicsNameVal, urlVal, locType, subsidiary, familyMems,
            g2k, f500, tkr, lat, long, xid, vxid) {
            if (undefined != name && name != null) {
                //rank "ghq"
                sf$.setElementValue(sf$.ghqCompanyNameFieldAlias, name);
                sf$.setElementValue(sf$.ghqAddr1FieldAlias, address1);
                sf$.setElementValue(sf$.ghqAddr2FieldAlias, address2);
                sf$.setElementValue(sf$.ghqCityFieldAlias, city);
                sf$.setElementValue(sf$.ghqStateFieldAlias, state, sf$.translateStateNm);

                if (zip.length == 9)
                    zip = zip.substring(0, 5) + "-" + zip.substring(5);
                sf$.setElementValue(sf$.ghqZipFieldAlias, zip);

                sf$.setElementValue(sf$.ghqCountryFieldAlias, country, sf$.translateCountryNm);
                sf$.setElementValue(sf$.ghqPhoneFieldAlias, phone);
                sf$.setElementValue(sf$.ghqTradeNameFieldAlias, tradeStyleName);
                sf$.setElementValue(sf$.ghqYearStartFieldAlias, yearstart);
                sf$.setElementValue(sf$.ghqStateCodeFieldAlias, stateCode, sf$.translateStateCd);

                sf$.setElementValue(sf$.ghqCountryCodeFieldAlias, countryCode, sf$.translateCountryCd);
                sf$.setElementValue(sf$.ghqEmplyeeCountFieldAlias, empTotal, sf$.translateEmployeeCnt);
                sf$.setElementValue(sf$.ghqEmplyeeHereFieldAlias, empHere, sf$.translateEmployeeCnt);
                sf$.setElementValue(sf$.ghqAnnualRevFieldAlias, sales, sf$.translateAnnualRev);
                sf$.setElementValue(sf$.ghqSicFieldAlias, sicVal, sf$.translateSic);
                sf$.setElementValue(sf$.ghqSicNameFieldAlias, sicNameVal);
                sf$.setElementValue(sf$.ghqSic8FieldAlias, sic8Val);
                sf$.setElementValue(sf$.ghqSic8NameFieldAlias, sic8NameVal);
                sf$.setElementValue(sf$.ghqAltSicFieldAlias, sicVal, sf$.translateAltSic);
                sf$.setElementValue(sf$.ghqNaicsFieldAlias, naicsVal, sf$.translateNaics);
                sf$.setElementValue(sf$.ghqNaicsNameFieldAlias, naicsNameVal);
                sf$.setElementValue(sf$.ghqAltNaicsFieldAlias, naicsVal, sf$.translateAltNaics);

                sf$.setElementValue(sf$.ghqUrlFieldAlias, urlVal);
                sf$.setElementValue(sf$.ghqLocationTypeFieldAlias, locType);
                sf$.setElementValue(sf$.ghqSubsidiaryFieldAlias, subsidiary);
                sf$.setElementValue(sf$.ghqFamilyMemsFieldAlias, familyMems);
                sf$.setElementValue(sf$.ghqGlobal2KFieldAlias, g2k);
                sf$.setElementValue(sf$.ghqFortune500FieldAlias, f500);
                sf$.setElementValue(sf$.ghqTickerFieldAlias, tkr);
                sf$.setElementValue(sf$.ghqLatitudeFieldAlias, lat);
                sf$.setElementValue(sf$.ghqLongitudeFieldAlias, long);
                sf$.setElementValue(sf$.ghqCompXIDFieldAlias, xid);
                sf$.setElementValue(sf$.ghqCompVXIDFieldAlias, vxid);
            }
        };

        /**
         * Grabs the element by ID as long as ID is not undefined
         */
        sf$.grabElementById = function(fieldID) {
            if (undefined != fieldID && document.getElementById(fieldID) != null)
                return document.getElementById(fieldID);
            else
                return null;
        };

        /**
         * Grabs the element by ID from sf$.frmElt as long as ID is not undefined
         */
        sf$.grabElementFromForm = function(fieldID) {
            if (!sf$.frmElt) {
                sf$.frmElt = sf$.grabElementById(sf$.companyNameFieldAlias).form
            }
            if (!sf$.frmElt) {
                sf$.frmElt = sf$.grabElementById(sf$.emailFieldAlias).form
            }
            if (undefined != fieldID || fieldID != '')
                return sfjq$(sf$.frmElt).find('#' + fieldID).get(0);
            else
                return null;
        };

        /**
         * Flags a company name as junk if it matches a predefined junk name within sf$.junkNames[].
         */
        sf$.isJunkName = function(name) {
            sf$.junkNameDetected = false;
            name = name.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()|]/g, "").replace(/\s{2,}/g, " ").toLowerCase();
            if (name != null && name.length > 1) {
                for (var i = 0; i < sf$.junkNames.length; i++) {
                    try {
                        var regX = sf$.junkNames[i].replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()|]/g, "").replace(/\s{2,}/g, " ").toLowerCase();
                        if (regX === name) {
                            sf$.junkNameDetected = true;
                            break;
                        }
                    } catch (e) {
                        sf$.junkNameDetected = false;
                    }
                } // end loop
            } else {
                sf$.junkNameDetected = true;
            }

            if (sf$.junkNameDetected && sf$.junkEmailDetected) {
                sf$.dataChanged();
                sf$.latestSearchResultsNames = null;
                sf$.lastSearch = "";
                sf$.hideDisplay(-1);
                sf$.clearDropdown();
            } else {
                sf$.fillScore("user", "", "", "");
            }
            return sf$.junkNameDetected;
        };

        /**
         * Grabs the value or text of a select or input element.
         */
        sf$.getInputData = function(elmID, useText) {
            var e = sfjq$(sf$.frmElt).find("#" + elmID),
                d = "";
            if (e.length) {
                if (e.is("select")) {
                    if (useText)
                        d = e.find("option:selected").text();
                    else
                        d = e.find("option:selected").val();
                } else {
                    d = e.val();
                }
            }
            return (d != undefined) ? d : "";
        };

        /**
         * Takes a string (XML document) and converts it to a XML documen
         */
        sf$.stringToXML = function(xmlString) {
            var xmlDoc;
            if (window.DOMParser) {
                xmlDoc = (new window.DOMParser()).parseFromString(xmlString, "text/xml");
            } else if (typeof window.ActiveXObject != "undefined" && new window.ActiveXObject("Microsoft.XMLDOM")) {
                xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = "false";
                xmlDoc.loadXML(xmlString);
            }
            return xmlDoc;
        };

        /**
         * Decode special XML chars
         */
        sf$.xmlDecode = function(xmlString) {
            if (xmlString != null) {
                xmlString = xmlString.replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
            }
            return xmlString;
        };

        sfjq$(document).on('keydown', function(e) {
            if (sf$.deployDropDownFlag && sfjq$("#" + sf$.selectListDivID).is(":visible") && e.keyCode == 9) { // tab pressed
                e.preventDefault(); // stops its action
            }
        });

        /**
         * Present the select list display.
         */
        sf$.showDisplay = function(param) {
            if (param == 1) {
                sf$.fieldFocus = true;
            } else if (param == 2) {
                sf$.mouseOver = true;
            } else if (param == 0) {
                sf$.fieldFocus = true;
                sf$.mouseOver = true;
            }
            if ((sf$.fieldFocus || sf$.mouseOver || sf$.dataSubmitInProcess) && sf$.dropFilled) {
                sf$.positionSelectListDiv();
                sfjq$("#" + sf$.selectListDivID).css("visibility", "visible");
                if (undefined != sf$.selectListDivFade && (sf$.selectListDivFade === "fast" || sf$.selectListDivFade === "slow")) {
                    sfjq$("#" + sf$.selectListDivID).fadeIn(sf$.selectListDivFade, "linear");
                } else {
                    sfjq$("#" + sf$.selectListDivID).show();
                }
            }
        };

        /**
         * Hide the select list display.
         */
        sf$.hideDisplay = function(param) {
            if (sf$.doCompanySelectFlag && sf$.canRun) {
                if (param == 1) {
                    sf$.fieldFocus = false;
                } else if (param == 2) {
                    sf$.mouseOver = false;
                } else if (param == 0) {
                    sf$.fieldFocus = false;
                    sf$.mouseOver = false;
                    sf$.clearDropdown();
                }
                if ((!sf$.fieldFocus && !sf$.mouseOver && sf$.allowDropDownHide) || param == -1 || !sf$.dropFilled) {
                    if (undefined != sf$.selectListDivFade && (sf$.selectListDivFade === "fast" || sf$.selectListDivFade === "slow")) {
                        sfjq$("#" + sf$.selectListDivID).fadeOut(sf$.selectListDivFade, "linear");
                    } else {
                        sfjq$("#" + sf$.selectListDivID).hide();
                    }
                    sfjq$("#" + sf$.selectListDivID).css("visibility", "hidden");
                }
            }
        };

        /**
         * Remove stale contents form the select list display.
         */
        sf$.clearDropdown = function() {
            var elt = sf$.grabElementById(sf$.selectListDivID);
            if (elt != null) elt.innerHTML = "<table></table>";
            sf$.dropFilled = false;
        };

        /**
         * Called by the onchange events of the company data fields to detect user entered data.
         */
        sf$.dataChanged = function() {
            sf$.clearHidden();
            sf$.clearTech();
            sf$.frmChanged = true;
            var clvl = "";
            if (!sf$.junkNameDetected) clvl = "user";
            sf$.fillScore(clvl, "", "", "");
        };

        /**
         * Remove the contents of the hidden append fields.
         */
        sf$.clearHidden = function() {
            var doClear = function(elt) {
                if (elt != null && elt.type == "hidden") elt.value = "";
            };
            doClear(sf$.grabElementFromForm(sf$.addr1FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.addr2FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.cityFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.stateFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.zipFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.countryFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.phoneFieldAlias));

            doClear(sf$.grabElementFromForm(sf$.confidenceLevelFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.matchScoreFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.thresholdScoreFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.rpmEngFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mCompanyNameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mAddr1FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mAddr2FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mCityFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mStateFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mZipFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mCountryFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mPhoneFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mTradeNameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mYearStartFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mStateCodeFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mCountryCodeFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mEmplyeeCountFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mEmplyeeHereFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mAnnualRevFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mSicFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mSicNameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mSic8FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mSic8NameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mAltSicFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mNaicsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mNaicsNameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mAltNaicsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mUrlFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mLocationTypeFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mSubsidiaryFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mFamilyMemsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mGlobal2KFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mFortune500FieldAlias));

            doClear(sf$.grabElementFromForm(sf$.mTickerFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mLatitudeFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mLongitudeFieldAlias));

            doClear(sf$.grabElementFromForm(sf$.mCompXIDFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.mCompVXIDFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.rattr1FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.rattr2FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.rattr3FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.rattr4FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.rattr5FieldAlias));
            
            sf$.rVXIDFlag      = "";
            sf$.vXID           = "";
            sf$.mCity          = "";
            sf$.mState         = "";
            sf$.mCountry       = "";
            sf$.mContCd        = "";

            doClear(sf$.grabElementFromForm(sf$.hqCompanyNameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqAddr1FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqAddr2FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqCityFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqStateFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqZipFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqCountryFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqPhoneFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqTradeNameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqYearStartFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqStateCodeFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqCountryCodeFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqEmplyeeCountFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqEmplyeeHereFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqAnnualRevFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqSicFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqSicNameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqSic8FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqSic8NameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqAltSicFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqNaicsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqNaicsNameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqAltNaicsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqUrlFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqLocationTypeFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqSubsidiaryFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqFamilyMemsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqGlobal2KFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqFortune500FieldAlias));

            doClear(sf$.grabElementFromForm(sf$.hqTickerFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqLatitudeFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqLongitudeFieldAlias));

            doClear(sf$.grabElementFromForm(sf$.hqCompXIDFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.hqCompVXIDFieldAlias));

            doClear(sf$.grabElementFromForm(sf$.dhqCompanyNameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqAddr1FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqAddr2FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqCityFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqStateFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqZipFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqCountryFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqPhoneFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqTradeNameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqYearStartFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqStateCodeFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqCountryCodeFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqEmplyeeCountFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqEmplyeeHereFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqAnnualRevFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqSicFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqSicNameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqSic8FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqSic8NameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqAltSicFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqNaicsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqNaicsNameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqAltNaicsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqUrlFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqLocationTypeFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqSubsidiaryFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqFamilyMemsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqGlobal2KFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqFortune500FieldAlias));

            doClear(sf$.grabElementFromForm(sf$.dhqTickerFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqLatitudeFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqLongitudeFieldAlias));

            doClear(sf$.grabElementFromForm(sf$.dhqCompXIDFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.dhqCompVXIDFieldAlias));

            doClear(sf$.grabElementFromForm(sf$.ghqCompanyNameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqAddr1FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqAddr2FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqCityFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqStateFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqZipFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqCountryFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqPhoneFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqTradeNameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqYearStartFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqStateCodeFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqCountryCodeFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqEmplyeeCountFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqEmplyeeHereFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqAnnualRevFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqSicFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqSicNameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqSic8FieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqSic8NameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqAltSicFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqNaicsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqNaicsNameFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqAltNaicsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqUrlFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqLocationTypeFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqSubsidiaryFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqFamilyMemsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqGlobal2KFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqFortune500FieldAlias));

            doClear(sf$.grabElementFromForm(sf$.ghqTickerFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqLatitudeFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqLongitudeFieldAlias));

            doClear(sf$.grabElementFromForm(sf$.ghqCompXIDFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.ghqCompVXIDFieldAlias));
        };

        sf$.clearContact = function() {
            var doClear = function(elt) {
                if (elt != null && elt.type == "hidden") elt.value = "";
            };

            doClear(sf$.grabElementFromForm(sf$.contactEmail))
            doClear(sf$.grabElementFromForm(sf$.contactFirstName))
            doClear(sf$.grabElementFromForm(sf$.contactLastName))
            doClear(sf$.grabElementFromForm(sf$.contactCompany))
            doClear(sf$.grabElementFromForm(sf$.contactCompanyWebsite))
            doClear(sf$.grabElementFromForm(sf$.contactTitle))
            doClear(sf$.grabElementFromForm(sf$.contactJobRole))
            doClear(sf$.grabElementFromForm(sf$.contactJobFunction))
            doClear(sf$.grabElementFromForm(sf$.contactSubFunction))
            doClear(sf$.grabElementFromForm(sf$.contactEducation))
            doClear(sf$.grabElementFromForm(sf$.contactExperise))
            doClear(sf$.grabElementFromForm(sf$.contactPhone))
            doClear(sf$.grabElementFromForm(sf$.contactLinkedInHandle))
            doClear(sf$.grabElementFromForm(sf$.contactLocation))
            doClear(sf$.grabElementFromForm(sf$.contactTwitterHandle))
            doClear(sf$.grabElementFromForm(sf$.contactFacebookHandle))
            doClear(sf$.grabElementFromForm(sf$.contactStatus))
                // doClear(sf$.grabElementFromForm(sf$.contactDisposition));
                // doClear(sf$.grabElementFromForm(sf$.contactDispReason));
        }
        sf$.clearTech = function() {
            var doClear = function(elt) {
                if (elt != null && elt.type == "hidden") elt.value = "";
            };
            doClear(sf$.grabElementFromForm(sf$.inferredEmployeesFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.inferredIndustryFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.inferredPublicFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.inferredRevenueFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techAdvertisementFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techAlexaFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techAnalyticsAndTrackingFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techChatsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techCMSFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techCommentsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techContentDeliveryNetworksFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techDomainNameServicesFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techECommerceFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techEmailDeliverySpamProtectionFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techEmailMarketingFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techEmailProvidersFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techFontsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techHostedFormsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techHostingFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techLoadBalancersFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techMarketingAutomationFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techMediaFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techPaymentsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techPersonalizationFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techRecruitmentFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techRestaurantReservationServicesFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techSecurityFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techSSLCertificatesFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techSupportFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techTagManagementFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techWebAcceleratorsFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techWebPerformanceMonitoringFieldAlias));
            doClear(sf$.grabElementFromForm(sf$.techWidgetsFieldAlias));
            sf$.techFilled = false;
            sf$.rqurl = "";
        };

        /**
         * For color changing the rows of the select list.
         */
        sf$.onOver = function(element) {
            element.style.backgroundColor = sf$.selectListHoverColor;
            document.body.style.cursor = "pointer";
        };

        /**
         * For color changing the rows of the select list.
         */
        sf$.onOut = function(element, count, param) {
            if (param == 1) {
                if (count == 1)
                    element.style.backgroundColor = sf$.selectListColor1;
                else
                    element.style.backgroundColor = sf$.selectListColor2;
            } else {
                if (count == 1)
                    element.style.backgroundColor = sf$.selectListNAColor1;
                else
                    element.style.backgroundColor = sf$.selectListNAColor2;

            }
            document.body.style.cursor = "auto";
        };

        /**
         * Change mouse to wait when over blockFrame.
         */
        sf$.blockFrameOnOver = function() {
            document.body.style.cursor = "wait";
        };

        /**
         * Change mouse to auto when out of blockFrame.
         */
        sf$.blockFrameOnOut = function() {
            document.body.style.cursor = "auto";
        };

        /**
         * Position select list relative to target element position
         */
        sf$.positionSelectListDiv = function() {
            if (sf$.deployDropDownFlag) {
                var t;
                if (sf$.emailOnlyFilterFlag)
                    t = sfjq$(sf$.frmElt).find("#" + sf$.emailFieldAlias);
                else
                    t = sfjq$(sf$.frmElt).find("#" + sf$.companyNameFieldAlias);

                if(typeof t !== "undefined" && typeof t.css("height") !== "undefined"){
                    var tHeight = parseInt(t.css("height").replace(/[^-\d.]/g, '')) + sf$.selectListDivTopOffset,
                    tHeightUnit = t.css("height").replace(/[\d.]/g, ''),
                    tPosition = t.offset(),
                    d = sfjq$("#" + sf$.selectListDivID);
                    d.css({
                     "position": "absolute",
                     "left": tPosition.left,
                     "top": tPosition.top,
                     "margin-top": tHeight + tHeightUnit
                    });
                }
            }
        };

        /**
         * Center select list on screen.
         */
        sf$.centerSelectListDiv = function() {
            if (sfjq$("#" + sf$.selectListDivID).css("visibility") == "visible" && !sf$.deployDropDownFlag)
                sf$.centerDiv(sf$.selectListDivID);
        };

        /**
         * Center loading animation on screen.
         */
        sf$.centerLoadingDiv = function() {
            if (sfjq$("#RFLoadingFrame").css("visibility") == "visible")
                sf$.centerDiv("RFLoadingFrame");
        };

        /**
         * Center a div on screen.
         */
        sf$.centerDiv = function(divID) {
            var w = sfjq$(window),
                d = sfjq$("#" + divID);
            d.css({
                "position": "absolute",
                "left": Math.abs((w.width() - d.outerWidth()) / 2 + w.scrollLeft()),
                "top": Math.abs((w.height() - d.outerHeight()) / 2 + w.scrollTop())
            });
        };

        /**
         * Keep select list center during scroll.
         */
        sfjq$(window).on('scroll', function() {
            sf$.centerSelectListDiv();
            sf$.centerLoadingDiv();
        });

        /**
         * Keep select list center during resize.
         */
        sfjq$(window).on('resize', function() {
            if (sf$.deployDropDownFlag) {
                sf$.positionSelectListDiv();
            } else {
                sf$.centerSelectListDiv();
                sf$.centerLoadingDiv();

                var d, dv = sfjq$("#RFBlockFrame");
                if (dv.length) {
                    d = sfjq$(document);
                    dv.css({
                        "position": "absolute",
                        "height": d.height(),
                        "width": d.width()
                    });
                }
            }
        });

        /**
         * Assign ID attributes to form and input elements using the name attribute.
         * Requires form with ID mapped.
         */
        sf$.assignIDs = function(frmElt) {
            if (sf$.assignIDsByName && frmElt == null) {
                if (!sfjq$("#" + sf$.smartFormID).length && sfjq$("form[name=" + sf$.smartFormID + "]").length) {
                    sfjq$("form[name=" + sf$.smartFormID + "]").attr("id", sf$.smartFormID);
                }

                sfjq$("#" + sf$.smartFormID + " input[type=text], #" + sf$.smartFormID + " input[type=email], #" + sf$.smartFormID + " input[type=hidden], #" + sf$.smartFormID + " select, #" + sf$.smartFormID + " textarea").each(function(i) {
                    if (sfjq$(this).attr("id") == undefined || sfjq$(this).attr("id") == null) {
                        sfjq$(this).attr("id", sfjq$(this).attr("name"));
                    }
                });
            } else {
                sfjq$(frmElt).find("input[type=text],input[type=email],input[type=hidden],select,textarea").each(function(i) {
                    if (sfjq$(this).attr("id") == undefined || sfjq$(this).attr("id") == null) {
                        sfjq$(this).attr("id", sfjq$(this).attr("name"));
                    }
                });
            }
        };

        /**
         * Attempt to get input element ID.
         */
        sf$.grabInputID = function(val) {
            var id = "";
            try {
                id = sfjq$("input[type=text][id='" + val + "'], input[type=email][id='" + val + "'], input[type=hidden][id='" + val + "'], select[id='" + val + "'], textarea[id='" + val + "'], input[type=checkbox][id='" + val + "'], input[type=radio][id='" + val + "'], input[type=password][id='" + val + "']").attr("id") ||
                    sfjq$("input[type=text][id*='" + val + "'], input[type=email][id*='" + val + "'], input[type=hidden][id*='" + val + "'], select[id*='" + val + "'], textarea[id*='" + val + "'], input[type=checkbox][id*='" + val + "'], input[type=radio][id*='" + val + "'], input[type=password][id*='" + val + "']").attr("id") ||
                    sfjq$("input[type=text], input[type=email], input[type=hidden], select, textarea, input[type=checkbox], input[type=radio], input[type=password]").filter(function() {
                        var startsWith = new RegExp("^" + val, "i"),
                            endsWith = new RegExp(val + "$", "i");
                        return startsWith.test(sfjq$(this).attr("id")) || endsWith.test(sfjq$(this).attr("id"));
                    }).attr("id") ||
                    sfjq$("input[type=text][name='" + val + "'], input[type=email][name='" + val + "'], input[type=hidden][name='" + val + "'], select[name='" + val + "'], textarea[name='" + val + "'], input[type=checkbox][name='" + val + "'], input[type=radio][name='" + val + "'], input[type=password][name='" + val + "']").attr("id") ||
                    sfjq$("input[type=text][name*='" + val + "'], input[type=email][name*='" + val + "'], input[type=hidden][name*='" + val + "'], select[name*='" + val + "'], textarea[name*='" + val + "'], input[type=checkbox][name*='" + val + "'], input[type=radio][name*='" + val + "'], input[type=password][name*='" + val + "']").attr("id") ||
                    sfjq$("input[type=text][class*='" + val + "'], input[type=email][class*='" + val + "'], input[type=hidden][class*='" + val + "'], select[class*='" + val + "'], textarea[class*='" + val + "'], input[type=checkbox][class*='" + val + "'], input[type=radio][class*='" + val + "'], input[type=password][class*='" + val + "']").attr("id") ||
                    sfjq$("[class~='" + val + "']").find("input[type=text], input[type=email], input[type=hidden], select, textarea, input[type=checkbox], input[type=radio], input[type=password]").attr("id") ||
                    sfjq$("[class*='" + val + "']").find("input[type=text], input[type=email], input[type=hidden], select, textarea, input[type=checkbox], input[type=radio], input[type=password]").attr("id");
            } catch (err) {}
            return id;
        };

        /**
         * Use when validation is not client-side. Return true only if sf$.formCheckIDs[] input fields have a value.
         */
        sf$.formCheck = function() {
            var doSF = true;
            for (var i = 0; i < sf$.formCheckIDs.length; i++) {
                var v = sfjq$(sf$.frmElt).find("#" + sf$.formCheckIDs[i]);
                if (v.length) {
                    try {
                        var elmName = v.attr("name"),
                            elmID = v.attr("id");
                        if (v.is("input[type=text], input[type=email], textarea, input[type=password]")) {
                            var theValue = v.val();
                            if (theValue == null || theValue.replace(/(\r\n|\n|\r)/gm, "").length == 0) {
                                doSF = false;
                                break;
                            }
                        } else if (v.is("select") && (v.val() == null || v.val().length == 0 || v.find("option").length == 0)) {
                            doSF = false;
                            break;
                        } else if (v.is("input[type=checkbox], input[type=radio]") && !v.is(":checked")) {
                            doSF = false;
                            break;
                        }
                    } catch (e) {
                        doSF = false;
                    }
                }
            } // end loop
            return doSF;
        };

        sf$.checkDyna = function() {
            if (sf$.deployDropDownFlag && sf$.deployDynaInput && !sf$.dropFilled && sf$.callIndex > 0) {
                sf$.showDynaInput();
            }
        };

        sf$.hideDynaInput = function() {
            if (sf$.deployDynaInput) {
                //  if (sf$.deployDropDownFlag) {
                for (var i = 0; i < sf$.dynaInputIDs.length; i++) {
                    // if wrapping parent element does not have it's own unique ID/class, use unique ID/class of target input to get closest wrapping parent element
                    //    ex. sf$.dynaInputIDs=["target-input-id-or-class:parent element type (ex. li,div,tr) or jquery selector"];
                    //    ex. sf$.dynaInputIDs=["employeelist:tr","countrylist:tr"];
                    //    ex. sf$.dynaInputIDs=["employeelist:#parent_id","countrylist:.parent_class"];
                    //    ex. sf$.dynaInputIDs=["No_of_Employees__c:div .mktoFormRow"];
                    // attempt to get target by ID, then by class name
                    var e = sf$.dynaInputIDs[i],
                        p = "",
                        v;
                    if (e.indexOf(":") > 0) {
                        e = sf$.dynaInputIDs[i].split(":", 2)[0];
                        p = sf$.dynaInputIDs[i].split(":", 2)[1];
                    }
                    if (sf$.frmElt) {
                        v = sfjq$(sf$.frmElt).find("#" + e);
                    } else {
                        v = sfjq$("#" + e);
                    }
                    if (v.length === 0) {
                        if (sf$.frmElt) {
                            v = sfjq$(sf$.frmElt).find("." + e);
                        } else {
                            v = sfjq$("." + e);
                        }
                    }

                    if (v.length > 0) {
                        switch (p.length) {
                            case 0:
                                v.hide();
                                break;
                            default:
                                v.closest(p).hide();
                        }
                        sf$.isDynaInputVisible = false;
                        sf$.setDynaRequired(e, sf$.isDynaInputVisible);
                    }
                }
                //  }
            }
        };

        sf$.showDynaInput = function() {
            if (sf$.deployDynaInput) {
                if (sf$.deployDropDownFlag) {
                    for (var i = 0; i < sf$.dynaInputIDs.length; i++) {
                        var e = sf$.dynaInputIDs[i],
                            p = "",
                            v;
                        if (e.indexOf(":") > 0) {
                            e = sf$.dynaInputIDs[i].split(":", 2)[0];
                            p = sf$.dynaInputIDs[i].split(":", 2)[1];
                        }

                        if (sf$.frmElt) {
                            v = sfjq$(sf$.frmElt).find("#" + e);
                        } else {
                            v = sfjq$("#" + e);
                        }
                        if (v.length === 0) {
                            if (sf$.frmElt) {
                                v = sfjq$(sf$.frmElt).find("." + e);
                            } else {
                                v = sfjq$("." + e);
                            }
                        }

                        if (v.length > 0) {
                            switch (p.length) {
                                case 0:
                                    v.show(400);
                                    break;
                                default:
                                    v.closest(p).show(400);
                            }
                            sf$.callIndex = -1;
                            sf$.isDynaInputVisible = true;
                            sf$.setDynaRequired(e, sf$.isDynaInputVisible);
                        }
                    }
                }
            }
        };

        /**
         * Stub functions.
         */
        sf$.translateStateNm = function(val, elmID) { return val; };
        sf$.translateStateCd = function(val, elmID) { return val; };
        sf$.translateCountryNm = function(val, elmID) { return val; };
        sf$.translateCountryCd = function(val, elmID) { return val; };
        sf$.translateEmployeeCnt = function(val, elmID) { return val; };
        sf$.translateAnnualRev = function(val, elmID) { return val; };
        sf$.translateSic = function(val, elmID) { return val; };
        sf$.translateAltSic = function(val, elmID) { return val; };
        sf$.translateNaics = function(val, elmID) { return val; };
        sf$.translateAltNaics = function(val, elmID) { return val; };
        sf$.setDynaRequired = function() {};
    }


    if(window.sf$){initializeLibrary(sf$)}
})(this);
