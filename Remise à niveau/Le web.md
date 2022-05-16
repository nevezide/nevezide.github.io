# Le Web

## L'Internet et le Web

Internet : Réseau de réseaux décentralisé et mondial

### Applications d'Internet
- World Wide Web (ou Web, La Toile) : est un système hypertexte public fonctionnant sur Internet.
Le Web permet de consulter, avec un navigateur, des pages accessibles sur des sites.
L’image de la toile d’araignée vient des hyperliens qui lient les pages web entre elles.
https://fr.wikipedia.org/wiki/World_Wide_Web
- Courrier électronique
- Messagerie instantanée
- Partage de fichiers Pair to pair
- Streaming
- Téléconférence
- Podcasting

### Le web
- Un protocole de communication sur le réseau Internet : HTTP(S)
- Une adresse pour localiser et identifier une ressource du réseau, appelée URL
- Un format de fichier (interprété par le navigateur) pour présenter l'information :  HTML

### Un site web
- Composé de pages web (au format HTML) reliées entre-elles par des liens hypertextes

## Historique du World Wide Web (web)

### 1989-1990 : Fondation par Tim Berners-Lee et Robert Cailliau

Le 13 mars 1989, Tim Berners-Lee, engagé au CERN à Genève en 1984 pour travailler sur l’acquisition et le traitement des données, propose de développer un système hypertexte organisé en Web, afin d’améliorer la diffusion des informations internes : "Information Management: A Proposal".

1990 : Le premier serveur web, un NeXT Cube.
Robert Cailliau rejoint le projet et collabore à la révision de la proposition : WorldWideWeb: Proposal for a HyperText Project.

- Étendue : Le premier serveur web est nxoc01.cern.ch ; la première page web est http://nxoc01.cern.ch/hypertext/WWW/TheProject.html23

- Navigateurs : Le premier navigateur web, appelé WorldWideWeb (plus tard rebaptisé Nexus) est développé en Objective C sur NeXT25.

- Technologies : Les trois technologies à la base du web, URL, HTML et HTTP, sont à l’oeuvre. Sur NeXT, des feuilles de style simples sont également utilisées.

### 1990 à 1993 : Mise à disposition sur le domaine public
- Navigateurs : Apparitions des navigateurs NCSA Mosaic et Lynx.
- Mosaic cause un phénoménal accroissement de la popularité du web.

### Dates clés

1994 :
- Yahoo! créé par deux étudiants ; apparition de la publicité sur HotWired.
- Navigateurs : Netscape Navigator 1.0.
- Standards : Fondation du World Wide Web Consortium ; RFC 1738 (Uniform Resource Locators).

1995 : 23 500 sites en juin
- Microsoft crée MSN pour concurrencer Internet et le web, puis change d’avis et lance la guerre des navigateurs.
- Serveur HTTP Apache
- Navigateurs : Microsoft Internet Explorer 1.0 et 2.0.
- Moteur de recherche AltaVista.
- Technologies :
  - Formatage tabulaire `<table></table>`
  - Documents multi-cadres `<iframe>`
  - Java
  - JavaScript
  - PHP
- Standards : RFC 1866 (HTML 2.0)

1996 : 230 000 sites en juin
- Standards : RFC 1945 (HTTP/1.0), CSS level 1
- Sites : Internet Archive commence à archiver le web.

1997 : plus de 1 000 000 sites
- Standards : HTML 3.2 ; HTML 4.0.

1998 : plus de 2 000 000 sites en mars.
- Logiciels : projet Mozilla.
- Sites : Google
- Standards : XML 1.0 ; CSS level 2 ; DOM level 1, WAP level 1.

1999 : plus de 4 000 000 de sites en janvier
- Standards : HTML 4.01 ; RFC 2616 (HTTP/1.1).

2001 : 27 585 719 sites en janvier
- Sites : Wikipédia

2004 : 53 341 867 sites en août
- Apparition du Web 2.0
Standards : création du Web Hypertext Application Technology Working Group (WHATWG).
Sites : Facebook
Logiciels : Mozilla Firefox 1.0.

2007 : 108 810 358 sites en février
Standards : Le W3C décide de poursuivre le travail sur HTML5 commencé au WHATWG.

2008 : 158 209 426 sites en février
Logiciels : Google Chrome 0.2.

2014 : 1 000 000 000 sites en septembre

## L'environnement Client Serveur

Client :
- consomme des ressources
- permet à l'utilisateur d'interagir avec
- de les créer / modifier / supprimer

Serveur :
- gère le stockage
- servir les ressources aux différents clients
- les droits d'accès aux ressources

### Côté client
- HTML
- Feuilles de styles CSS
- Langage de programmation JavaScript

### Côté Serveur
- Langage de programmation PHP
- Serveur de base de données MySQL et langage SQL

## Les univers de productions (Stacks)

### LAMP
- Linux (OS)
- Apache (Webserver)
- MySQL / MongoDB (Data persistence)
- PHP / Python (Programming language)

### JAVA

### WISA
- Windows Server / IIS
- Microsoft SQL Server
- ASP / .NET (VB, C#)

### MEAN
- MongoDB (Data persistence)
- Express.js (server-side application framework)
- Angular.js (client-side application framework)
- Node.js (server-side environment)

### Ruby Stack
Ruby/Ruby on Rails/RVM (Ruby Virtual Machine) / SQLite

### Django Stack
Python / Django / Apache / MySQL

## Navigateurs

- Installation
- Personnalisation
- Icône pour rafraîchir la page (et les raccourcis)
- Vider le cache
- Installer une extension (exemple: Web Developer Bar)
- Ouverture de l'inspecteur d'élément
- Console

## TCP / IP / DND

TCP : Couche de transport des données en paquets avec gestion d'erreurs
IP : Identification des objets connectés (127.0.0.1 = localhost)
DNS : Faire correspondre une IP à un domaine

ping www.google.fr

## Les principaux protocoles sur Internet
- HTTP : URL, Requête, Réponse, Entête / Corps (payload)
- HTTPS : HTTP sécurisé avec un certificat pour chiffrer les données (la plupart des sites l'utilisent)
- SMTP : courrier électronique
- FTP : serveur de fichiers (un dossier partagé, à la manière de DropBox)

## Les URx

### URI - Uniform Ressource Identifier
Permet d'identifier une ressource (ex: Marc Lefort pour désigner une personne)

### URL - Uniform Ressource Locator
Permet de localiser une ressource (ex: un site web sur le web, une adresse postale dans le monde).

Comme il permet d'identifier une ressource, une URL est une URI. En revanche une URI n'est pas toujours une URL (Marc Lefort ne donne aucune information sur sa localisation).

protocole://domain/dossier/sous-dossier?param1=valeur&param2=valeur2#ancre

protocole:// domain /dossier/sous-dossier ?param1=valeur&param2=valeur2 #ancre

- protocole : HTTP(S), FTP, SMTP, ...
- nom de domaine : google.com, 3wa.io, ...
- organisation des pages du site (arboresence de dossiers) : /pages/theme/animaux
- query : paramètres de localisation d'une page dans le dossier (? animal = chat & couleur = bleu)
- ancre : localisation d'un paragraphe dans une page (#titre2)

### URN - Uniform Ressource Name
Une URN est un identifiant unique dans le temps et l'espace pour une ressource (ex : L'ISBN d'un livre).

Comme il permet d'identifier une ressource, une URN est une URI. En revanche une URI n'est pas toujours une URN (Marc Lefort peux désigner plusieurs personnes)
