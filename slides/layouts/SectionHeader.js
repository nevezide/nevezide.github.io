import './SectionHeader.scss';

export default ({
  name: 'SectionHeader',
  props: ['title'],
  template: `
  <header class="section-header">
    <div class="section-header-title">{{ title }}</div>
  </header>
  `,
});
