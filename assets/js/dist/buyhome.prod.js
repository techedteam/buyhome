"use strict";var grid=new Muuri(".grid",{layout:{rounding:!1}});window.addEventListener("load",function(){grid.refreshItems().layout(),document.getElementById("grid").classList.add("imagenes-cargadas"),grid.filter("[data-ofertas]");var r=document.querySelectorAll("#categorias a");r.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),r.forEach(function(e){return e.classList.remove("activo")}),e.target.classList.add("activo");var t=e.target.innerHTML.toLowerCase();"ofertas"===t?grid.filter("[data-ofertas]"):"todos"===t?grid.filter("[data-categoria]"):grid.filter('[data-categoria="'.concat(t,'"]'))})}),document.querySelector("#barra-busqueda").addEventListener("input",function(e){var t=e.target.value;grid.filter(function(e){return e.getElement().dataset.etiquetas.includes(t)})});var s=document.getElementById("overlay");document.querySelectorAll(".grid .item img").forEach(function(d){d.addEventListener("click",function(){var e=d.getAttribute("src"),t=d.parentNode.parentNode.dataset.nombre,r=d.parentNode.parentNode.dataset.precio,a=d.parentNode.parentNode.dataset.colores,o=d.parentNode.parentNode.dataset.descripcion1,n=d.parentNode.parentNode.dataset.descripcion2,c=d.parentNode.parentNode.dataset.descripcion3,i=d.parentNode.parentNode.dataset.descripcion4;s.classList.add("activo"),document.querySelector("#overlay img").src=e,document.querySelector("#overlay .nombre").innerHTML=t,document.querySelector("#overlay .precio").innerHTML=r,document.querySelector("#overlay .colores").innerHTML=a,document.querySelector("#overlay .descripcion1").innerHTML=o,document.querySelector("#overlay .descripcion2").innerHTML=n,document.querySelector("#overlay .descripcion3").innerHTML=c,document.querySelector("#overlay .descripcion4").innerHTML=i})}),document.querySelector("#btn-cerrar-popup").addEventListener("click",function(){s.classList.remove("activo")}),s.addEventListener("click",function(e){"overlay"===e.target.id&&s.classList.remove("activo")})});