var requestContactURL = 'https://raw.githubusercontent.com/GuilhemGabrielli/-CampusWorkshop2022-Team04/main/json/contact.json';

var requestContact = new XMLHttpRequest();
var contact = []

requestContact.open('GET', requestContactURL);

requestContact.responseType = 'json';
requestContact.send();

requestContact.onload = function() {
    contact = requestContact.response;
    console.log(contact)
    presentReseauSociaux()
}

function presentReseauSociaux() {
    const nousTrouver = document.getElementById('NousTrouver')

    if (contact['nombreReseauSociaux'] != 0) {
        titrePartie = document.createElement('h3')
        titrePartie.innerText = "Où nous trouver"
        console.log(titrePartie)
        nousTrouver.prepend(titrePartie)
    }

    console.log('test 2')
}
