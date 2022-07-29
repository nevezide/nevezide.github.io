import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const vehiculeUrl = new URL('./images/vehicule.png', import.meta.url);

export default ({
  name: 'POOVehiculeAnswer',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="L'héritage">
      <TwoColumns vertical-align="center">
        <template slot="col1">
          <img src="${vehiculeUrl}" alt="Véhicule" />
        </template>
        <template slot="col2">
          <div class="title">
            Quelles sont les propriétés communes de ces véhicules ?
            <br /><br />
            <ul>
              <li>Roues</li>
              <li>Couleur</li>
              <li>Poids</li>
            </ul>
          </div>
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
