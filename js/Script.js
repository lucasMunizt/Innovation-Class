const todasCategorias = document.getElementById("todas-categorias");
const departamentoDropdown = document.getElementById("departamento-dropdown");
const dropdownMenu = document.querySelector(".container-dropdown");
const categoria = document.querySelectorAll("#categoria-menu");
const primeiroCategoria = document.querySelectorAll(".primeiro-categoria");
const menuPrincipalDropdown = document.querySelector(".menu-principal-dropdown");
const dropdowMenu = document.querySelector(".dropdown-menu"); 
const textoDepartamento = document.querySelector(".h5-tabelas-categorias");
const tabelasCategorias = document.querySelectorAll(".tabelas-categorias");
const imgDropdown  =  document.querySelector(".img-dropdown");
const botaoBusca = document.getElementById("icone-busca");
const inputBusca = document.getElementById("input-busca");
const resultadoBusca = document.getElementById("resultado-busca");
document.addEventListener("DOMContentLoaded", function() {
  function mostrarDropdown() {
      dropdownMenu.style.display = "block";
      primeiroCategoria.forEach(item=>{
       item.style.color = "#005CFF"
      });
  }

  function esconderDropdown(e) {
    
        dropdownMenu.style.display = "none";
 }

  todasCategorias.addEventListener("mouseenter", mostrarDropdown);
  departamentoDropdown.addEventListener("mouseenter", mostrarDropdown);
  dropdownMenu.addEventListener("mouseenter", mostrarDropdown);

 todasCategorias.addEventListener("mouseleave", function(e) {
      if (!dropdownMenu.contains(e.relatedTarget)) {
       esconderDropdown();
      }
  });

  departamentoDropdown.addEventListener("mouseleave", function(e) {
      if (!dropdownMenu.contains(e.relatedTarget)) {
        esconderDropdown();
      }
    });

    todasCategorias.addEventListener("mouseenter",function(e){
      menuPrincipalDropdown.style.display = "block"; 
      dropdowMenu.style.gridTemplateColumns = "repeat(5,1fr)";
      imgDropdown.style.marginLeft = "0";
      dropdowMenu.style.columnGap  = '100px'
      textoDepartamento.style.display = "none";
      tabelasCategorias.forEach(index=>{
        index.style.marginTop = "0";
      });

    });
    
    departamentoDropdown.addEventListener("mouseenter", function(e){
      menuPrincipalDropdown.style.display = "none"; 
      dropdowMenu.style.gridTemplateColumns = "repeat(4,1fr)";
      textoDepartamento.style.display = "block";
      dropdowMenu.style.columnGap  = '100px'
      imgDropdown.style.marginLeft = "250px"
      tabelasCategorias.forEach(index=>{
        index.style.marginTop = "38px";
      });
    });


  dropdownMenu.addEventListener("mouseleave", esconderDropdown);
});

botaoBusca.addEventListener("click",()=>{
  const valorBusca = inputBusca.value.trim();

  if(valorBusca != ""){
    resultadoBusca.textContent = `Você buscou por: '${valorBusca}'`;
  }else{
    resultadoBusca.textContent = '';
  }
});

