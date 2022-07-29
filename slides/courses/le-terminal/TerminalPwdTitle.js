import TitleAndSubtitle from '../../layouts/TitleAndSubtitle';

export default ({
  name: 'TerminalPwdTitle',
  components: {
    TitleAndSubtitle,
  },
  template: `
    <TitleAndSubtitle
     title="Afficher le dossier de travail"
     subTitle="pwd : print working directory"
    />
  `,
});
