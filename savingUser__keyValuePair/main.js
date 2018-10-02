/* localStorage.setItem('Name', 'kushal');
localStorage.setItem('age',25)
let name = localStorage.getItem('Name');
console.log('namehere:', name);
console.log(localStorage.length); */
//localStorage.removeItem('Name');


let button = document.getElementById('button');
let displayData = document.getElementById('display_data');

  
document.getElementById('button').addEventListener('click', save);
    


//saving in the form of ' 'key' 'value' ' pair 

function save(){
    let key = document.getElementById('key').value;
    let value = document.getElementById('value').value;
    localStorage.setItem(key,value);
    display();
    key.value = "";
    value.value = "";

}

//creating the display function which will display the key value we have entered in the box.

function display(){
    displayData.innerHTML = '';
    for ( let i = 0; i < localStorage.length; i++ ){
      let  a = localStorage.key(i);
      let  b = localStorage.getItem(a);
      console.log(b)
    displayData.innerHTML += a + ' ' + b + '<br>'
    }
}

function clear(){
    localStorage.clear();
    location.reload();
}