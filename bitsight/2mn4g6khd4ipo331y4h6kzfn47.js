var init = function(){
  window.sfcc$ = {};
  sf$.doSetup=false;
  sfcc$.SmartFormClick = function () {
    sfcc$.smartFormClicked = true;
  };
  //Simulate a user driven click action on the orginal form submit action element
  sfjq$.fn.sf_simulateClick = function() {
    return this.each(function() {
        if("createEvent" in document) {
            var doc = this.ownerDocument,
                evt = doc.createEvent("MouseEvents");
            evt.initMouseEvent("click", true, true, doc.defaultView, 1, 2263, 835, 428, 697, false, false, false, false, 0, null);
            this.dispatchEvent(evt);
        } else {
                this.click(); // IE
        }
    });
  };
  // function called by smart forms button click. This starts the process of the modal confirmation.
  sfcc$.sf_start = function() {
    if (sfcc$.doAppend && sfcc$.smartFormClicked == true &&  sfcc$.checkRequired() && sf$.formCheck()){
      sfcc$.doAppend = false;
      // smartFormClicked set to false here in case something fails and user goes to submit a different form.
      sfcc$.smartFormClicked = false;
      sf$.forceSelection();
      return false;
    } else {
      sfcc$.allowModal=true;
      sf$.doSmartFormSubmit();
    }
    // smartFormClicked set to false here in case page isn"t valid on smart form, user gives up, submits a different form
    sfcc$.smartFormClicked = false;
    return true;
  };
  sfcc$.checkRequired = function(){
    sf$.formCheckIDs=[];
    var phonePass = true;
    sfjq$.each(sfjq$('input:visible, select:visible, textarea:visible'), function(index, visibleInput){
      var input$ = sfjq$(visibleInput);
      if(input$.attr('required')){
        sf$.formCheckIDs.push(input$.attr('id'));
      }
      if(input$.attr('id')===sf$.phoneFieldAlias){
        if(input$.val().length < 5){
            phonePass = false;
        }
      }
    });
    return phonePass;
  };
  sfjq$(document).ready(function() {
    sf$.token="127311";
    sf$.showSmartFormAlerts=false; // set to false after a successful configuration
    sf$.showCriticalAlerts=false; // set to false after a successful configuration
    sf$.deployDropDown=true;

    sfcc$.checkFormExist = setInterval(function() {
        if(sf$.grabInputID('company')){
            sf$.companyNameFieldAlias=sf$.grabInputID('company');
            sf$.emailFieldAlias=sf$.grabInputID('email');
            sf$.firstNameFieldAlias=sf$.grabInputID('firstname');
            sf$.lastNameFieldAlias=sf$.grabInputID('lastname');
            sf$.phoneFieldAlias=sfjq$('input[name=phone]').attr('id');
            sf$.confidenceDescFieldAlias='rf_confidencedescription';
            sf$.confidenceLevelFieldAlias='rf_confidence_level';
            //siteLevelFields
            sf$.mAddr1FieldAlias="rf_site_addr1";
            sf$.mAddr2FieldAlias="rf_site_addr2";
            sf$.mAnnualRevFieldAlias="rf_site_annualrev";
            sf$.mCityFieldAlias="rf_site_city";
            sf$.mCompanyNameFieldAlias="rf_site_company";
            sf$.mCountryCodeFieldAlias="rf_site_countrycode";
            sf$.mCountryFieldAlias="rf_site_country";
            sf$.mEmplyeeCountFieldAlias="rf_site_emplyeestotal";
            sf$.mEmplyeeHereFieldAlias="rf_site_emplyeeshere";
            sf$.mFortune500FieldAlias="rf_site_fortune500";
            sf$.mGlobal2KFieldAlias="rf_site_global2k";
            sf$.mNaicsFieldAlias="rf_site_naicscode";
            sf$.mNaicsNameFieldAlias="rf_site_naicsname";
            sf$.mPhoneFieldAlias="rf_site_phone";
            sf$.mSicFieldAlias="rf_site_siccode";
            sf$.mAltSicFieldAlias="rf_site_sicname";
            sf$.mStateCodeFieldAlias="rf_site_statecode";
            sf$.mStateFieldAlias="rf_site_state";
            sf$.mTradeNameFieldAlias="rf_site_tradename";
            sf$.mUrlFieldAlias="rf_site_url";
            sf$.mZipFieldAlias="rf_site_zip";
            //ghqLevelFields
            sf$.ghqAddr1FieldAlias="rf_ghq_addr1";
            sf$.ghqAddr2FieldAlias="rf_ghq_addr2";
            sf$.ghqAnnualRevFieldAlias="rf_ghq_annualrev";
            sf$.ghqCityFieldAlias="rf_ghq_city";
            sf$.ghqCompanyNameFieldAlias="rf_ghq_company";
            sf$.ghqCountryCodeFieldAlias="rf_ghq_countrycode";
            sf$.ghqCountryFieldAlias="rf_ghq_country";
            sf$.ghqEmplyeeCountFieldAlias="rf_ghq_emplyeestotal";
            sf$.ghqEmplyeeHereFieldAlias="rf_ghq_emplyeeshere";
            sf$.ghqFortune500FieldAlias="rf_ghq_fortune500";
            sf$.ghqGlobal2KFieldAlias="rf_ghq_global2k";
            sf$.ghqNaicsFieldAlias="rf_ghq_naicscode";
            sf$.ghqNaicsNameFieldAlias="rf_ghq_naicsname";
            sf$.ghqPhoneFieldAlias="rf_ghq_phone";
            sf$.ghqSicFieldAlias="rf_ghq_siccode";
            // sf$.ghqAltSicFieldAlias="rf_ghq_sicname";
            sf$.ghqStateCodeFieldAlias="rf_ghq_statecode";
            sf$.ghqStateFieldAlias="rf_ghq_state";
            sf$.ghqTradeNameFieldAlias="rf_ghq_tradename";
            sf$.ghqUrlFieldAlias="rf_ghq_url";
            sf$.ghqZipFieldAlias="rf_ghq_zip";
            //inferredFields
            sf$.inferredAreaCodeFieldAlias="rf_inferredareacode";
            sf$.inferredCityFieldAlias="rf_inferredcity";
            sf$.inferredCountryFieldAlias="rf_inferredcountry";
            sf$.inferredIndustryFieldAlias="rf_inferredindustry";
            sf$.inferredStateFieldAlias="rf_inferredstate";
            //techFields
            sf$.techAdvertisementFieldAlias="rf_techadvertisement";
            sf$.techAnalyticsAndTrackingFieldAlias="rf_techanalytics";
            sf$.techCMSFieldAlias="rf_techcms";
            sf$.techChatsFieldAlias="rf_techchats";
            sf$.techCommentsFieldAlias="rf_techcomments";
            sf$.techContentDeliveryNetworksFieldAlias="rf_techcdn";
            sf$.techDomainNameServicesFieldAlias="rf_techdns";
            sf$.techECommerceFieldAlias="rf_techecommerce";
            sf$.techEmailDeliverySpamProtectionFieldAlias="rf_techemailspamprotection";
            sf$.techEmailMarketingFieldAlias="rf_techemailmarketing";
            sf$.techEmailProvidersFieldAlias="rf_techemailproviders";
            sf$.techFontsFieldAlias="rf_techfonts";
            sf$.techHostedFormsFieldAlias="rf_techhostedforms";
            sf$.techHostingFieldAlias="rf_techhosting";
            sf$.techLoadBalancersFieldAlias="rf_techloadbalancers";
            sf$.techMarketingAutomationFieldAlias="rf_techmarketingauto";
            sf$.techMediaFieldAlias="rf_techmedia";
            sf$.techPaymentsFieldAlias="rf_techpayments";
            sf$.techPersonalizationFieldAlias="rf_techpersonalization";
            sf$.techRecruitmentFieldAlias="rf_techrecruitment";
            sf$.techRestaurantReservationServicesFieldAlias="rf_techrestaurantres";
            sf$.techSSLCertificatesFieldAlias="rf_techsslcertificates";
            sf$.techSecurityFieldAlias="rf_techsecurity";
            sf$.techSupportFieldAlias="rf_techsupport";
            sf$.techTagManagementFieldAlias="rf_techtagmanagement";
            sf$.techWebAcceleratorsFieldAlias="rf_techwebaccelerators";
            sf$.techWebPerformanceMonitoringFieldAlias="rf_techwebmon";
            sf$.techWidgetsFieldAlias="rf_techwidgets";

            sf$.selectListColor1="#FFFFFF"; // Hex color for background of company select list
            sf$.selectListHoverColor="#CCCCCC"; //Hex color for background of company select hover color
        }
    // initialize
      if (sfjq$("#" + sf$.grabInputID(sf$.companyNameFieldAlias)).length) {
        sfcc$.formElement = sfjq$('#'+sf$.companyNameFieldAlias).closest('form');
        if(sfjq$(sfcc$.formElement).find('input[name =' + sf$.confidenceLevelFieldAlias+ ']').length > 0){
          if(sfcc$.formElement.attr('id')){
            sf$.smartFormID = sfcc$.formElement.attr('id');
          } else {
            sfcc$.formElement.attr('id', 'smartForm1');
            sf$.smartFormID = 'smartForm1';
          }
          sfjq$('#'+sf$.smartFormID).on('keypress keyup keydown', function(e) {
            var code = e.keyCode || e.which;
            if (code == 13) {
              e.preventDefault();
              if(sfcc$.allowModal){
                sfcc$.allowModal=false;
                sfcc$.SmartFormClick();
                sfcc$.sf_start();
              }
              return false;
            }
          });
          sfcc$.allowModal=true;
          sf$.assignIDsByName=true;
          sf$.overrideSubmit=false;
          sf$.doSetup=true;
          sfcc$.doAppend=true;
          sf$.runSFSetup();

          sfcc$.originalButton$ = sfjq$("#"+sf$.smartFormID+" [type=submit]");
          sfcc$.newButton$ = sfcc$.originalButton$.clone()
            .attr({
              "id":"sf_go",
              "onclick": "sfcc$.SmartFormClick();sfcc$.sf_start();",
              "type": "button"
            });
          sfcc$.originalButton$.attr("style", "display:none !important");
          sfcc$.newButton$.insertBefore(sfcc$.originalButton$);

          clearInterval(sfcc$.checkFormExist);
        }
      }
    }, 100);

    // override sf$.doSmartFormSubmit() so that we force an original form submit, not a scripted form.submit()
    sf$.doSmartFormSubmit = function() {
        sfcc$.originalButton$.removeAttr("disabled").sf_simulateClick();
        sfjq$('#RFBlockFrame').hide();
        sfjq$('#RFLoadingFrame').hide();
    };
    sf$.translateEmployeeCnt = function(val,elmID) {
      if (undefined !== elmID && (elmID === sf$.mEmplyeeCountFieldAlias || elmID === sf$.ghqEmplyeeCountFieldAlias)){
        try {
          var transVal = "unknown";
          var intVal = parseInt(val);
          if (intVal >= 10001) {transVal="10001+";}
          else if (intVal >= 5001 && intVal < 10001) {transVal="5001-10000";}
          else if (intVal >= 1001 && intVal < 5001) {transVal="1001-5000";}
          else if (intVal >= 501 && intVal < 1001) {transVal="501-1000";}
          else if (intVal >= 201 && intVal < 501) {transVal="201-500";}
          else if (intVal < 201) {transVal="1-200";}
          return transVal;
        } catch(e) {}
      }
      return val;
    };
    sf$.translateAltSic = function(val, elmID) {
      try {
        if (undefined != val && val != null && val.length > 0) {
          var subval = val.substr(0,4);
          var translation = sf$.sicCodeMap[subval];
          if (translation == null) {
            subval = val.substr(0,3);
            translation = sf$.sicCodeMap[subval];
            if (translation == null) {
              subval = val.substr(0,2);
              translation = sf$.sicCodeMap[subval];
              if (translation == null) {
                subval = val.substr(0,1);
                translation = sf$.sicCodeMap[subval];
              }
            }
          }
          val = (translation == null) ? val : translation;
        }
      } catch(e) {}
      return val;
    };
    sf$.sicCodeMap = {
    "0":"Other",
    "01":"Food Production",
    "02":"Food Production",
    "1":"Energy/Resources",
    "15":"Engineering",
    "16":"Engineering",
    "17":"Engineering",
    "2":"Manufacturing",
    "20":"Food Production",
    "21":"Consumer Goods",
    "29":"Energy/Resources",
    "3":"Manufacturing",
    "357":"Technology",
    "3578":"Manufacturing",
    "3579":"Manufacturing",
    "3651":"Consumer Goods",
    "366":"Technology",
    "3671":"Technology",
    "376":"Aerospace/Defense",
    "4":"Transportation",
    "46":"Energy/Resources",
    "472":"Tourism/Hospitality",
    "48":"Technology",
    "49":"Utilities",
    "5":"Retail",
    "6":"Finance",
    "63":"Insurance",
    "64":"Insurance",
    "65":"Real Estate",
    "7":"Other",
    "70":"Tourism/Hospitality",
    "73":"Business Services",
    "78":"Media/Entertainment",
    "79":"Media/Entertainment",
    "80":"Healthcare and Wellness",
    "8":"Other",
    "81":"Legal",
    "82":"Education",
    "84":"Nonprofit/NGO",
    "86":"Nonprofit/NGO",
    "87":"Business Services",
    "9":"Government/Politics",
    "9222":"Legal",
    "966":"Aerospace/Defense"};
    });
    var styles = '@import url(//fonts.googleapis.com/css?family=Raleway);\
    .divDisplayFrame {\
    visibility:hidden;\
    border-color:#FFFFFF;\
    border-width:1px !important;\
    border-style:outset !important;\
    border-radius:3px;\
    -webkit-border-radius:3px;\
    -moz-border-radius:5px;\
    -moz-box-shadow:5px 5px 7px 3px #6B6B6B;\
    -webkit-box-shadow:5px 5px 7px 3px #6B6B6B;\
    box-shadow:5px 5px 7px 3px #6B6B6B;\
    width:400px;\
    position:absolute !important;\
    background-color:#ffffff !important;\
    text-align:left;\
    font-size:26px;\
    padding: 5px;\
    font-family: "Raleway", Arial, Helvetica, sans-serif !important;\
  }\
    @media screen and (min-width:404px) {.divDisplayFrame{width:402px !important;}}\
    @media screen and (max-width:403px) {.divDisplayFrame{width:318px !important;}}\
    .tabCompList {\
    border:0;\
    margin-bottom:16px;\
  }\
    .tabCompList caption {\
    line-height:95%;\
    padding:0;\
  }\
    .tabCompList h3 {\
    padding:20px 0 10px 0;\
    font-weight: bold;\
    color:#3c3c3c;\
    border-width:0;\
    text-align: center;\
    margin:10px;\
  }  \
    .tabCompList hr {margin: 5px;}\
    .tabCompList td {\
    line-height:115%;\
    font-size:14px;\
    border-width:0;\
  }\
    .tabCompTR {}\
    .tabCompTD {\
    padding:2px 4px 2px 4px;\
    border-bottom: 1px solid #CCCCCC !important;\
  }\
    .tabCompNATR {}\
    .tabCompNATD {padding-left:2px;}\
    .divCompList {\
    font-weight: 200 !important;\
  }\
    .divCompName {color:#15317E;}\
    .divCompDetails {color:#606060;}\
    .divCompNAName {\
    color:#3c3c3c;\
    font-weight:bold;\
    font-size:12px;\
  }\
    .divCompNADetails {\
    color:#3c3c3c;\
  }';
  sfjq$('head').append('<style type="text/css">' + styles + '</style>');
  setTimeout(function(){
    clearInterval(sfcc$.checkFormExist);
  },100000);
};
sf$.onSFLoad(init);