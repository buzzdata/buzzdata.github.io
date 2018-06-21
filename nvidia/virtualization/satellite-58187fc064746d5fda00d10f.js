_satellite.pushAsyncScript(function(event, target, $variables){
  try{
  if(typeof jQuery!='undefined' ||typeof $!='undefined')
{
  
if (window.$) {   
$(document).on("FP-formSubmitSuccess",function(){
    var formId = formSubmitData.formID;
    try{
      dtm_track('formSubmit',{formID:formId});
    }catch(e){}
  });
  
  $(document).on("fp-success-message",function(){
    var formId = _satellite.getVar('formId');
    if(formId){
      dtm_track('formSubmit',{formID:formId});
    }
  });
  
  if (window['MktoForms2']){
	MktoForms2.whenReady(function (form) {
		form.onSuccess(function(){
		var vals = form.vals();   
		  dtm_track('formSubmit',{formID:'mktoform_'+vals["formid"]});  
		});


	});
	}
 
var runOnce=true; $('body').delegate("form:not([id*='search']):not([id^='Form']):not([id^='redeem']):not([id^='form']) input[type='text']:visible:first","focusin", function(){  
    if(runOnce){
    var formId = $(this).closest('form').attr("id");
      if(formId){
      dtm_track('formStart',{formID:formId});
      }
     runOnce=false;
    }
   });
}
}    }catch(e){}   
});
