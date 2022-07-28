// Une simple méthode

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue !',
  },
  methods: {
    showMessage() {
      alert(this.message);
    }
  },
  template: `
    <div>
      <button v-on:click="showMessage">Show message</button>
    </div>
  `,
});

// Une méthode avc paramètres

new Vue({
  el: '#app',
  methods: {
    showMessage(message) {
      alert(message);
    }
  },
  template: `
    <div>
      <button v-on:click="showMessage('Plop !')">Show message</button>
    </div>
  `,
});

// Dans le contexte d'une itération

new Vue({
  el: '#app',
  data: {
    prices: [10, 20, 30],
  },
  methods: {
    remove(price) {
      this.prices.splice(this.prices.indexOf(price), 1);
    }
  },
  template: `
    <div>
      <table>
        <tr v-for="price in prices" v-on:click="remove(price)">
          <td>{{ price }}</td>
        </tr>
      </table>
    </div>
  `,
});


// Faire exercices "Afficher Articles" et "Gestion d'utilisateurs"

// C'est tout pour aujourd'hui
