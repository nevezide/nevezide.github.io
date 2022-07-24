import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const unzipUrl = new URL('./images/unzip.png', import.meta.url);
const cpTreeUrl = new URL('./images/cp-tree.png', import.meta.url);
const zipTreeUrl = new URL('./images/zip-tree.png', import.meta.url);

export default ({
  name: 'TerminalUnzip',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="Décompresser un dossier ou un fichier">
      <TwoColumns>
        <template slot="col1">
          <div class="title">Soit l'arboresence suivante :</div>
          <img src="${zipTreeUrl}" alt="Arboresence" />
        </template>
        <template slot="col2">
          <div class="title">unzip &lt;fichier.zip&gt;</div>
          <img src="${unzipUrl}" alt="Terminal unzip" />
          <img src="${cpTreeUrl}" alt="Arboresence fichier dézippé" />
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
