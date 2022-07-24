import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const cdToParentUrl = new URL('./images/cd-to-parent.png', import.meta.url);
const treeUrl = new URL('./images/ls-tree.png', import.meta.url);

export default ({
  name: 'TerminalChangeDirToParent',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="Revenir dans le dossier parent">
      <TwoColumns>
        <template slot="col1">
          <div class="title">Soit l'arboresence suivante :</div>
          <img src="${treeUrl}" alt="Arboresence" />
        </template>
        <template slot="col2">
          <div class="title">cd ..</div>
          <img src="${cdToParentUrl}" alt="Terminal cd .." />
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
