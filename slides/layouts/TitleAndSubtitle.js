import './TitleAndSubtitle.scss';

export default ({
  name: 'TitleAndSubtitle',
  props: ['title', 'subTitle'],
  template: `
  <header class="title-and-subtitle">
    <div class="header-title">
      {{ title }}
    </div>
    <div class="header-subtitle">
      {{ subTitle }}
    </div>
  </header>
  `,
});
