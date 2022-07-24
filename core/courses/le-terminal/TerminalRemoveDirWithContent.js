import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const rmRecursiveUrl = new URL('./images/rm-recursive.png', import.meta.url);
const cpTreeUrl = new URL('./images/cp-tree.png', import.meta.url);
const treeUrl = new URL('./images/ls-tree.png', import.meta.url);

export default ({
  name: 'TerminalRemoveDirWithContent',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="Supprimer un dossier et son contenu">
      <TwoColumns>
        <template slot="col1">
          <div class="title">Soit l'arboresence suivante :</div>
          <img src="${cpTreeUrl}" alt="Arboresence" />
        </template>
        <template slot="col2">
          <div class="title">rm -R &lt;dossier&gt;</div>
          <img src="${rmRecursiveUrl}" alt="Terminal rm -Recursive" />
          <img src="${treeUrl}" alt="Arboresence dossier et son contenu supprimés" />
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
