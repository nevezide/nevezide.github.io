import OrdinateurHeader from "../courses/ordinateur/OrdinateurHeader";
import End from "../courses/End";

export default ({
  name: 'OrdinateurView',
  components: {
    OrdinateurHeader,
    End,
  },
  template: `
    <div class="intro-view">
      <OrdinateurHeader />
      <End />
    </div>
  `,
});
