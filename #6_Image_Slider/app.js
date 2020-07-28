var image = document.querySelector('img')
var minus = document.getElementById('minus')
var add = document.getElementById('add')
var count = 0;

// Approach 1 - using image name array
var images = [ "img (1)", "img (2)", "img (3)", "img (4)", "img (5)" ]
minus.addEventListener('click', function(){
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  image.setAttribute("src", `images/${images[count]}.jpg`)
});
plus.addEventListener('click', function(){
  count++;
  if (count > images.length - 1) {
    count = 0;
  }
  image.setAttribute("src", `images/${images[count]}.jpg`)
});

// Approach 2 - changing image name
// var counter = [1, 2, 3, 4, 5]
// minus.addEventListener('click', function(){
//   count--;
//   if (count < 1) {
//     count = counter.length;
//   }
//   image.setAttribute("src", `images/img (${count}).jpg`)
// });

// plus.addEventListener('click', function(){
//   count++;
//   if (count > 5) {
//     count = 1;
//   }
//   image.setAttribute("src", `images/img (${count}).jpg`)
// });
