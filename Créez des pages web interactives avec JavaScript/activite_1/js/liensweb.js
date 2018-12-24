/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

var divLien = [];



var contenu = document.getElementById("contenu");
var lien, titre, url, auteur;

for(var i=0; i<listeLiens.length; i++){

    lien = listeLiens[i];
    titre = lien['titre'];
    url = lien['url'];
    auteur = lien['auteur'];

    var titreEl = document.createElement('a');
    titreEl.style.color = "#428bca";
    titreEl.style.fontWeight = "bold";
    titreEl.style.display = "inline";
    titreEl.style.textDecoration = "none";

    var urlEl = document.createElement('span');
    
    var auteurEl = document.createElement('p');



    titreEl.innerText = titre + "  ";
    titreEl.href = url;
    urlEl.textContent = url;
    auteurEl.textContent = auteur;

    divLien[i] = document.createElement('div');
    divLien[i].className = 'lien';
    
    // ajout des éléments de DOM à la page
    divLien[i].append(titreEl);
    divLien[i].append(urlEl);
    divLien[i].append(auteurEl);
    contenu.append(divLien[i]);
}
