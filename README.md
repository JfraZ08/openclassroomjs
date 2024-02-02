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