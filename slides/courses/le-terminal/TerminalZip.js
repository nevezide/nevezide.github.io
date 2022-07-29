import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const zipUrl = new URL('./images/zip.png', import.meta.url);
const cpTreeUrl = new URL('./images/cp-tree.png', import.meta.url);
const zipTreeUrl = new URL('./images/zip-tree.png', import.meta.url);

export default ({
  name: 'TerminalZip',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="Compresser un dossier ou un fichier">
      <TwoColumns>
        <template slot="col1">
          <div class="title">Soit l'arboresence suivante :</div>
          <img src="${cpTreeUrl}" alt="Arboresence" />
        </template>
        <template slot="col2">
          <div class="title">zip &lt;fichier.zip&gt; -r &lt;dossier&gt;</div>
          <img src="${zipUrl}" alt="Terminal zip" />
          <img src="${zipTreeUrl}" alt="Arboresence fichier zip" />
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
