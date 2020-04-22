/*Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:
al posto dei multipli di 3 stampi "Fizz"
al posto dei multipli di 5 stampi "Buzz"
al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"*/

var counting_to = 100;

/*compile numbers 1 to 100*/
for (var i = 0; i < counting_to; i++) {

  var current_count = (i + 1);
  var count_display = current_count;
  console.log(count_display);

  /*mark multiples of 3 and switch with 'fizz'*/
  var remainder3 = current_count % 3;
  console.log('resto: ' + remainder3);

  if (remainder3 == 0) {
    console.log(count_display = 'fizz');
  }

/*mark multiples of 5 and switch with 'fizz'*/
var remainder5 = current_count % 5;
console.log('resto: ' + remainder5);

if (remainder5 == 0) {
  console.log(count_display = 'buzz');
}

  if ((remainder3 == 0) && (remainder5 == 0)) {
    console.log(count_display = 'fizzbuzz');
  }

}


/*mark items that satisfy both condiitons as 'fizzbuzz'*/
