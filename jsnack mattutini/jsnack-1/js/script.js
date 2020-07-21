// Es.1 Ajax call with random array - 21 Luglio 2020 JS

// Sfruttando la seguente API, ciclare sull'array ricevuto e collocare i valori pari nel div verde, e quelli dispari nel div rosso:
// https://flynn.boolean.careers/exercises/api/array/integers?min=n&max=n&items=n (edited)
// Il numero di elementi e' pari a 10, valore min = 50, valore max = 100

// Area init

function init() {
  btnListener();
}

$(document).ready(init);

// Definizione funzioni
function btnListener() {
  $('#btn').click(arraySplit);
}

function arraySplit() {
  $.ajax({

    url: 'https://flynn.boolean.careers/exercises/api/array/integers?min=50&max=100&items=10',
    method: 'GET',
    success: function(data, state) {

      var evenTgt = $('#even');
      var oddTgt = $('#odd');

      evenTgt.text('');
      oddTgt.text('');

      var success = data['success'];
      var arrayItems = data['response'];

      if(success) {
        for (var i = 0; i < arrayItems.length; i++) {
          var arrayItem = arrayItems[i];
          var isNumEven = (arrayItem % 2 === 0);

          if(isNumEven) {
            evenTgt.append(arrayItem + ' ');
          } else {
            oddTgt.append(arrayItem + ' ');
          }
        }
      } else {
        console.log('error');
      }
    },
    error: function(request, state, error) {
      console.log('request', request);
      console.log('state', state);
      console.log('error', error);

    }
  });
}
