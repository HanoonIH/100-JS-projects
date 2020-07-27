var send = document.querySelector('button')
var newMsg = document.getElementById('newMsg')
var warning = document.getElementById('warning')

send.addEventListener('click', function(){
  var msg = document.getElementById('msg').value
  if (msg == '') {
    warning.style.display = "block";
    setTimeout(function(){ warning.style.display = "none"; }, 2000)
  } else {
    newMsg.textContent = msg
  }
});