
new Vue({
  el: '#app',
  data: {
    message: '',
    html: '<h1>Bonjour</h1>',
  },
  template: `<form>
    <div v-html="html"></div>
    <p>{{ message }}</p>
    <label for="message">Binding avec le modèle : v-model</label>
    <input id="message" type="text" v-model="message">
    <p v-text="message"></p>
  </form>`,
});

// Faire exercice perroquet

// Puis Faire 4.array-iteration

