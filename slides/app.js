import './style/normalize.css';
import './style/fonts.css';
import './style/variables.css';

import POOView from './views/POOView';

new Vue({
  el: '#app',
  components: {
    POOView,
  },
  template: '<POOView />',
});
