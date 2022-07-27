
new Vue({
  el: '#app',
  data: {
    scores: [12, 45, 23, 1, 8]
  },
  template: `
    <div>
      Scores :
      <ul>
        <li v-for="score of scores">{{ score }}</li>
      </ul>
    </div>
  `,
});
