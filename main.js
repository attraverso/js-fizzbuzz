/*Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:
al posto dei multipli di 3 stampi "Fizz"
al posto dei multipli di 5 stampi "Buzz"
al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"*/

var counting_to = 100;

/*compile numbers 1 to 100*/
for (var i = 0; i < counting_to; i++) {

  var current_count = (i + 1);
  console.log('current count: ', + current_count);

  /*mark multiples of 3*/
  var remainder3 = current_count % 3;
  console.log('resto 3: ' + remainder3);

  /*mark multiples of 5 and switch with 'fizz'*/
  var remainder5 = current_count % 5;
  console.log('resto 5: ' + remainder5);

  /*define second set of numbers you can tamper with w/o the calculations being affected */
  var count_display = current_count.toString();
  console.log('count display: ', + count_display);

  /* switch multiples of 3 with 'fizz'*/
  if (remainder3 == 0) {
    console.log(count_display = 'fizz');
  }

  /* switch multiples of 5 with 'buzz'*/
  if (remainder5 == 0) {
    console.log(count_display = 'buzz');
}

  /* switch multiples of 3 and 5 with 'fizzbuzz'*/
  if ((remainder3 == 0) && (remainder5 == 0)) {
    console.log(count_display = 'fizzbuzz');
  }

  console.log('count display2: ', + count_display);

}


/*mark items that satisfy both condiitons as 'fizzbuzz'*/
