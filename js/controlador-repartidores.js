let solicitudes=[
  {
  _id: 5695,
  id_usuario: 959592,
  nombre: "Hector Varela",
  identidad: "0301-2001-00216",
  correo: "hectorvarela012@gmail.com",
  fecha: "8/12/2022",
  estado: "pendiente",
  pedidos: [
    
  ]
},
{
  _id: 5696,
  id_usuario: 959593,
  nombre: "Jeremy Figueroa",
  identidad: "0301-2001-00218",
  correo: "hectorvarela013@gmail.com",
  fecha: "8/11/2022",
  estado: "aprobado",
  pedidos: [
    1,
    2,
    3
  ]
}
];

let usuarios = {
  
  id:1,
  nombre:"Pedro",
  apellido:"Martinez",
  contraseña: "Pedro1225",
  email: "Pedromartin@gmail.com",
  img: "profile-pics/androide_16.jpg",
  ganancias: 155,
  estrellas: 5,
  comentarios: 20
  

};

let btnsol=$('#boton-solicitud');
let bodysol=$('#body-solicitud');
let tablasoli=$('#tabla-solicitudes');
let modalsoli=$('#modalsolicitudes');



function toastt(mensaje){
  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  const toast = new bootstrap.Toast(toastLiveExample)
  document.getElementById('mensaje-toast').innerHTML=mensaje; 
  toast.show()
}


let alerta=$("#alerta-login");



let alertas={
  contraseña: "Rellene el campo de su contraseña",
  incorrecto: "Datos incorrectos, contraseña o usuario incorrectos",
  correo: "Rellene el campo de su correo",
  vacio: "Porfavor rellene los campos"
}

/*function $(ID) {
  let elemento=document.getElementById(`${ID}`);
  return elemento;
}*/

function vaciarmodal(){
      btnsol.empty();
      bodysol.empty();
}

function aprobar() {
  $.each(solicitudes, function (i, item) {
    if (item._id==5696){
      item.estado="aprobado";
      alert(item.estado);
      modalsoli.modal('hide');
      vaciarmodal();
      tablasoli.empty();
      llenarsolicitudes();
      toastt(`Solicitud #${item._id} aprobada`);
    }
  });
  
}

function denegar() {
  $.each(solicitudes, function (i, item) {
    if (item._id==5696){
      item.estado="denegado";
      alert(item.estado);
      modalsoli.modal('hide');
      vaciarmodal();
      tablasoli.empty();
      llenarsolicitudes();
    }
  });
  
}

function llenarsolicitudaprobar(){
  alert("Hola");
  var botones=`
  <button type="button" class="btn btn-success" id="boton-accion-solicitud" onclick="aprobar()">Aprobar</button>
  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>`;
  btnsol.append(botones);
  bodysol.append("Esta seguro que desea aprobar esta solicitud?");
}

function llenarsolicitudes(){
  $.each(solicitudes, function (i, item) {
    if(item.estado=="aprobado"){
      var td=`
    <tr>
    <td>${item._id}</td>
    <td>${item.nombre}</td>
    <td>${item.identidad}</td>
    <td>${item.pedidos.length}</td>
    <td>${item.fecha}</td>
    <td><span class="badge bg-success hov" data-bs-toggle="modal" data-bs-target="#modalsolicitudes" onclick="llenarsolicitudaprobar()">Aprobar</span>
      <span class="badge bg-danger hov" data-bs-toggle="modal" data-bs-target="#modalsolicitudes" onclick="llenarsolicituddenegar()">Denegar</span></td>
    </tr>`
    tablasoli.append(td);

    }
    
  });
  
  $('#solicitudes').DataTable();
}

function alertaa(){
  alert(solicitudes[0].nombre);

}

function llenarsolicituddenegar(){
  alert("Hola");
  var botones=`
  <button type="button" class="btn btn-success" id="boton-accion-solicitud" onclick="denegar()">Denegar</button>
  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>`;
  btnsol.append(botones);
  bodysol.append("Esta seguro que desea denegar esta solicitud?");
}

function cerrarsesion() {
  location.replace('login.html');
  
}

function inciarsesion() {
  let email=$("email").value;
  let password=$("password").value;
  if (email=="" && password=="") {
    alerta.innerHTML=alertas.vacio;
    aparecer("alerta-login");
  } else if(email=="" && password!=""){
    alerta.innerHTML=alertas.correo;
    aparecer("alerta-login");
  } else if(email!="" && password==""){
    alerta.innerHTML=alertas.contraseña;
    aparecer("alerta-login");
  } else{
    alert("campos llenos");
    comprobarusuarios(email, password);
  }
}

//ocultar alerta al escribir
function ocultaralerta() {
  esconder("alerta-login");
  
}

//OCULTAR ELEMENTOS
function esconder(ID){
  let elemento=document.getElementById(`${ID}`);
  elemento.style.display = "none";
}

//APARECER ELEMENTOS
function aparecer(ID){
  let elemento=document.getElementById(`${ID}`);
  elemento.style.display = "block";
}

function comprobarusuarios(email, password){
  if (usuarios.email==email ) {

    alert("Sesion iniciada");
    location.replace('index.html');
    llenarcamposmenu();
    
  }
}