import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const tabKeyUrl = new URL('./images/tab-key.png', import.meta.url);
const cdTabUrl = new URL('./images/cd-tab.png', import.meta.url);
const cdAutoCompleteUrl = new URL('./images/cd-auto-complete.png', import.meta.url);
const treeUrl = new URL('./images/ls-tree.png', import.meta.url);

export default ({
  name: 'TerminalAutoComplete',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="Auto Complétion">
      <TwoColumns>
        <template slot="col1">
          <div class="title">Soit l'arboresence suivante :</div>
          <img src="${treeUrl}" alt="Arboresence" />
        </template>
        <template slot="col2">
          <div class="title">Saisir les premières lettres d'un dossier ou d'un fichier, par exemple: "f"</div>
          <img src="${cdTabUrl}" alt="Terminal cd f" />
          <div class="title">
            Puis, presser la touche "tab": <img src="${tabKeyUrl}" style="display: inline; width: 3em; position: relative; top: 1em; height: auto;" /><br />
            Le terminal affiche les fichiers qui commencent par "f"
            ou s'il y en a qu'un, le sélectionne automatiquement.
          </div>
          <img src="${cdAutoCompleteUrl}" alt="Terminal cd fichier ou dossier trouvé" />
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
