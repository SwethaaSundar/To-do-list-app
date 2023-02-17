function addItem(){
// adding item to the list
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

// validation
if(inputValue === ''){
alert("Input items into the list");
}else{
    $('#list').append(li);
}

//strike-out when docuble click
function strikeOut() {
    li.toggleClass("strike");
    
}
li.on('dblclick',strikeOut);


//removing the added item from the list
// function deleteItem(){
//     li.addClass('delete');
// }
let crossButton = $('<crossButton></crossButton>');
crossButton.append(document.createTextNode('Delete'));
li.append(crossButton);
crossButton.on('click',function deleteItem(){
    li.addClass('delete');
});

//strike-out when done button is click
let doneButton = $('<doneButton></doneButton');
doneButton.append(document.createTextNode('Done'));
li.append(doneButton);
li.on('click',strikeOut);

// sort item and clearing the input value after adding to the list
$('#list').sortable();
$("#input").val("");
}