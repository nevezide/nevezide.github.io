import TitleAndSubtitle from '../../layouts/TitleAndSubtitle';

export default ({
  name: 'TerminalRemoveDirTitle',
  components: {
    TitleAndSubtitle,
  },
  template: `
    <TitleAndSubtitle
     title="Supprimer un dossier vide"
     subTitle="rmdir : remove directory"
    />
  `,
});
