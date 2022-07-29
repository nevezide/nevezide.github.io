import './GrosChiffre.scss';

export default ({
  name: 'GrosChiffre',
  props: ['chiffre', 'description', 'important'],
  template: `
  <section class="gros-chiffre">
    <header class="header">
      <div class="header-chiffre">
        <span>{{ chiffre }}</span>
      </div>
    </header>
    <main class="main-content">
      <span>{{ description }}</span>
      <br /><br />
      <span class="important" v-if="important">{{ important }}</span>
      <slot></slot>
    </main>
  </section>
  `,
});
