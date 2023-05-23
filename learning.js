function myFunction(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
   // alert(fname + ' '+ lname);
   let message = document.getElementById('message');
   message.innerHTML = fname + ' ' + lname;
  
  }