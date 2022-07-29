import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const mkdirUrl = new URL('./images/mkdir.png', import.meta.url);
const mkdirResultUrl = new URL('./images/mkdir-result.png', import.meta.url);
const treeUrl = new URL('./images/ls-tree.png', import.meta.url);

export default ({
  name: 'TerminalMakeDir',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="Créer un dossier">
      <TwoColumns>
        <template slot="col1">
          <div class="title">Soit l'arboresence suivante :</div>
          <img src="${treeUrl}" alt="Arboresence" />
        </template>
        <template slot="col2">
          <div class="title">mkdir &lt;dossier&gt;</div>
          <img src="${mkdirUrl}" alt="Terminal mkdir" />
          <img src="${mkdirResultUrl}" alt="Arboresence nouveau dossier" />
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
