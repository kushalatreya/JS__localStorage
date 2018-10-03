let ul = document.getElementById('list');
let li = document.getElementsByClassName('mycheck');
let input = document.getElementById('input');

let addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

let removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem)

function addItem(){
    console.log('addItem button');
    let item = input.value;
    ul = document.getElementById('list');
    let textnode = document.createTextNode(item);

    if (item === ''){
        return false;
        //add p tag here
    } else{
        li = document.createElement('li');
        //creating checkbox
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');
        
        //creating label

        let label = document.createElement('label');
        label.setAttribute('for','item');
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        setTimeout(() => {
            li.className = 'visual';
        }, 2);
        input.value = '';
    }

};


//===forSelf===revise this part
function removeItem(){
    li = ul.children;
    for (let i = 0; i < li.length; i++){
        while(li[i] && li[i].children[0].checked ){
             ul.removeChild(li[i]);
        }
    }
};