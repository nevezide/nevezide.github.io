import './TitleAndContent.scss';

export default ({
  name: 'TitleAndContent',
  props: ['title', 'content'],
  template: `
  <section class="title-and-content">
    <header class="header">
      <div class="header-title">
        {{ title }}
      </div>
    </header>
    <main class="main-content">
      <slot></slot>
    </main>
  </section>
  `,
});
