import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const rmdirUrl = new URL('./images/rmdir.png', import.meta.url);
const rmdirResultUrl = new URL('./images/ls-tree.png', import.meta.url);
const treeUrl = new URL('./images/mkdir-result.png', import.meta.url);

export default ({
  name: 'TerminalRemoveDir',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="Supprimer un dossier vide">
      <TwoColumns>
        <template slot="col1">
          <div class="title">Soit l'arboresence suivante :</div>
          <img src="${treeUrl}" alt="Arboresence" />
        </template>
        <template slot="col2">
          <div class="title">rmdir &lt;dossier&gt;</div>
          <img src="${rmdirUrl}" alt="Terminal rmdir" />
          <img src="${rmdirResultUrl}" alt="Arboresence dossier supprimé" />
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
