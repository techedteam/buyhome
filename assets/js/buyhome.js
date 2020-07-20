const grid = new Muuri('.grid', {
    layout: {
       rounding: false,
    },
  });

  window.addEventListener('load', () => {
      grid.refreshItems().layout();
      document.getElementById('grid').classList.add('imagenes-cargadas');

      grid.filter('[data-ofertas]');

      const enlaces=document.querySelectorAll('#categorias a');
      enlaces.forEach((elemento) => {
          elemento.addEventListener('click', (evento) => {
              evento.preventDefault();
              enlaces.forEach((enlace) => enlace.classList.remove('activo'));
              evento.target.classList.add('activo');

              const categoria=evento.target.innerHTML.toLowerCase();
              categoria === 'ofertas' ? grid.filter('[data-ofertas]') : grid.filter(`[data-categoria="${categoria}"]`);
          });
      });


      // Agregamos el listener para la barra de busqueda

      document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
          const busqueda = evento.target.value.toLowerCase();
          grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
      });

      // Agregamos listener para las imagenes

      const overlay = document.getElementById('overlay');
      document.querySelectorAll('.grid .item img').forEach((elemento) => {
          elemento.addEventListener('click', () =>{
              const ruta = elemento.getAttribute('src');
              const nombre = elemento.parentNode.parentNode.dataset.nombre;
              const precio = elemento.parentNode.parentNode.dataset.precio;
              const colores = elemento.parentNode.parentNode.dataset.colores;
              const descripcion1 = elemento.parentNode.parentNode.dataset.descripcion1;
              const descripcion2 = elemento.parentNode.parentNode.dataset.descripcion2;
              const descripcion3 = elemento.parentNode.parentNode.dataset.descripcion3;
              const descripcion4 = elemento.parentNode.parentNode.dataset.descripcion4;

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
      });

      // EvenListener del boton de cerrar

      document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
          overlay.classList.remove('activo');
      });

      // EvenListener del overlay

      overlay.addEventListener('click', (evento) => {
        evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
      });
  });
 
