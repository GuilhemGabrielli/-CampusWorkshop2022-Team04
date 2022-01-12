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

    if (contact['nombreReseauxSociaux'] != 0) {
        const titrePartie = document.createElement('h3')
        titrePartie.innerText = "Où nous trouver ?"
        nousTrouver.prepend(titrePartie)

        for (let i=0; i < contact['reseauxSociaux'].length; i++) {
            addReseauxSociaux(contact['reseauxSociaux'][i], nousTrouver)
        }
    }
}

function addReseauxSociaux(reseauSocial, divNousTrouver) {
    if (reseauSocial['lienURLReseauSocial'] != "") {
        const aLien = document.createElement('a')
        aLien.href = reseauSocial['lienURLReseauSocial']

        const imgReseauSocial = document.createElement('img')
        imgReseauSocial.src = reseauSocial["LogoReseauSocial"]
        imgReseauSocial.alt = reseauSocial["nomReseauSocial"]
        imgReseauSocial.className= "icon"

        aLien.prepend(imgReseauSocial)
        divNousTrouver.append(aLien)
    }
}


function presentAutreContact() {
    const nosContacts = document.getElementById('nos-contacts')

    if (contact['nombreAutreContact'] != 0) {
        const titrePartie = document.createElement('h3')
        titrePartie.innerText = "Nos contacts"
        nosContacts.prepend(titrePartie)

        const ulContact = document.createElement('ul')
        for (let i=0; i < contact['autreContact'].length; i++) {
            addAutreContact(contact['autreContact'][i], ulContact)
        }

    }
}

function addAutreContact(autreContact, ulNosContact) {
    
}