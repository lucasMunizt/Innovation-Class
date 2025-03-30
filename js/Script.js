 /*const AbrirMenu = () =>{
  const dropdown = document.querySelector('.container-dropdown');
  let nomeCor = document.getElementById('todas-categorias');

nomeCor.style.color = nomeCor.style.color === " rgb(0, 92, 255)" ? "rgb(0, 0, 0)": "rgb(0, 92, 255)";

  dropdown.classList.toggle("active") 
}

 const MudarCorMenu = () =>{
    
 }*/


 document.addEventListener("DOMContentLoaded", function() {
  const todasCategorias = document.getElementById("todas-categorias");
  const departamentoDropdown = document.getElementById("departamento-dropdown");
  const dropdownMenu = document.querySelector(".container-dropdown");
  const primeiroCategoria = document.querySelectorAll(".primeiro-categoria");
  const menuPrincipalDropdown = document.querySelector(".menu-principal-dropdown");
  const dropdowMenu = document.querySelector(".dropdown-menu"); 
  function mostrarDropdown() {
      dropdownMenu.style.display = "block";
      primeiroCategoria.forEach(item=>{
       item.style.color = "#005CFF"
      });
  }

  function esconderDropdown() {
      dropdownMenu.style.display = "none";
  }

  todasCategorias.addEventListener("mouseenter", mostrarDropdown);
  departamentoDropdown.addEventListener("mouseenter", mostrarDropdown);
  dropdownMenu.addEventListener("mouseenter", mostrarDropdown);

  todasCategorias.addEventListener("mouseleave", function(e) {
      if (!dropdownMenu.contains(e.relatedTarget)) {
          esconderDropdown();
      }
      menuPrincipalDropdown.style.display = "none"; 
      
  });

  departamentoDropdown.addEventListener("mouseleave", function(e) {
      if (!dropdownMenu.contains(e.relatedTarget)) {
        esconderDropdown();
      }
      
      menuPrincipalDropdown.style.display = "block"; 
     // dropdowMenu.style.gap = "160px"
    });


  dropdownMenu.addEventListener("mouseleave", esconderDropdown);
});

