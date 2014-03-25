// my jq
var langSelected = "";

function refreshLanguageTransl() {
	translatenewlang(getSelectedLanguage());
}

function getSelectedLanguage() {
	return langSelected;
}
function setSelectedLanguage(newVal) {
	langSelected = newVal;
}
function translatenewlang(language) {
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
};
