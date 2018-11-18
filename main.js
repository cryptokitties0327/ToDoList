var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')
//form submit event
form.addEventListener('submit', addItem);

//Delete Event
itemList.addEventListener('click', removeItem)

//Filter Event
filter.addEventListener('keyup', filterItems)

// Add Item 
function addItem(e){
  e.preventDefault();
  //get input value
  var newItem = document.getElementById('item').value;
  //create new li element
  var li = document.createElement('li')
  //create class name
  li.className = 'list-group-item';
  console.log(li);
  //add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //create the delete button element
  var deleteBtn = document.createElement('button');

  //Add Class to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

  //Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  //Append li to list
  itemList.appendChild(li);
}

//remove item

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
      var li = e.target.parentElement;//line 45
      itemList.removeChild(li);
    }

  }
}


//filterItems
function filterItems(e){
  //convert text to lowercase
  var text = e.target.value.toLowerCase()
  console.log(text)
  //get List
  var items = itemList.getElementsByTagName('li');
  //Convert to array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    console.log(itemName);
    if (itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
    } else{
        item.style.display = 'none';
    }
  })
}