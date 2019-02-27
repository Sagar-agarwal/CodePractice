// Event bubbling

/*
document.querySelector('.card-title').addEventListener('click', 
  function (){
    console.log('cart title');
});

document.querySelector('.card-content').addEventListener('click', 
  function (){
    console.log('card content');
  }
);

document.querySelector('.card').addEventListener('click', 
  function (){
    console.log('card');
  }
);

document.querySelector('.col').addEventListener('click', 
  function (){
    console.log('col');
  }
);

*/

//Event Delegation

// const deleteItem = document.querySelector('.delete-item');
// deleteItem.addEventListener('click', deleteItemFunc);

document.querySelector('body').addEventListener('click', deleteItemFunc)

function deleteItemFunc (e){
  

  if (e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
    console.log('delete item');
  }
}; 