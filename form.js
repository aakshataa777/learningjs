function myFunction(){
    let fname = document.getElementById('fname').value;
    let allValidation = true;
    if(!fname){
       // alert('First Name should not be empty.');
        let First = document.getElementById('First');
        First.innerHTML = "First Name should not be empty.";
        allValidation=false;
    }
    else if(!isNaN(fname)){
        let First = document.getElementById('First');
        //alert("First name cannot be a number");
        First.innerHTML ="First name cannot be a number";
        allValidation=false;
    }
    else{
        document.getElementById("First").innerHTML=""
    }
    let lname = document.getElementById('lname').value;
    if(!lname){
        //alert('Last Name should not be empty.');
        let Second = document.getElementById('Second');
        Second.innerHTML = "Last Name should not be empty.";
        allValidation=false;
    }
    else if(!isNaN(lname)){
        //alert("Last name cannot be a number");
        let Second = document.getElementById('Second');
        Second.innerHTML = "Last name cannot be a number";
        allValidation=false;
    }
    else{
        let Second = document.getElementById('Second');
        Second.innerHTML = "";
    }
    let male = document.getElementById('male').checked;
    let female = document.getElementById('female').checked;
    let other = document.getElementById('other').checked;
    if(!(male||female||other)){
        //alert("Atleast one gender should be selected.");
        let Third = document.getElementById('Third');
        Third.innerHTML = "Atleast one gender should be selected.";
        allValidation=false;
    }
    let states = document.getElementById('states').value;
    if(states == 'State'){
        //alert("One state should be selected.");
        let Fourth = document.getElementById('Fourth');
        Fourth.innerHTML = "One state should be selected.";
        allValidation=false;
    }
    let gender = '';
    if(male){
        gender = 'Male';
    }
    if(female){
        gender = 'female';
    }
    if(other){
        gender = 'other';
    }

 //   alert("First name is "+ fname + "\nLast name is "+ lname + "\nGender is "+  gender + "\nState is "+ states);
    let message = document.getElementById('message');
    if(allValidation){
     message.innerHTML = "First name is "+ fname + "<br>Last name is "+ lname + "<br>Gender is "+  gender + "<br>State is "+ states
 }
}