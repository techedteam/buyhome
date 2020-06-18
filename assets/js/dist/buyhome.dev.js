"use strict";

var grid = new Muuri('.grid', {
  layout: {
    rounding: false
  }
});
window.addEventListener('load', function () {
  grid.refreshItems().layout();
  document.getElementById('grid').classList.add('imagenes-cargadas');
  grid.filter('[data-ofertas]');
  var enlaces = document.querySelectorAll('#categorias a');
  enlaces.forEach(function (elemento) {
    elemento.addEventListener('click', function (evento) {
      evento.preventDefault();
      enlaces.forEach(function (enlace) {
        return enlace.classList.remove('activo');
      });
      evento.target.classList.add('activo');
      var categoria = evento.target.innerHTML.toLowerCase();
      categoria === 'ofertas' ? grid.filter('[data-ofertas]') : categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter("[data-categoria=\"".concat(categoria, "\"]"));
    });
  }); // Agregamos el listener para la barra de busqueda

  document.querySelector('#barra-busqueda').addEventListener('input', function (evento) {
    var busqueda = evento.target.value;
    grid.filter(function (item) {
      return item.getElement().dataset.etiquetas.includes(busqueda);
    });
  }); // Agregamos listener para las imagenes

  var overlay = document.getElementById('overlay');
  document.querySelectorAll('.grid .item img').forEach(function (elemento) {
    elemento.addEventListener('click', function () {
      var ruta = elemento.getAttribute('src');
      var nombre = elemento.parentNode.parentNode.dataset.nombre;
      var precio = elemento.parentNode.parentNode.dataset.precio;
      var colores = elemento.parentNode.parentNode.dataset.colores;
      var descripcion1 = elemento.parentNode.parentNode.dataset.descripcion1;
      var descripcion2 = elemento.parentNode.parentNode.dataset.descripcion2;
      var descripcion3 = elemento.parentNode.parentNode.dataset.descripcion3;
      var descripcion4 = elemento.parentNode.parentNode.dataset.descripcion4;
      overlay.classList.add('activo');
      document.querySelector('#overlay img').src = ruta;
      document.querySelector('#overlay .nombre').innerHTML = nombre;
      document.querySelector('#overlay .precio').innerHTML = precio;
      document.querySelector('#overlay .colores').innerHTML = colores;
      document.querySelector('#overlay .descripcion1').innerHTML = descripcion1;
      document.querySelector('#overlay .descripcion2').innerHTML = descripcion2;
      document.querySelector('#overlay .descripcion3').innerHTML = descripcion3;
      document.querySelector('#overlay .descripcion4').innerHTML = descripcion4;
    });
  }); // EvenListener del boton de cerrar

  document.querySelector('#btn-cerrar-popup').addEventListener('click', function () {
    overlay.classList.remove('activo');
  }); // EvenListener del overlay

  overlay.addEventListener('click', function (evento) {
    evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
  });
});