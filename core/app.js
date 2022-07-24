import './style/normalize.css';
import './style/fonts.css';
import './style/variables.css';

import OrdinateurView from './views/OrdinateurView';

new Vue({
  el: '#app',
  components: {
    OrdinateurView,
  },
  template: '<OrdinateurView />',
});
