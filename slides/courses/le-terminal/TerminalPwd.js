import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const pwdUrl = new URL('./images/pwd.png', import.meta.url);
const treeUrl = new URL('./images/tree.png', import.meta.url);

export default ({
  name: 'TerminalPwd',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="Afficher le dossier de travail">
      <TwoColumns>
        <template slot="col1">
          <div class="title">Soit l'arboresence suivante :</div>
          <img src="${treeUrl}" alt="Arboresence" />
        </template>
        <template slot="col2">
          <div class="title">pwd</div>
          <img src="${pwdUrl}" alt="Terminal pwd" />
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
