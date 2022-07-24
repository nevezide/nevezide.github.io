import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const cuisinierUrl = new URL('./images/cuisinier.png', import.meta.url);

export default ({
  name: 'POOConstructor',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="Le constructeur">
      <TwoColumns vertical-align="center">
        <template slot="col1">
          <img src="${cuisinierUrl}" alt="Cuisinier" />
        </template>
        <template slot="col2">
          <div class="title">
            Tout comme le cuisinier,<br />
            le constructeur créé les <b>objets</b><br />
            à partir d'ingrédients (appelés <b>paramètres</b>),<br />
            ainsi que des <b>propriétés de classe</b>.
          </div>
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
