import SectionHeaderAndDescription from '../../layouts/SectionHeaderAndDescription';

export default ({
  name: 'MaterielPC',
  components: {
    SectionHeaderAndDescription,
  },
  template: `
    <SectionHeaderAndDescription
     title="Le PC"
    >
      <span><b>Chromebook Configuration</b></span>
      <span>- Suivre le wizard</span>
      <span>- Connexion réseau</span>
      <span><sub>(si pb, cf procédure spécifique)</sub></span>
    </SectionHeaderAndDescription>
  `,
});
