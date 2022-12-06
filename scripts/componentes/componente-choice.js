Vue.component("componente-choice", {
 data: function () {
  return {

  };
 },

 props: ["historia"],
 template: `
    <div class="mb-4">
        <div class="form-group mx-auto d-flex gap-2 botones-choice">
        <input type="radio" v-model="historia.condicional" :value="true" id="vamos">
            <label class="radio-inline bg-1 clickeable text-center" for="vamos">
                 ¡Vamos! 
            </label>

            <input  type="radio" v-model="historia.condicional" :value="false" id="no">
            <label class="radio-inline bg-2 b2 clickeable text-center" for="no">
                 No
            </label>
            
            
        </div>

        <div v-if="historia.condicional == false" class="mt-4 sad">

            <p> Que lastima! Podés regresar para continuar la historia cuando quieras </p>

        </div>
    </div>     
              
          
      `,
});