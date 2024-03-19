Titulo = document.getElementById("Titulo");
Autor = document.getElementById("Autor");
Editorial = document.getElementById("Editorial");
Categoria = document.getElementById("Categoria");
fecha = document.getElementById("fecha");
btn = document.getElementById("btnEnviar");
listaHtml = document.getElementById("lista");
let ListaLibros = [];

btn.addEventListener("click", () => {
  ListaLibros.push({
    Titulo: Titulo.value,
    Autor: Autor.value,
    Editorial: Editorial.value,
    Categoria: Categoria.value,
    fecha: fecha.value,
    id: Date.now()
  });
  ActualizarLista();
});

let ActualizarLista = () => {
  listaHtml.innerHTML = "";
  for (let i = 0; i < ListaLibros.length; i++) {
    let libro = ListaLibros[i];
    let display = `<ul><li>${i + 1}</li><li>${libro.Titulo}</li><li>${
      libro.Autor
    }</li><li>${libro.Editorial}</li><li>${libro.Categoria}</li><li>${
      libro.fecha
    }</li><li><button data-id="${libro.id}" type="submit" class="btnBorrar">Borrar</button></li></ul>`;
    listaHtml.innerHTML += display;
  }
 // Ahora que los botones de borrado están en el DOM, agregamos los event listeners
 let botonesBorrar = document.querySelectorAll(".btnBorrar");
 botonesBorrar.forEach(btn => {
   btn.addEventListener("click", () => {
     const idBorrar = parseInt(btn.getAttribute("data-id"));
     BorrarLista(idBorrar);
     ActualizarLista();
   });
 });
};

let BorrarLista = (id) => {
   ListaLibros = ListaLibros.filter(libro => libro.id !== id)
};
