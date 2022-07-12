
/****************** Passage de fonction en paramètre *****************/
function bonjour() {
  return 'Bonjour';
}

function execute(toto) {
  console.log(
    toto()
  )
}

execute(bonjour);

/*** Avec paramètre ***/
function bonjourNom(nom) {
  return 'Bonjour ' + nom;
}

function executeWithParams(toto, nom) {
  console.log(
    toto(nom)
  )
}

executeWithParams(bonjourNom, 'Fabrice');
