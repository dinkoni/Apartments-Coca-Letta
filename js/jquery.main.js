// my jq
var langSelected = "";
var xmlTranslations = "";

function refreshLanguageTransl() {
	translatenewlang(getSelectedLanguage());
}

function getSelectedLanguage() {
	return langSelected;
}
function setSelectedLanguage(newVal) {
	langSelected = newVal;
}

/*function translatenewlang(language) {
	$.ajax({
		url: 'translations.xml',
		dataType: 'xml',
		success: function(xml) {
			$(xml).find('translation').each(function(){
				var id = $(this).attr('id');
				var text = $(this).find(language).text();
				$("." + id).html(text);
			});
		}
	});
};*/

function initTranslator(lang) {
	setSelectedLanguage(lang);
	$.ajax({
		async: false,
		url: 'translations.xml',
		dataType: 'xml',
		success: function(xml) {
			xmlTranslations = xml;
		}
	});	
}
function translatenewlang(language) {
	$(xmlTranslations).find('translation').each(function(){
		var id = $(this).attr('id');
		var text = $(this).find(language).text();
		$("." + id).html(text);
	});
};