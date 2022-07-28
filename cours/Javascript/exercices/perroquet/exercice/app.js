/**************************************************************/
/*                         Consignes                          */
/**************************************************************/
/*

L'objectif de cet exercice est de faire en sorte que le perroquet
répète ce que l'utilisateur lui dit.

*/
/**************************************************************/
/*                          La vue                            */
/**************************************************************/

new Vue({
  el: '#app',
  data: {}, 
  template: `
    <div>
      <form>
        <label for="message">Message à répéter</label>
        <input type="text" id="message">
      </form>
      <br />
      <div id="perroquet">
        <span>Le perroquet dit:</span>
        <p></p>
      </div>
    </div>
  `,
});
