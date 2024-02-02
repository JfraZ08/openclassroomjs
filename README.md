## Exo 1
Plutôt que d'utiliser une fonction pour calculer la note moyenne pour une série, on a décidé que la classe Show (ou "Série") devrait gérer les nouvelles notes automatiquement.

Comme vous pouvez le constater, la classe   Show  contient un  Array  ratings  , pour les notes, qui est initialisé vide, et une propriété   averageRating  (note moyenne) de zéro.

    Déclarez une méthode instance dans la classe   Show  appelée addRating()  . Elle prendra une   rating  (la note), qui sera un nombre entre 1 et 5, comme paramètre.

    La méthode   addRating()  doit :

    ajouter la note reçue au tableau  ratings  de l'instance ;

    recalculer la valeur averageRating  de l'instance.

Cliquez sur le bouton "Check ratings" pour vérifier si les séries se mettent à jour correctement. Vous pouvez cliquer plusieurs fois sur le bouton pour voir l'évolution des notes moyennes.# openclassroomjs

## Exo2

Cependant, pour l'instant, le même code est répété pour chaque série. L'endroit parfait pour une fonction !

    Créez une fonction qui vous permet de refactoriser ce code, afin de le raccourcir et de le rendre plus lisible.

    Appelez votre nouvelle fonction pour chaque série pour créer le composant correspondant, en passant les arguments appropriés.

## Exo3

Voici un code js avec plusieurs fonctions et différentes mauvaises pratiques rendant le code pas propre. Votre objectif est de créer une fonction pour alléger votre code.

## Exo4

Le code a pour objectif de convertir des années en mois (dans une année, il y a 12 mois). Si on saisit 10 ans dans le champ Année et qu’on clique sur Convertir, on se retrouve avec une phrase nous indiquant que dans 10 années il y a 80 mois, ce qui est faux car la bonne réponse est 120 mois.

Le calcul des mois se fait à la ligne 25, et on souhaite comprendre ce qui ne va pas dans le calcul.

Votre mission ici est de faire des console.log au niveau des lignes 27 à 31 pour analyser les variables utilisées pour le calcul de la ligne 25. Suite à l'analyse, vous pourrez comprendre ce qui ne va pas et effectuer la correction nécessaire.