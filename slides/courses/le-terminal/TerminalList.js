import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const lsUrl = new URL('./images/ls.png', import.meta.url);
const treeUrl = new URL('./images/ls-tree.png', import.meta.url);

export default ({
  name: 'TerminalList',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="Afficher le contenu d'un dossier">
      <TwoColumns>
        <template slot="col1">
          <div class="title">Soit l'arboresence suivante :</div>
          <img src="${treeUrl}" alt="Arboresence" />
        </template>
        <template slot="col2">
          <div class="title">ls</div>
          <img src="${lsUrl}" alt="Terminal ls" />
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
