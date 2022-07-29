import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const vehiculeUrl = new URL('./images/vehicule.png', import.meta.url);

export default ({
  name: 'POOVehiculeQuestion',
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
          </div>
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
