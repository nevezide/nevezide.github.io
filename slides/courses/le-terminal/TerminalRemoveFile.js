import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const mvUrl = new URL('./images/rm.png', import.meta.url);
const treeUrl = new URL('./images/cp-tree.png', import.meta.url);
const mvTreeUrl = new URL('./images/rm-tree.png', import.meta.url);

export default ({
  name: 'TerminalDeleteFile',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="Supprimer un fichier">
      <TwoColumns>
        <template slot="col1">
          <div class="title">Soit l'arboresence suivante :</div>
          <img src="${treeUrl}" alt="Arboresence" />
        </template>
        <template slot="col2">
          <div class="title">rm &lt;fichier&gt;</div>
          <img src="${mvUrl}" alt="Terminal rm" />
          <img src="${mvTreeUrl}" alt="Arboresence fichier supprimé" />
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
