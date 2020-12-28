var form = document.getElementById('addForm');
var itemLists = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);

itemLists.addEventListener('click', removeItem);

//--Filtet Event --
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();

    // --- get input value ---
    var newItem = document.getElementById('item').value;

    // -- create a new li element --

    var li = document.createElement('li');

    // -- Add a class --
    li.className ='list-group-item';
    //console.log(li);
    
    // --Add text Node with input value --
    li.appendChild(document.createTextNode(newItem));
    //console.log(li);

    // -- Add item to list --
    itemLists.appendChild(li);

    // -- Create button --
    var del = document.createElement('button');

    // -- Add class name to button --
    del.className ='btn btn-danger btn-sm float-right delete';

    // -- Add text node --
    del.appendChild(document.createTextNode('X'));

    // -- Add button to list --
    li.appendChild(del);

}
function removeItem(e)
{
    if (e.target.classList.contains('delete'))
    {
        if (confirm('Are you sure?'))
        {
            var li = e.target.parentElement;
            itemLists.removeChild(li);
        }
    }

}
function filterItems(e)
{
    // -- Convert to lower case
    var text = e.target.value.toLowerCase();
    //console.log(text);

    // -- get item list --
    var items = itemLists.getElementsByTagName('li');
    //console.log(items);
    // -- Convert to Array --
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        //console.log(itemName);

        if (itemName.toLowerCase().indexOf(text) != -1){ // If not equal to -1 then it is a match
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}