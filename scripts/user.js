Nombre = document.getElementById("Nombre");
Email = document.getElementById("email");
fecha = document.getElementById("fecha");
btn = document.getElementById("btnEnviar");
listaHtml = document.getElementById("lista");
let ListaUsarios = [];

btn.addEventListener("click", () => {
  ListaUsarios.push({
    nombre: Nombre.value,
    email: Email.value,
    fecha: fecha.value,
    id: Date.now(),
  });
  ActualizarLista();
});

let ActualizarLista = () => {
  listaHtml.innerHTML = "";
  for (let i = 0; i < ListaUsarios.length; i++) {
    let usuario = ListaUsarios[i];
    let display = `<ul><li>${i + 1}</li><li>${usuario.nombre}</li><li>${
      usuario.email
    }</li><li>${usuario.fecha}</li><li><button data-id="${
      usuario.id
    }" type="submit" class="btnBorrar">Borrar</button></li></ul>`;
    listaHtml.innerHTML += display;
  }
  // Ahora que los botones de borrado están en el DOM, agregamos los event listeners
  let botonesBorrar = document.querySelectorAll(".btnBorrar");
  botonesBorrar.forEach((btn) => {
    btn.addEventListener("click", () => {
      const idBorrar = parseInt(btn.getAttribute("data-id"));
      if(confirm("quieres borrarlo?")){
            BorrarLista(idBorrar);
            ActualizarLista();
      }
    });
  });
};

let BorrarLista = (id) => {
  ListaUsarios = ListaUsarios.filter((usuario) => usuario.id !== id);
};
