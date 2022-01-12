var requestContactURL = 'https://raw.githubusercontent.com/GuilhemGabrielli/-CampusWorkshop2022-Team04/main/json/contact.json';

var requestContact = new XMLHttpRequest();
var contact = []

requestContact.open('GET', requestContactURL);

requestContact.responseType = 'json';
requestContact.send();

requestContact.onload = function() {
    contact = requestContact.response;
    console.log(contact)
    presentReseauxSociaux()
}

function presentReseauxSociaux() {
    const nousTrouver = document.getElementById('NousTrouver')
    console.log(contact['nombreReseauSociaux'])

    if (contact['nombreReseauSociaux'] == 0) {
        console.log('0')
    }
}
