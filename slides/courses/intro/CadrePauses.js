import GrosChiffre from '../../layouts/GrosChiffre';

export default ({
  name: 'CadrePauses',
  components: {
    GrosChiffre,
  },
  template: `
    <GrosChiffre
      chiffre="2 x 10min"
      description="De pause matin et après-midi"
    />
  `,
});
