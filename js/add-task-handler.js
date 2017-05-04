var addButton = document.getElementsByClassName('button-add')[0];
var tasks = document.getElementsByClassName('task-list')[0];
var input = document.getElementsByClassName('task-input')[0];
var unfinished = document.getElementsByClassName('unfinished')[0];
var finished = document.getElementsByClassName('finished')[0];
var liNum = 0;
var liId = function(){ return 'li-'+liNum};


function changeTaskNumber(amount){
  unfinished.textContent=parseInt(unfinished.textContent, 10) +amount;
}

function changeFinishedNumber(amount){
  finished.textContent=parseInt(finished.textContent, 10) +amount;
}

function removeChild(lid){
  var child = document.getElementById(lid);
  child.parentNode.removeChild(child);
}


function createTask(){
  if (input.value.trim()===''){input.value=''; return;}
  var li = document.createElement('li');
  var divRow = document.createElement('div');
  var divText = document.createElement('div');
  var divButtons = document.createElement('div');
  var spanButtons = document.createElement('span');
  var btnFin = document.createElement('button');
  var btnDel = document.createElement('button');
  var lid=liId();

  btnFin.className='btn btn-success btn-fin';
  btnFin.innerHTML="Finished!"
  btnDel.className='btn btn-danger btn-del';
  btnDel.innerHTML="Delete"
  divRow.className='row';
  divText.className='col-md-6';
  divButtons.className='col-md-6 buttons-div';
  spanButtons.className='float-right';
  li.setAttribute('id', lid);
  btnDel.setAttribute('type', 'button');

  btnDel.addEventListener('click', function(){
    changeTaskNumber(-1);
    removeChild(lid);
  }, false);

  btnFin.addEventListener('click', function(){
    changeFinishedNumber(1);
    changeTaskNumber(-1);
    removeChild(lid);
  }, false);


  var textNode = document.createTextNode(input.value);

  divText.appendChild(textNode);
  spanButtons.appendChild(btnFin);
  spanButtons.appendChild(btnDel);
  divButtons.appendChild(spanButtons);
  divRow.appendChild(divText);
  divRow.appendChild(divButtons);
  li.appendChild(divRow);
  tasks.appendChild(li);
  changeTaskNumber(1);
  liNum++;
  input.value='';
}


if(addButton.addEventListener){
  addButton.addEventListener('click', createTask, false);
}
