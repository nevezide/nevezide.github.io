# A SASS Application

L'objectif de ce mini projet est de réaliser une interface typique d'une application SASS.
Pour info, je me suis inspiré de Google Calendar pour certaines parties :)

Les parties sont à réaliser dans l'ordre car chaque partie est un ajout à la précédente.

## Partie 1 : Créer le layout de l'interface
- Un header et un footer fixe : cad qui ne bougent pas lors du défilement.
- Un conteneur principal entre les 2 qui va accueillir le contenu de l'interface

## Partie 2 : Ajouter du texte dans le conteneur
- Ajouter un "Lorem ispum" suffisemment grand pour avoir besoin de défiler le texte pour tout lire.

## Partie 3 : Boutons icônes
- Ajouter des boutons représentés par des icônes, à gauche et à droite du header
NOTE : Les fichiers des icônes sont téléchargeables en faisant
dans l'interface un clic droit -> "Enregistrer l'image sous..."

## Partie 4 : Ajouter une boîte de message
- Ajouter une boite de message - qui dans la réalité est animée, ce qu'on a pas encore vu :)
Elle doit se trouver au-dessus du contenu de l'interface sans cacher le header
Elle ne doit pas disparaitre si on défile le texte.

## Partie 5 : Ajouter le panneau de gauche
- Avec des boutons cliquables

## Partie 6 : Ajout du menu paramètres (en pure CSS)
- Menu qui s'affiche au survol de la souris sur l'icône "paramètres"
=> Et c'est possible avec ce qu'on a vu
TIP : jouer avec la pseudo classe :hover et les sélecteurs multiples - exemple : "a .class"

## Partie 7 : Ajout du panneau de gestion du compte utilisateur (en pure CSS)
- Il s'affiche au survol de la souris sur le bouton "utilisateur"
=> Et c'est possible avec ce qu'on a vu
TIP : jouer avec la pseudo classe :hover et les sélecteurs multiples - exemple : "a .class"

- Il comporte un bouton cliquable "Gérer"

## Partie 8 : Popup d'aide (en pure CSS)
- Ajout d'un coverlay (une couverture opaque au-dessus de tout l'écran)
=> TIP utiliser l'attribut CSS "opacity" avec la valeur 0.5

- Ajout d'une popup d'aide qui s'ouvre au clic sur le bouton "aide"
=> TIP utiliser <a href="#mon-lien">...</a> ET <div id="mon-lien">...</div>
Et la pseudo classe ":target", mon-lien:target pour gérer l'affichage en CSS (cf w3schools pour plus d'infos)

- ATTENTION : La pop-up d'aide doit être centrée quelque soit la taille de la fenêtre
(donc pas de taille ni de marges fixées en px)
=> TIP : Jouer avec les positionnements et les tailles relatives (em / rem / %)

- Lorsqu'on clique sur la croix en haut à gauche, elle se ferme
=> TIP <a href="#">...</a> reset l'interface, la pop-up étant masquée par défaut...
