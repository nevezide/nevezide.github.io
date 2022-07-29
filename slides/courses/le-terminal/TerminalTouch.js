import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const touchUrl = new URL('./images/touch.png', import.meta.url);
const treeUrl = new URL('./images/ls-tree.png', import.meta.url);
const touchTreeUrl = new URL('./images/touch-tree.png', import.meta.url);

export default ({
  name: 'TerminalTouch',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="Créer un fichier vide">
      <TwoColumns>
        <template slot="col1">
          <div class="title">Soit l'arboresence suivante :</div>
          <img src="${treeUrl}" alt="Arboresence" />
        </template>
        <template slot="col2">
          <div class="title">touch &lt;fichier&gt;</div>
          <img src="${touchUrl}" alt="Terminal touch" />
          <img src="${touchTreeUrl}" alt="Arboresence fichier créé" />
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
