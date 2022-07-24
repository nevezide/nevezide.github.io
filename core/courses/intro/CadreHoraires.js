import GrosChiffre from '../../layouts/GrosChiffre';
import './CadreHoraires.scss';

const noPhone = new URL('./images/no-phone.png', import.meta.url);

export default ({
  name: 'CadreHoraires',
  components: {
    GrosChiffre,
  },
  template: `
    <section class="cadre-horaires">
      <GrosChiffre
        chiffre="9h30 - 16h30"
        description="Horaires de cours"
        important="Les cours commençent à l'heure !"
      >
        <img class="icon" src="${noPhone}" alt="Pas de téléphone" />
      </GrosChiffre>
    </section>
  `,
});
