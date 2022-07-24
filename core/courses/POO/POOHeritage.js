import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const heritageUrl = new URL('./images/heritage.png', import.meta.url);

export default ({
  name: 'POOHeritage',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="L'héritage">
      <TwoColumns vertical-align="center">
        <template slot="col1">
          <img src="${heritageUrl}" alt="Véhicule" />
        </template>
        <template slot="col2">
          <div class="title" style="font-size: 0.6em;">
            <ul>
              <li>La classe Véhicule contient les propriétés communes de tous les véhicules.</li>
              <li>Chaque type de véhicule hérite des propriétés et des méthodes spécifiées dans cette classe.</li>
              <li>Chaque type de véhicule peut avoir ses propres propriétés et méthodes.</li>
            </ul>
            Exemple :
            <br />
            <ul>
              <li>Un véhicule de type Voiture, avec comme propriété propre "habitacle"</li>
              <li>Un véhicule de type Moto, avec comme propriété propre "kick"</li>
              <li>Un véhicule de type Vélo, avec comme propriété propre "pédalier"</li>
            </ul>
          </div>
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
