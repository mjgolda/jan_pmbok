function changeLanguage() {
    var selectedLanguage = document.getElementById('language-select').value;
    window.location.href = selectedLanguage;
}
 // Set the value of the select element based on the current URL
 window.onload = function() {
    var url = window.location.href;
    var filename = url.substring(url.lastIndexOf('/')+1);
    document.getElementById('language-select').value = filename;
}