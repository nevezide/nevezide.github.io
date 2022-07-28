// Comment découper un template en composant ?
// Soit le template suivant : 

new Vue({
  el: '#app',
  data: {
    title: 'Welcome !'
  },
  template: `
    <div class="header">
      <h1>{{ title }}</h1>
    </div>
  `,
});

// Découpage en composant

import Header from './components/Header';

new Vue({
  el: '#app',
  data: {
    title: 'Welcome !'
  },
  components: {
    Header,
  },
  template: '<Header />',
});

// Faire 8. props
