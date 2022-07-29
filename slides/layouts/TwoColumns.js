import './TwoColumns.scss';

export default ({
  name: 'TwoColumns',
  props: {
    verticalAlign: {
      type: String,
      default: 'flex-start',
    },
  },
  data() {
    return {
      justifyContent: this.verticalAlign,
    };
  },
  template: `
    <div class="two-columns">
      <div class="col1" :style="{ 'justify-content': justifyContent }">
        <slot name="col1"></slot>
      </div>
      <div class="col2" :style="{ 'justify-content': justifyContent }">
        <slot name="col2"></slot>
      </div>
    </div>
  `,
});
