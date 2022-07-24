import SectionHeaderAndDescription from '../../layouts/SectionHeaderAndDescription';

export default ({
  name: 'MaterielOutils',
  components: {
    SectionHeaderAndDescription,
  },
  template: `
    <SectionHeaderAndDescription
     title="Les Outils"
    >
      <span>Discord : 1 groupe pour la session</span>
      <span>Zoom : 1 room pour la session</span>
      <span>Les cours : <a href="https://e.3wa.fr">https://e.3wa.fr</a></span>
      <span>Calendrier : <a href="https://home.3wa.io">https://home.3wa.io</a></span>
      <span>Cours Remise à niveau : <a href="https://apprendre-html.3wa.fr">https://apprendre-html.3wa.fr</a></span>
      <span>IDE : <a href="https://spereck.ide.3wa.io">https://spereck.ide.3wa.io</a></span>
    </SectionHeaderAndDescription>
  `,
});
