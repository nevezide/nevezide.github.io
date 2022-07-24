import TitleAndSubtitle from '../../layouts/TitleAndSubtitle';

export default ({
  name: 'TerminalListTitle',
  components: {
    TitleAndSubtitle,
  },
  template: `
    <TitleAndSubtitle
     title="Afficher le contenu d'un dossier"
     subTitle="ls : list"
    />
  `,
});
