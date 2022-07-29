import TitleAndContent from '../../layouts/TitleAndContent';

export default ({
  name: 'CadreAbsence',
  components: {
    TitleAndContent
  },
  template: `
    <TitleAndContent title="Absence et départ anticipé">
      <b>Retard :</b> Me prévenir<br />
      => Par mail : <u>fabrice.vallee@3wa.io</u><br />
      => Discord<br />
      <br />
      <b>Absence</b> ou <b>Départ anticipé</b><br />
      => Me prévenir : Fiche d'absence / Décharge de sortie à remplir<br />
      et à envoyer par email à grand-ouest@3wa.io
    </TitleAndContent>
  `,
});
