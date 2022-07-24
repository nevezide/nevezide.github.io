import GrosChiffre from '../../layouts/GrosChiffre';

export default ({
  name: 'CadreDejeuner',
  components: {
    GrosChiffre,
  },
  template: `
    <GrosChiffre
      chiffre="1h Le midi"
      description="Pour déjeuner"
      important="A définir ensemble entre 12h et 14h"
    />
  `,
});
