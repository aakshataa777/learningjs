function search(){
    let searchAkshata = document.getElementById('searchAkshata').value;
//alert(searchAkshata);
let googleURL = "https://www.google.com/search?q=";
let redirect=googleURL+searchAkshata;
window.location.replace(redirect);
}
