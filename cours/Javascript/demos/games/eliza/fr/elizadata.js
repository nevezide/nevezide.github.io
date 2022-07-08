// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]
// traduction par M. Trudel

var elizaInitials = [
  "Bonjour, comment vas-tu ? Quel est ton probleme ?",
  // additions (not original)
  "Dis-moi ce qui te tracasse",
  "As-tu un probleme ?"
  ];
  
  var elizaFinals = [
  "Au revoir.  C'etait sympa de parler avec toi.",
  // additions (not original)
  "Au revoir.  C'etait vraiment une bonne conversation.",
  "Au revoir. J'ai deja hate a notre prochaine session",
  "C'etait une bonne sesson, n'est-ce pas -- mais il est temps de se dire au revoir.",
  "Peut-etre devrions-nous y revenir lors de notre prochaine rencontre ?   Bonne journee."
  ];
  
  var elizaQuits = [
  "bye",
  "au revoir",
  "quit",
  "exit",
  "quitte"
  ];
  
  var elizaPres = [
  //"dont", "don't",
  //"cant", "can't",
  //"wont", "won't",
  //"recollect", "remember",
  "rappelle", "souviens",
  "rever", "imaginer",
  "reve", "reves",
  "dreams", "dream",
  "parfois", "occasionellement",
  "certainnement", "oui",
  "machine", "ordinateur",
  "machines", "ordinateurs",
  "computers", "computer",
  "nous sommes", "etions",
  "t'es", "tu es",
  "je", "moi je",
  "pareil", "similaire",
  "identique", "semblable",
  "equivalent", "similaire"
  ];
  
  var elizaPosts = [
  "suis", "sommes",
  "ton", "mon",
  "moi", "toi",
  "moi-meme", "toi-meme",
  "toi-meme", "moi-meme",
  "je", "tu",
  "toi", "Je",
  "mon", "ton",
  "je suis", "tu es"
  ];
  
  var elizaSynons = {
  "suis": ["es", "est", "sommes", "etions"],
  "crois": ["sent", "pense", "ressent", "souhaite"],
  "ne peux pas": ["incapable"],
  "desire": ["veux", "aspire"],
  "tous": ["tout le monde", "personnes", "aucun"],
  "famille": ["mamman", "mere", "pere", "papa", "soeur", "frere", "femme", "enfant", "bebe"],
  "heureux": ["bien", "joyeux", "mieux"],
  "triste": ["malehureux", "depressif", "malade"]
  };
  
  var elizaKeywords = [
  
  /*
    Array of
    ["<key>", <rank>, [
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]],
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]]
    ]]
  */
  
  ["xnone", 0, [
   ["*", [
       "Je ne suis pas sur de bien te comprendre.",
       "Continue",
       "Qu'est-ce que cela t'inspire ?",
       "Est-ce que cette discussion te derange ?",
       "Ceci est interessant.  SVP continue.",
       "Dis-moi en plus a ce sujet.",
       "Prefere-tu discuter d'autre chose ?"
    ]]
  ]],
  ["excuse", 0, [
   ["*", [
       "Ne t'excuse pas.",
       "Les excuses sont pour les faibles.",
       "Les excuses ne sont pas necessaires.",
       "J'ai deja mentionne que les excuses ne sont pas requises.",
       "Ca ne me derange pas. STP continue."
    ]]
  ]],
  ["desole", 0, [
   ["*", [
       "goto excuse"
    ]]
  ]],
  ["souviens", 5, [
   ["* je me souviens *", [
       "Penses tu souvent a (2) ?",
       "Lorsque tu penses a (2) autre chose te viens a l'esprit ?",
       "qu'est-ce que ce souvenir t'inspire ?",
       "Viens tu juste de te souvenir de (2) ?",
       "Qu'est-ce qui te fais penser a (2) dans la situation actuelle?",
       "QUel est le lien entre moi et (2) ?",
       "A quoi d'autre (2) te fais penser ?"
    ]],
   ["* te souviens tu *", [
       "Pensais tu que j'oublierais (2) ?",
       "Pourquoi devrais-je me rappeller de (2) maintenant ?",
       "Quoi d'autre a propos de (2) ?",
       "goto quoi",   
       "Tu as mentionne (2) ?"
    ]],
   ["* tu te souviens *", [
       "Comment pourrais-je oublier (2) ?",
       "Concernant (2) de quoi dois-je me rapeller ?",
       "goto toi"  
    ]]
  ]],
  ["oublie *", 5, [
   ["* ai oublie *", [
       "Peux-tu trouver une raison pour cet oubli (2) ?",  
       "POurquoi tu ne peux pas oublier (2) ?",
       "Combien de foia par semaine penses-tu a (2) ?",
       "Est-ce que ca t'ennuie d'oublier cela ?",
       "Un blocage mental peut-etre ?",
       "Aa-tu tendance a pardonner ?",
       "Penses-tu voiloir obliterer (2) ?"
    ]],
   ["* as*tu oublie *", [
       "Pourquoi le demande-tu ?",
       "Es-tu certains de l'avoir mentionne ?",
       "Serais-tu contrarie si j'avais oublie (2) ?",
       "Pourquoi devrais-je me souvenir de (2) maintenant ?",
       "goto quoi",
       "Dis-moi en plus a propos de (2)."
    ]]
  ]],
  ["si", 3, [
   ["* si *", [
       "Est-ce probable de penser que (2) ?",
       "Voudrais-tu que (2) ?",
       "QUe sait-tu a propos de (2) ?",
       "Vraiment, si (2) ?",
       "Que ferais tu si (2) ?",
       "Mais quelles sont les chances que (2) ?",
       "Ou nous mene de telles speculations ?"
    ]]
  ]],
  ["reve", 4, [
   ["* ai reve *", [
       "Vraiment, (2) ?",
       "As-tu deja fantasme a propos de (2) lorsque tu etais eveille ?",
       "As-tu deja reve a (2) auparavent ?",
       "goto cauchemar"
    ]]
  ]],
  ["cauchemar", 3, [
   ["*", [
       "Qu'est-ce que ce reve nous apprend ?",
       "Fais-tu souvent ce reve ?",
       "Quelles personnes apparaissent dans ce reve ?",
       "Penses-tu qu'il y a un lien avec tes problemes ?"
    ]]
  ]],
  ["peut-etre", 0, [
   ["*", [
       "Tu ne sembles pas certain.",
       "Pourquoi ce ton incertain ?",
       "Peux-tu etre plus positif ?",
       "Tu n'es pas certains ?",
       "Qu'en penses-tu ?",
       "Quelle coincidence, n'est-ce pas ?"
    ]]
  ]],
  ["nom", 15, [
   ["*", [
       "Je ne suis pas interesse par le nom des personnes.",
       "Je t'ai deja mentionne que les noms ne m'interessent pas -- continue."
    ]]
  ]],
  ["deutsch", 0, [
   ["*", [
       "goto xforeign",
       "Je ne parle pas Allemand."
    ]]
  ]],
  ["english", 0, [
   ["*", [
       "goto xforeign",
       "Je ne parle pas Anglais."
    ]]
  ]],
  ["italiano", 0, [
   ["*", [
       "goto xforeign",
       "Je ne parle pas Italien."
    ]]
  ]],
  ["espanol", 0, [
   ["*", [
       "goto xforeign",
       "Je ne parle pas espagnol."
    ]]
  ]],
  ["xforeign", 0, [
   ["*", [
       "Je parle seulement Francais."
    ]]
  ]],
  ["Allo", 0, [
   ["*", [
       "Comment-va tu, quel est ton probleme.",
       "Allo, quel est ton probleme ?"
    ]]
  ]],
  ["ordinateur", 50, [
   ["*", [
       "As-tu peur des ordinateurs ?",
       "Pourquoi mentionnes-tu les ordinateurs ?",
       "En quoi penses-tu que les machines ont un lien avec tes problemes ?",
       "Penses-tu qu'il y a un lien entre les ordinateurs et tes problemes ?",
       "Qu'est-ce qui te preoccupe avec les machines ?",
       "Pourquoi penses-tu aux ordinateurs ?",
       "Pourquoi pense-tu que je suis un robot ?"
    ]]
  ]],
  ["suis", 0, [
   ["* je pense etre *", [
       "Penses-tu vraiment etre (2) ?",
       "Voudrais-tu etre (2) ?",
       "Tu aimerais que je te dise que tu es (2) ?",
       "QU'est-ce que ca represente d'etre (2) ?",
       "goto quoi"
    ]],
   ["* je suis *", [
       "goto je"
    ]],
   ["*", [
       "Pourquoi dis-tu 'suis' ?",
       "Je ne comprend pas cela."
    ]]
  ]],
  ["es", 0, [
   ["* es-tu *", [
       "Pourquoi est-tu interesse par ce que je (2) ou non ?",
       "VOudrais-tu que je sois (2) ?",
       "Peus-etre suis-je (2) dans tes phantasmes.",
       "Parfois penses-tu que je suis (2) ?",
       "goto quoi",
       "Est-ce que ca te preoccupes ?",
       "Et puis si j'etais (2) ?"
    ]],
   ["* tu es *", [
       "goto es"
    ]],
   ["* etais *", [
       "Pesnsais-tu qu'ils ne pouvaient pas etre (2) ?",
       "Aimerais-tu qu'ils n'aient pas ete (2) ?",
       "QUe se passerait-il s'il n'etais pas (2) ?",
       "SOnt-ils toujours (2) ?",
       "Possiblement sont-ils (2).",
       "Es-tu sur qu'il est (2) ?"
    ]]
  ]],
  ["ton", 0, [
   ["* ton *", [
       "Pourquoi es-tu intersse par mon (2) ?",
       "Quand est-il de ton (2) ?",
       "Es-tu preoccupe par le (2) de quelqu'un d'autre ?",
       "Vraiment, mon (2) ?",
       "Qu'est-ce qui te fait penser a mon (2) ?",
       "Veut-tu mon (2) ?"
    ]]
  ]],
  ["etais", 2, [
   ["* etais je*", [
       "Es si tu etais (2) ?",
       "Penses tu que tu etais (2) ?",
       "Etais-tu (2) ?",
       "Qu'est-ce ca signifie que tu etais (2) ?",
       "Qu'est-ce que ' (2) ' te suggere ?",
       "goto quoi"
    ]],
   ["* j'etais *", [
       "L'etais tu vraiment ?",
       "Pourquoi me dit tu que tu etais (2) maintenant ?",
       "Peux-etre savais-je deja que tu etais (2)."
    ]],
   ["* etais tu *", [
       "VOudrais-tu croire que j'etais (2) ?",
       "Qu'est-ce qui te fais penser que j'etais (2) ?",
       "Qu'en penses-tu ?",
       "Peut-etre etais-je (2).",
       "Et puis quoi, si j'etais (2) ?"
    ]]
  ]],
  ["je", 0, [
   ["* je @desire *", [
       "QU'est-ce qui changerait si tu avais (3) ?",
       "Pourquoi desires-tu (3) ?",
       "Imagine si tu avais (3) binetot.",
       "Et si tu n'obtenais jamais (3) ?",
       "Qu'est-ce que d'obtenir (3) signifie pour toi ?",
       "En quoi obtenir (3) vient faire dans notre discussion ?"
    ]],
   ["* je suis* @triste *", [
       "Je suis desole que tu te sente (3).",
       "Penses tu qu'en venant ici tu pourras passer par dessus (3) ?",
       "Je suis certains que ce n'est pas agreable d'etre (3).",
       "Peux tu comprendre ce qui t'amene a (3) ?"
    ]],
   ["* je suis* @heureux *", [
       "Est-ce que je t'ai aide a etre (3) ?",
       "Est-ce que le traitement t'a permis de (3) ?",
       "QU'est-ce qui ta permis de (3) maintenant ?",
       "Peux-tu comprendre pourquoi tu te sent (3) ?"
    ]],
   ["* j'etais *", [
       "goto etais"
    ]],
   ["* je @crois que je *", [
       "Le penses tu vraiment ?",
       "Mais tu n'es pas certains que (3).",
       "Tu as des doutes au sujet de (3) ?"
    ]],
   ["* je* @crois *toi *", [
       "goto toi"
    ]],
   ["* je suis *", [
       "Est-ce parce que tu es (2) que tu es venue me voir ?",
       "Depuis combien de temps es-tu (2) ?",
       "Crois-tu qu'il est normal de (2) ?",
       "Est-ce que as du plaisir a etre (2) ?",
       "Connais-tu d'autres personnes qui sont (2) ?"
    ]],
   ["* je ne @peux pas *", [
       "Comment sait tu que tu ne peux pas (3) ?",
       "As-tu essaye ?",
       "Peut-etre pourrait-tu (3) maintenant.",
       "Veut-tu vraiment etre capable de (3) ?",
       "Qu'arriverait-il si tu pouvais (3) ?"
    ]],
   ["* je ne fais pas *", [
       "Vraiment tu ne fais pas (2) ?",
       "Pourquoi tu ne fais pas (2) ?",
       "Aimerait tu faire (2) ?",
       "Est-ce que ceci te trouble ?"
    ]],
   ["* Je ressent *", [
       "DIs-moi en plus sur cette sensation.",
       "Ressent-tu souvent (2) ?",
       "Est-ce plaisant de ressentir (2) ?",
       "Ã  quoi ressentir (2) te fait-il penser ?"
    ]],
   ["* je * toi *", [
       "Peut-etre que dans tes fantames (2) ensemble.",
       "Voudrais-tu (2) avec moi ?",
       "Tu semble vouloir (2) avec moi.",
       "Est-ce que tu (2) avec d'autres personnes ?"
    ]],
   ["*", [
       "Tu dis que (1) ?",
       "Peux-tu preciser ta pensee ?",
       "Est-ce qu tu dis (1) pour une raison en particulier ?",
       "C'est tres interessant."
    ]]
  ]],
  ["toi", 0, [
   ["* tu me fais penser a *", [
       "goto pareil" // reference
    ]],
   ["* tu es *", [
       "Qu'est-qui te fais penser que je suis (2) ?",
       "Tu aimes penser que je suis (2) ?",
       "Tu aimerais etre (2) ?",
       "Peut-etre voudrais tu etre (2)."
    ]],
   ["* tu* moi *", [
       "Pourquoi penses-tu que (2) toi ?", // ici
       "You like to think I (2) you -- don't you ?",
       "quoi makes you think I (2) you ?",
       "Really, I (2) you ?",
       "Do you wish to believe I (2) you ?",
       "Suppose I did (2) you -- quoi would that mean ?",
       "Does someone else believe I (2) you ?"
    ]],
   ["* vous *", [
       "Tu peux me tutoyer.",
       "Oh, nous (2) ?",
       "Tu ne parles pas vraiment de moi -- n'est-ce pas ?",
       "Quels sont tes sentiments maintenant ?"
    ]]
  ]],
  ["oui", 0, [
   ["*", [
       "tu me semble tres positif.",
       "tu l'es.",
       "Je vois.",
       "Je comprends."
    ]]
  ]],
  ["non", 0, [
   ["* non personne *", [
       "Vraiment, personne (2) ?",
       "Surement quelqu'un (2) .",
       "Tu ne peux pesner a personne ?",
       "Penses-tu a une personne vraiment speciale ?",
       "A qui, si tu veux me le partager ?",
       "Tu as quelqu'un en tete, n'est-ce pas ?",
       "De qui est-il question ici ?"
    ]],
   ["*", [
       "Dis-tu non seuleemnt pour etre nagatif ?",
       "Tu es negatif .",
       "POurquoi pas ?",
       "Pourquoi 'non' ?"
    ]]
  ]],
  ["mon", 2, [
   ["$ * mon *", [
       "Est-ce qu'il y a un lien quelconque avec ton (2) ?",
       "Discutons plus en profondeur de ton (2).",
       "AUparavent tu as mentionne ton (2).",
       "Mais ton (2)."
    ]],
   ["* ma* @famille *", [
       "Parle-moi de ta famille.",
       "QUi d'autre dans ta famille (4) ?",
       "Ta (3) ?",
       "Quoi d'autre concernant ta (3) ?"
    ]],
   ["* ma *", [
       "Ta (2) ?",
       "Pourquoi tu dis que ta (2) ?",
       "Est-ce que ce te fais penser a autre chose ?",
       "C'est important pour toi que ta (2) ?"
    ]]
  ]],
  ["peux", 0, [
   ["* peux*tu *", [
       "Tu penses que je peux (2) n'est-ce pas ?",
       "goto quoi",
       "tu aimerais que je puisse (2).",
       "Peux t'etre aimerais tu pouvoir (2) toi meme."
    ]],
   ["* puis*je *", [
       "Que tu puisses (2) depend uniquement de toi.",
       "Veux-tu etre capable de (2) ?",
       "Peux-etre ne veut tu pas (2).",
       "goto quoi"
    ]]
  ]],
  //TODO deja corrige ci-dessous, reste a corriger au dessus
  ["quoi", 0, [
   ["*", [
       "Pourquoi le demandes-tu ?",
       "Est-ce que cette question t'interesse ?",
       "Que veux-tu vraiment savoir ?",
       "Ce type de questions te trottes dans l'esprit ?",
       "Quelle reponse pourrait te satisfaire ?",
       "Qu'en penses tu ?",
       "Qu'est-ce qui te vient a l'esprit ?",
       "As-tu deja pose cette question ?",
       "As-tu demande a d'autres personnes ?"
    ]]
  ]],
  ["qui", 0, [
   ["qui *", [
       "goto quoi"
    ]]
  ]],
  ["quand", 0, [
   ["quand *", [
       "goto quoi"
    ]]
  ]],
  ["ou", 0, [
   ["ou *", [
       "goto quoi"
    ]]
  ]],
  ["comment", 0, [
   ["comment *", [
       "goto quoi"
    ]]
  ]],
  ["parce que", 0, [
   ["*", [
       "Est-ce la vrai raison ?",
       "D'autres explications te viennent a l'esprit ?",
       "Est-ce que cette explication nous apprend quelque chose ?",
       "Quelle autre explication vois-tu ?"
    ]]
  ]],
  ["pourquoi", 0, [
   ["* pourquoi ne *", [
       "Crois-tu que je ne veux pas (2) ?",
       "Peut-etre que je (2) au bon moment.",
       "Devrais-tu (2) toi aussi ?",
       "Tu veux que je (2) ?",
       "goto quoi"
    ]],
   ["* pourquoi je *", [
       "Penses-tu que tu devrais (2) ?",
       "Voudrais tu pouvoir (2) ?",
       "Puis-je t'aider a (2) ?",
       "As-tu une idee de pourquoi tu ne (2) ?",
       "goto quoi"
    ]],
   ["*", [
       "goto quoi"
    ]]
  ]],
  ["tous", 2, [
   ["* @tous *", [
       "Vraiment, (2) ?",
       "Sûrement pas (2).",
       "Penses-tu a quelqu'un en particulier ?",
       "Qui par exemple?",
       "Tu penses a une personne vraiment peciale ?",
       "Qui, si je peux te demander ?",
       "Une personne speciale peut-etre ?",
       "Tu as une personne en tete, n'est-ce pas ?",
       "De qui parles-tu ?"
    ]]
  ]],
  ["tous", 2, [
   ["*", [
       "goto tous"
    ]]
  ]],
  ["personne", 2, [
   ["*", [
       "goto tous"
    ]]
  ]],
  ["aucune", 2, [
   ["*", [
       "goto tous"
    ]]
  ]],
  ["toujours", 1, [
   ["*", [
       "As-tu un exemple ?",
       "Quand ?",
       "A quel incident penses-tu ?",
       "Vraiment, toujours ?"
    ]]
  ]],
  ["pareil", 10, [
   ["*", [
       "De quelle maniere ?",
       "Quelle ressemblance vois-tu ?",
       "Qu'est-ce que cette similarite t'inspires ?",
       "Quel autre lien peut-on etablir ?",
       "A quelle autre conclusion peut-on en venir ?",
       "Quel est le lien, a ton avis ?",
       "Peut-il vraiment y avoir un lien ?",
       "Comment ?"
    ]]
  ]],
  ["semblable", 10, [
   ["* @est *semblable *", [
       "goto pareil"
    ]]
  ]],
  ["different", 0, [
   ["*", [
       "Comment est-ce different ?",
       "Quelle differences vois-tu ?",
       "A quoi cette difference te fait penser ?",
       "Quelle autre distinction peut-on faire ?",
       "Que t'inspire cette diversite ?",
       "Peut-il y a voir un lien, une connexion ?",
       "Comment ?"
    ]]
  ]]
  
  ];
  
  // regexp/replacement pairs to be performed as final cleanings
  // here: cleanings for multiple bots talking to each other - enlever version 2021-1
  //var elizaPostTransforms = [
  //	/ old old/g, " old",
  //	/\bthey were( not)? me\b/g, "it was$1 me",
  //	/\bthey are( not)? me\b/g, "it is$1 me",
  //	/Are they( always)? me\b/, "it is$1 me",
  //	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
  //	/\bI to have (\w+)/, "I have $1",
  //	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
  //];
  
  // eof
  