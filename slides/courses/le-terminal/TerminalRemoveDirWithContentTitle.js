import TitleAndSubtitle from '../../layouts/TitleAndSubtitle';

export default ({
  name: 'TerminalRemoveDirWithContentTitle',
  components: {
    TitleAndSubtitle,
  },
  template: `
    <TitleAndSubtitle
     title="Supprimer un dossier et son contenu"
     subTitle="rm -R : remove -Recursive"
    />
  `,
});
