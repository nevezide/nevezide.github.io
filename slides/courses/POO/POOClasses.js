import TitleAndContent from '../../layouts/TitleAndContent';
import TwoColumns from '../../layouts/TwoColumns';

const mouleUrl = new URL('./images/moule-a-gateau.png', import.meta.url);

export default ({
  name: 'POOClasses',
  components: {
    TitleAndContent,
    TwoColumns
  },
  template: `
    <TitleAndContent title="Les classes">
      <TwoColumns>
        <template slot="col1">
          <div class="title">Une <b>classe</b> est équivalente à un moule</div>
          <img src="${mouleUrl}" alt="Moule a gateau" />
        </template>
        <template slot="col2">
          <div class="title">Elle possède une liste de <b>propriétés</b></div>
          <br /><br /><br />
          <div class="title">
            Forme<br />
            Hauteur<br />
            Largeur<br />
          </div>
        </template>
      </TwoColumns>
    </TitleAndContent>
  `,
});
