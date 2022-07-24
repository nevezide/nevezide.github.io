import './TwoColumns.scss';

export default ({
  name: 'TwoColumns',
  template: `
    <div class="two-columns">
      <div class="col1">
        <slot name="col1"></slot>
      </div>
      <div class="col2">
        <slot name="col2"></slot>
      </div>
    </div>
  `,
});
