import TitleAndSubtitle from '../../layouts/TitleAndSubtitle';

export default ({
  name: 'TerminalDeleteFileTitle',
  components: {
    TitleAndSubtitle,
  },
  template: `
    <TitleAndSubtitle
     title="Supprimer un fichier"
     subTitle="rm : remove"
    />
  `,
});
