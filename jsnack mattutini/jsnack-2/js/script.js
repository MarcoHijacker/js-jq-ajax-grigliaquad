// Es.2 Random N words sentence - 21 Luglio 2020 JS

// Creare e stampare a schermo una frase contenente N parole (N in base a quante ne vuole generare l'utente attraverso un prompt),
// grazie all'utilizzo dell'API e dell'URL random/word.

// Area init

function init() {
  btnListener();
}

$(document).ready(init);

// Definizione funzioni
function btnListener() {
  $('#btn').click(wordsGenerator);
}

function wordsGenerator() {
  var target = $('#sentence');
  target.html('');

  var wordsNum = parseInt(prompt('Quante parole nella frase desiderata?'));

  for (var i = 0; i < wordsNum; i++) {
    $.ajax({
      url: 'https://flynn.boolean.careers/exercises/api/random/word',
      method: 'GET',
      success: function(data, state) {
        var success = data['success'];
        var word = data['response'];

        if (success) {
          target.append(word + ' ');
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
}
