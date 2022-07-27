import './Header.scss';

export default ({
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Titre de la page'
    },
  },
  template: `
    <div class="header">
      <h1>{{ title }}</h1>
    </div>
  `,
});
