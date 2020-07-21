// Esercizio Griglia Quadrati JS

// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

// Area init

function init() {
  grillGame(); // Funzione principale
}

$(document).ready(init);

// Definizione funzioni
function grillGame() {
  var cells = $('.six-grill tbody tr > td'); // Click su una qualsiasi cella della table

  cells.click(grillRnd); // Richiamo, al click su cells, la funzione grillRnd
}

function grillRnd() {
  var target = $(this); // Salvo il target dell'evento click
  target.removeClass('yellow green'); // Pulisco eventuali classi pregresse

  $.ajax({ // Richiesta AJAX di numero random da 1 a 9
    url: 'https://flynn.boolean.careers/exercises/api/random/int',
    method: 'GET',
    success: function(data, state) {
      var success = data['success']; // Salvo l'esito positivo della richiesta in una var
      var value = data['response']; // Salvo il valore restituito dal server su una var

      if(success) {
        target.text(value); // Stampo il numero nella cella cliccata

        if(value < 6) {
          target.addClass('yellow'); // Aggiungo classe bg yellow
        } else if(value > 5) {
          target.addClass('green'); // Aggiungo classe bg green
        }
      } else {
        console.log('error'); // Mostro errore in console
      }

    },
    error: function(request, state, error) {
      console.log('request', request);
      console.log('state', state);
      console.log('error', error);
    }
  });
}
