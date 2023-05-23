function isPrime(number){
    if(number===1){
     return false;
     }
     else if(number > 1){
      for(i = 2; i <= number; i++){
       if(number % i === 0){
        return false;
        }
       else{
        return true;
        }
      }
    }
    }
    let number=prompt('enter a positive number');
    if(isNaN(number)){
      console.log('not a number');
    }
    else if(number<0){
      console.log('The entered number is negative.');
    }
    else{
      if(isPrime(number)){
        console.log('this is a prime number');
      }
      else{
        console.log('this is a composite number');
      }
    }
    
    function isPalindrome(word){
      let myArray=word.split('');
      let reverseArray= new Array(myArray.length);
      let j=myArray.length-1;
     for(i=0;i<myArray.length;i++){
     reverseArray[i] = myArray[j];
     j--;
       }
      let reverseWord=reverseArray.join('');
      console.log(reverseArray.join('')); 
      return word === reverseWord;
    }
    let word = prompt('enter a word');
    if(isPalindrome(word)){
      console.log('this word is a palindrome' );
    }
    else{
      console.log('this word is not a palindrome');
    }
    
    function primeNotPrime(string){
        let myArray=string.split('');
        isPrime(myArray.length)
        return isPrime(myArray.length);
      }
      
      let string=prompt('enter a word');
      primeNotPrime(string);
      console.log(primeNotPrime(string));