/*Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:
al posto dei multipli di 3 stampi "Fizz"
al posto dei multipli di 5 stampi "Buzz"
al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"*/

/*compile numbers 1 to 100*/
var counting_to = 100;
for (var i = 0; i < counting_to; i++) {

  var current_count = (i + 1);

  /*mark multiples of 3*/
  var remainder3 = current_count % 3;

  /*mark multiples of 5*/
  var remainder5 = current_count % 5;

  /* switch multiples of 3 with 'fizz'*/
  if ((remainder3 == 0) && (remainder5 != 0)) {
    console.log(current_count = 'fizz');
  }
  /* switch multiples of 5 with 'buzz'*/
  else if ((remainder3 != 0) && (remainder5 == 0)) {
    console.log(current_count = 'buzz');
}
  /* switch multiples of 3 and 5 with 'fizzbuzz'*/
  else if ((remainder3 == 0) && (remainder5 == 0)) {
    console.log(current_count = 'fizzbuzz');
  }
  else {
    console.log(current_count);
  }

}
