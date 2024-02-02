// // Exo1
// // Modify the code here
// // ======================

// class Show {
//     constructor(title, numberOfSeasons) {
//       this.title = title;
//       this.numberOfSeasons = numberOfSeasons;
//       this.ratings = [];
//       this.averageRating = 0;
//     }
    
//     addRating(rating){
//       this.ratings.push(rating);
//       let sum = 0;
//       for (let rating of this.ratings){
//         sum += rating;
//       }
//       this. averageRating = sum / this.ratings.length;
//     }
//   }
  
//   // ======================
  
//   const tau = new Show('The Story of Tau', 5);
//   const colin = new Show('The Hero of Old Meldrum', 3);
//   const clara = new Show('The Bugs of Isla Clara', 6);
  
//   const shows = [tau, colin, clara];
  
//   const body = document.querySelector('body');
//   const refresh = document.querySelector('#refresh');
  
//   refresh.addEventListener('click', () => {
//     removeShows();
//     addRandomRatings();
//     updateShows();
//   })
  
//   const updateShows = () => {
//     for (let show of shows) {
//       const showPane = document.createElement('div');
//       showPane.classList.add('series-frame');
//       const showHeading = document.createElement('h2');
//       showHeading.innerText = show.title;
//       const showDetails = document.createElement('p');
//       const seasons = document.createElement('p');
//       seasons.innerText = show.numberOfSeasons + ' seasons';
//       const ratings = document.createElement('p');
//       ratings.innerText = show.averageRating > 0 ? show.ratings.length + ' ratings\n' + show.averageRating.toFixed(1) + ' stars' : 'No ratings yet';
//       showDetails.append(seasons);
//       showDetails.append(ratings);
//       showPane.append(showHeading);
//       showPane.append(showDetails);
//       body.append(showPane);
//     }
//   };
  
//   const removeShows = () => {
//     const children = [];
//     for (let childNode of body.childNodes) {
//       children.push(childNode);
//     }
//     for (let child of children) {
//       if (child.tagName == 'DIV') {
//         body.removeChild(child);
//       }
//     }
//   }
  
//   const addRandomRatings = () => {
//     for (let show of shows) {
//       if (Math.random() >= 0.2) {
//         const numberOfRatings = Math.floor(Math.random() * 4 + 1);
//         for (let i = 0; i < numberOfRatings; i++) {
//           const rating = Math.floor(Math.random() * 5 + 1);
//           show.addRating(rating);
//         }
//       }
//     }
//   }
  
//   updateShows();

// Exo2

// class Show {
//     constructor(title, numberOfSeasons, episodesPerSeason) {
//       this.title = title;
//       this.numberOfSeasons = numberOfSeasons;
//       this.episodesPerSeason = episodesPerSeason;
//   }
// }

// const tau = new Show('The Story of Tau', 5, 12);
// const meldrum = new Show('The Hero of Old Meldrum', 3, 6);
// const clara = new Show('The Bugs of Isla Clara', 6, 15);

// const shows = [tau, meldrum, clara];

// // Modify the following code
// // ======================

// const generateComponent = (show) => {
//     const titleText = show.title;
//     const seasonsText = show.numberOfSeasons + ' seasons';
//     const episodesPerSeason = show.episodesPerSeason + ' episodes per season';
//     return {
//         titleText,
//         seasonsText,
//         episodesPerSeason
//     };
// }


// const showComponents = [tauComponent, meldrumComponent, claraComponent];

// // ======================
// // Modify the code above

// const body = document.querySelector('body');

// const updateShows = () => {
//   for (let show of showComponents) {
//     const showPane = document.createElement('div');
//     showPane.classList.add('series-frame');
//     const showHeading = document.createElement('h2');
//     showHeading.innerText = show.titleText;
//     const showDetails = document.createElement('p');
//     const seasons = document.createElement('p');
//     seasons.innerText = show.seasonsText;
//     const episodes = document.createElement('p');
//     episodes.innerText = show.episodesText;
//     showDetails.append(seasons);
//     showDetails.append(episodes);
//     showPane.append(showHeading);
//     showPane.append(showDetails);
//     body.append(showPane);
//   }
// };

// updateShows();

// // Exo3

// //-----CODE NON DRY------

// //variable de différentes personnes
// let personne1 = "Jean";
// let personne2 = "Paul";
// let personne3 = "Marcel";

// function saluer(prenom) {
// //On met la première lettre en majuscule, on salue la première personne et on donne le nombre de lettre dans son prénom    
// const monPrenom = prenom[0].toUpperCase() + prenom.substr(1);
// const longueurPrenom = monPrenom.length;
// console.log(`Bonjour ${monPrenom}, ton prénom contient ${longueurPrenom} lettres`);
// }
// // On salue les 3 personnes 
// saluer(personne1);
// saluer(personne2);
// saluer(personne3);


// //-----CODE MAL NOMMÉ------

// //tableau des ages des élèves dans la classe
// const agesEleveDeClasse = [14, 14, 15, 14, 16, 14, 14, 13]; // lrf
// // Nombre d'élèves
// const nombreEleves = agesEleveDeClasse.length; // kf
// // variable pour calculer la somme des ages
// let sommeAges = 0; //mf
// for(let age of agesEleveDeClasse){
//   sommeAges += age;
// }
// //moyenne d'age dans la classe
// const moyenneAgesDeClasse = sommeAges / nombreEleves;
// console.log('Il y a ' + nombreEleves + " élèves dans la classe et la moyenne d'age est " + moyenneAgesDeClasse);
    


// //-----CODE MAL MIS EN FORME------

// const temperature = 25;

// if(temperature < 10)
// {  
//     console.log("Il fait très froid"); 
// }
// else if(temperature < 0)
// {
//     console.log("Il fait froid");
// }
// else if(temperature < 10)
// {
    // console.log("Il fait frais");
// }
// else if(temperature < 20)
// {
//     console.log("Il fait doux");
// }
// else if(temperature < 30)
// {
//     console.log("Il fait bon");
// }
// else
// {  
//   console.log("Il fait chaud");
// }

// Exo4 

//On pointe sur l'élément de message
const espaceMessage = document.getElementById("message");
//On pointe sur l'élément de bouton
const bouton = document.getElementById("bouton");
//On pointe sur l'élément de champ de saisie de l'année
const anneeInput = document.getElementById("annee");

let params = [];
for(let i = 20; i > 0; i--){
  params.push(i);
}

//On défini la variage année qu'on utilisera et un variable définissant l'age de la majorité
let annee;

function onConvert(){  
  
  //On récupère la saisie de l'année et on transforme le texte en nombre entier
  annee = parseInt(anneeInput.value);
  //Si la saisie n'est pas un nombre, on affiche un message d'erreur
  if(isNaN(annee)){
    alert("Ceci n'est pas un nombre");
    return;
  }
// Dans notre calcul, on souhaite récupérer la valeur du tableau qui vaut 12. On trouve cette valeur à l’index 8.
  const mois = annee * params[8];
  
  // ANALYSER ICI AVEC CONSOLE LOG
  // Analyser la variable annee
  console.log('annee',annee);
  // Analyser la variable params
  console.log('params',params);
  // Analyser la variable mois
  console.log(mois);
  // FIN ANALYSE
  
  espaceMessage.innerHTML = annee + " années font " + mois + "mois ";
}



//On écoute l'action de click sur le onConvert et on appelle la fonction onConvert
bouton.addEventListener('click', onConvert);

