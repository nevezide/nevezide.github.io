/**************************************************************/
/*                         Consignes                          */
/**************************************************************/
/*

L'objectif de cet exercice est de faire en sorte que le perroquet
répète ce que l'utilisateur lui dit.

*/
/**************************************************************/
/*                    !!! DO NOT EDIT !!!                     */
/**************************************************************/

// !!! DO NOT EDIT !!!

let articles = [{
  name: 'Pantalon bleu',
  price: '100',
  quantity: 12
},{
  name: 'Pull over rouge',
  price: '75',
  quantity: 120
},{
  name: 'Chemise à carreaux',
  price: '35',
  quantity: 15
}];

/**************************************************************/
/*                          La vue                            */
/**************************************************************/

new Vue({
  el: '#app',
  data: {
    message: '',
  }, 
  template: `
    <div>
      <form>
        <label for="message">Message à répéter</label>
        <input type="text" id="message" v-model="message">
      </form>
      <br />
      <div id="perroquet">
        <span>Le perroquet dit:</span>
        <p>{{ message }}</p>
      </div>
    </div>
  `,
});
