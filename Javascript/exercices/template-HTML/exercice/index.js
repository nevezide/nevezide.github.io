let template = '\
  <html>\n\
    <head>\n\
      <title>{{title}}</title>\n\
    </head>\n\
    <body>\n\
      <h1>{{title}}</h1>\n\
      <p>{{text}}</p>\n\
    </body>\n\
  </html>'
;

let data = {
  title: 'My page',
  text: 'This is my page'
};

// Dans template, remplacer les tags {{...}} par le contenu de data :
// - {{title}} par le champ title de data
// - {{text}} par le champ text de data

// Afficher le résultat
