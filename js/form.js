document.querySelector('#submit').addEventListener('click', e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUÍ:
  const teléfono = '573143946784';

  
  const correo = document.querySelector('#email').value;
  const departamento = document.querySelector('#departamento').value;
  const ciudad = document.querySelector('#ciudad').value;
  const nombre = document.querySelector('#cliente').value;
  const cedula = document.querySelector('#cedula').value;
  const fn = document.querySelector('#fn').value;
  const fe = document.querySelector('#fe').value;
  const ce = document.querySelector('#ce').value;
  const celularuno = document.querySelector('#celularuno').value;
  const celulardos = document.querySelector('#celulardos').value; 
  const municipio = document.querySelector('#municipio').value;
  const localidad = document.querySelector('#localidad').value;
  const barrio = document.querySelector('#barrio').value;
  const dirección = document.querySelector('#dirección').value;
  const código = document.querySelector('#código').value;
  const servicio = document.querySelector('#servicio').value;
  const observaciones = document.querySelector('#observaciones').value;
 
 
 
  const resp = document.querySelector("#respuesta");

  resp.classList.remove('fail');
  resp.classList.remove('send');

  const url = `https://api.whatsapp.com/send?phone=${teléfono}&text=
         👨‍⚖️ *ASESOR*%0A 
          Harlinton Montoya%0A
          📱 *CELULAR*%0A 
          3143946784%0A
          ****************************%0A
          👥 *NOMBRE*%0A
          ${nombre}%0A
          🪪 *CEDULA*%0A
          ${cedula}%0A
          🗓️ *FECHA DE NACIMIENTO*%0A
          ${fn}%0A
          🗓️ *FECHA DE EXPEDICION*%0A
          ${fe}%0A
          🌆 *CIUDAD DE EXPEDICION*%0A
          ${ce}%0A
          📱 *CELULAR 1*%0A
          ${celularuno}%0A
          📱 *CELULAR 2*%0A
          ${celulardos}%0A
          📧 *CORRREO*%0A
          ${correo}%0A
          🗾 *DEPARTAMENTO*%0A
          ${departamento}%0A
          🌆 *CIUDAD*%0A
          ${ciudad}%0A
          🚩 *MUNICIPIO*%0A
          ${municipio}%0A
          🏩 *BARRIO*%0A
          ${barrio}%0A
          🏚️ *DIRECCION*%0A
          ${dirección}%0A
          📌 *ESTRATO*%0A
          ${código}%0A
          📺 *SERVICIO*%0A
          ${servicio}%0A
          📓 *OBSERVACIONES*%0A
          ${observaciones}`;
          
          
         
          
         
  if (nombre === '' || cedula === '' || correo === '' ) {
    resp.classList.add('fail');
    resp.innerHTML = `FALTAN ALGUNOS DATOS, ${nombre} ${cedula}`;
    return false;
  }
 
  resp.classList.remove('fail');
  resp.classList.add('send');
  resp.innerHTML = `TUS DATOS SE ENVIARON CON ÉXITO, ${nombre}`;

  window.open(url);
  window.alert('TUS DATOS SE ENVIARON CON ÉXITO');


  
});
