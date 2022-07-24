import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const gateauUrl = new URL('./images/gateau.png', import.meta.url);

export default ({
  name: 'POOObjets',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="Les objets">
      <TwoColumns vertical-align="center">
        <template slot="col1">
          <img src="${gateauUrl}" alt="Gâteaux" />
        </template>
        <template slot="col2">
          <div class="title">
            Les <b>objets</b> sont équivalents aux gâteaux.<br /><br />
            Ils ont des <b>propriétés</b> identiques, regroupés dans la classe.<br /><br />
            Chaque objet est unique et indépendant des autres.
          </div>
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
