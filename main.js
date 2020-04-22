/*Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:
al posto dei multipli di 3 stampi "Fizz"
al posto dei multipli di 5 stampi "Buzz"
al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"*/

/*compile numbers 1 to x*/
var counting_to = 100;

for (var i = 1; i <= counting_to; i++) {
  /*mark multiples of 3*/
  var remainder3 = i % 3;

  /*mark multiples of 5*/
  var remainder5 = i % 5;

  /* switch multiples of 3 with 'fizz'*/
  if (remainder3 == 0 && remainder5 != 0) {
    console.log('fizz');
  }

  /* switch multiples of 5 with 'buzz'*/
  else if (remainder3 != 0 && remainder5 == 0) {
    console.log('buzz');
  }

  /* switch multiples of both 3 and 5 with 'fizzbuzz'*/
  else if (remainder3 == 0 && remainder5 == 0) {
    console.log('fizzbuzz');
  }

  /*everything else gets numbers in their normal order*/
  else {
    console.log(i);
  }
}
