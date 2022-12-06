Vue.component("componente-continuarhistoria", {
 data: function () {
  return {

  };
 },

 props: ["historia"],
 template: `
    <button  class="btn btn-color my-2" type="submit" @click="historia.continuar3=true">Continuar</button>


              
          
      `,
});