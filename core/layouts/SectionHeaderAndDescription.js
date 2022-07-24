import './SectionHeaderAndDescription.scss';

export default ({
  name: 'SectionHeaderAndDescription',
  props: ['title'],
  template: `
  <header class="section-header-and-description">
    <div class="title">{{ title }}</div>
    <div class="description">
      <slot></slot>
    </div>
  </header>
  `,
});
