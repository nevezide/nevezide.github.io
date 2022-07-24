import GrosChiffre from '../../layouts/GrosChiffre';

export default ({
  name: 'ProgrammeSoutien',
  components: {
    GrosChiffre,
  },
  template: `
    <GrosChiffre
      chiffre="1h / Jour"
      description="De soutien après les cours"
    />
  `,
});
