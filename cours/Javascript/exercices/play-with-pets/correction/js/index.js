document.addEventListener('DOMContentLoaded', () => {

    console.log('Play with pets');

    // TODO : Modale
    // Lorsqu'on clique sur le bouton d'aide (identifiant : help-button)
    // Ouvrir la modale (identifiant popup-help)
    // Lorsque'on clique sur la croix en haut à droite de la modale,
    // (elle porte la classe close-button)
    // Fermer la modale
    const modale = document.querySelector('#popup-help');
    
    document.querySelector('#help-button').addEventListener('click', () => {
        modale.classList.add('js-visible');
    });

    document.querySelector('.close-button').addEventListener('click', () => {
        modale.classList.remove('js-visible');
    });

    // TODO : Couverture
    // La faire défiler de gauche à droite avec les flèches
    // L'image est contenue dans un élément qui a la classe .main-cover
    let cover = document.querySelector('.main-cover');

    document.addEventListener('keydown', (event) => {
        console.log(event.key)
        if (event.key === 'ArrowLeft') {
            cover.style.transform = "translate(-200px)";
            cover.style.transition = '3s';
        }
        if (event.key === 'ArrowRight') {
            cover.style.transform = "translate(200px)";
            cover.style.transition = '3s';
        }
    });

    // TODO : Les races de chat
    // Afficher la bulle sur le chat au clic sur le bouton
    // L'élément est accessible via la classe .race-chat-cover::after
    const btn = document.querySelector('.race-chat-cover button');
    
    btn.addEventListener('click', () => {
        let element = document.querySelector('.race-chat-cover');
        
        element.classList.add('js-visible');
    })
    
    // TODO : Les races de chat
    // Si on clique sur l'image, changer la photo
    // L'image est contenue dans un élément qui a la classe .race-chat-cover
    let raceChatImg = document.querySelector('.race-chat-cover img');
    raceChatImg.addEventListener('click', () => {
        raceChatImg.src = 'images/chat-mignon.png';
    });

    // TODO : Les races de chat
    // Dans la liste, Mettre en gras le Sacré de Birmanie et le Tigré
    // La liste est accessible via la classe .race-chat-list
    document.querySelector('.race-chat-list li:nth-child(6)').style.fontWeight = 'bold';
    document.querySelector('.race-chat-list li:nth-child(10)').style.fontWeight = 'bold';
});
