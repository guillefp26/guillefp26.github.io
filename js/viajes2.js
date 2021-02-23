//GET
function searchOpiniones2(){
  fetch('json/opiniones2.json',
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
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
    createTable2(r);
  })
  //Errores de RED y respuestas KO
  .catch(e => console.log(e))
}


function createTable2(opiniones){

  var tabla = document.getElementById("table2");
  if(opiniones != null){
    var lista = opiniones.lista;
    for(var i = 0; i < lista.length; i++){
      var tr = document.createElement('tr');

      var th1 = document.createElement('th');
      var td2 = document.createElement('td');
      var td3 = document.createElement('td');

      var listaOpiniones = lista[i].opiniones;
      var text1 = document.createTextNode(lista[i].nombre);
      var text2 = document.createTextNode(listaOpiniones.hollywood);
      var text3 = document.createTextNode(listaOpiniones.berlin);


      th1.appendChild(text1);
      td2.appendChild(text2);
      td3.appendChild(text3);
      tr.appendChild(th1);
      tr.appendChild(td2);
      tr.appendChild(td3);

      tabla.appendChild(tr);
    }
  }
}
