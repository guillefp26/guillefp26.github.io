//GET
function searchOpiniones(){
  fetch('json/opiniones.json',
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  //Suscribimos a la promesa Response
  .then(res => {
    if(res.ok){
      //Si la respuesta se resolvió bien, procedemos a resolver la promesa Body
      return res.json()
    }else{
      throw res;
    }
  })
  //Suscribimos a la promesa Body
  .then(r => {
    //Una vez resuelta la última promesa, asignamos el valor de la respuesta a una variable JSON
    createTable(r);
  })
  //Errores de RED y respuestas KO
  .catch(e => console.log(e))
}


function createTable(opiniones){
  var tabla = document.getElementById("table1");
  if(opiniones != null){
    var lista = opiniones.lista;
    for(var i = 0; i < lista.length; i++){
      var tr = document.createElement('tr');

      var th1 = document.createElement('th');
      var td2 = document.createElement('td');
      var td3 = document.createElement('td');
      var td4 = document.createElement('td');

      var listaOpiniones = lista[i].opiniones;
      var text1 = document.createTextNode(lista[i].nombre);
      var text2 = document.createTextNode(listaOpiniones.maldivas);
      var text3 = document.createTextNode(listaOpiniones.osaka);
      var text4 = document.createTextNode(listaOpiniones.noruega);


      th1.appendChild(text1);
      td2.appendChild(text2);
      td3.appendChild(text3);
      td4.appendChild(text4);
      tr.appendChild(th1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);

      tabla.appendChild(tr);
    }
  }

}
