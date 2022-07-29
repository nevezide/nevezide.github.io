import GrosChiffre from '../../layouts/GrosChiffre';

export default ({
  name: 'ProgrammeAtelier',
  components: {
    GrosChiffre,
  },
  template: `
    <GrosChiffre
      chiffre="6 Ateliers\n1 entretien"
      description="Coaching en reconversion professionnelle"
    />
  `,
});
