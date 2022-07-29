import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const mvUrl = new URL('./images/mv.png', import.meta.url);
const treeUrl = new URL('./images/cp-tree.png', import.meta.url);
const mvTreeUrl = new URL('./images/mv-tree.png', import.meta.url);

export default ({
  name: 'TerminalMoveFile',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="Déplacer un fichier">
      <TwoColumns>
        <template slot="col1">
          <div class="title">Soit l'arboresence suivante :</div>
          <img src="${treeUrl}" alt="Arboresence" />
        </template>
        <template slot="col2">
          <div class="title">mv &lt;chemin source&gt; &lt;chemin destination&gt;</div>
          <img src="${mvUrl}" alt="Terminal mv" />
          <img src="${mvTreeUrl}" alt="Arboresence fichier déplacé" />
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
