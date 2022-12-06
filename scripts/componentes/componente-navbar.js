Vue.component("componente-navbar", {
 data: function () {
  return {

  };
 },

 props: ["nombreweb"],
 template: `
    <div
    
      <nav class="navbar justify-content-center">
        <a class="navbar-brand ps-5" href="#"> {{nombreweb}} </a>
         
        <div>
          
      
        </div>
        
        
      
    </nav>

</div>
          
              
          
      `,
});