var counter = document.getElementById('counter')
var minus = document.getElementById('minus')
var add = document.getElementById('add')
var count = 0;

minus.addEventListener('click', function(){ 
  count--;
  counter.textContent = count;
  changeColor()
})
plus.addEventListener('click', function(){
  count++;
  counter.textContent = count;
  changeColor()
});

function changeColor(){
  count > 0 ? counter.style.color = "green"
  :count < 0 ? counter.style.color = "red" 
  :counter.style.color = "black";
}