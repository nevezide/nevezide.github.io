import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const cpUrl = new URL('./images/cp.png', import.meta.url);
const cpTreeUrl = new URL('./images/cp-tree.png', import.meta.url);
const cpFilesTreeUrl = new URL('./images/cp-files-tree.png', import.meta.url);

export default ({
  name: 'TerminalCopyFile',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="Copier un fichier">
      <TwoColumns>
        <template slot="col1">
          <div class="title">Soit l'arboresence suivante :</div>
          <img src="${cpTreeUrl}" alt="Arboresence" />
        </template>
        <template slot="col2">
          <div class="title">cp &lt;chemin source&gt; &lt;chemin destination&gt;</div>
          <img src="${cpUrl}" alt="Terminal cp" />
          <img src="${cpFilesTreeUrl}" alt="Arboresence fichiers copiés" />
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
