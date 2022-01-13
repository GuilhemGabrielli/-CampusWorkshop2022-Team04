var requestDocumentsLegauxURL = 'https://raw.githubusercontent.com/GuilhemGabrielli/-CampusWorkshop2022-Team04/main/json/documentsLegaux.json';

var requestDocumentsLegaux = new XMLHttpRequest();
var documentsLegaux = []

requestDocumentsLegaux.open('GET', requestDocumentsLegauxURL);

requestDocumentsLegaux.responseType = 'json';
requestDocumentsLegaux.send();

requestDocumentsLegaux.onload = function() {
    documentsLegaux = requestDocumentsLegaux.response;
    console.log(documentsLegaux)
}