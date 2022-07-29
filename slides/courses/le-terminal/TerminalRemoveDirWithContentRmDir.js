import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const rmDirUrl = new URL('./images/rmdir-not-empty.png', import.meta.url);
const cpTreeUrl = new URL('./images/cp-tree.png', import.meta.url);

export default ({
  name: 'TerminalRemoveDirWithContentRmDir',
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
          <div class="title">rmdir &lt;dossier&gt;</div>
          <img src="${rmDirUrl}" alt="Terminal rmdir dossier non vide" />
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
