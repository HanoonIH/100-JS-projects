// Approach 1 - My Way //
// var imgDiv = document.querySelector('img');
// var man = document.querySelector('#name');
// var star = document.querySelector('#star');
// var testimony = document.querySelector('#testimony');

// const next = document.querySelector('#plus');
// const prev = document.querySelector('#minus');

// var testimonials = [
//   {
//     img: "images/man (1).png",
//     name: "Afeefa",
//     star: "⭐⭐⭐⭐⭐",
//     testimony: "Masha Allah, Great...♥"
//   },
//   {
//     img: "images/man (2).png",
//     name: "Hanoon",
//     star: "⭐⭐⭐⭐",
//     testimony: "Nice work..☺☺☺"
//   },
//   {
//     img: "images/man (3).png",
//     name: "Haniya",
//     star: "⭐⭐⭐",
//     testimony: "You worked hard!"
//   },
//   {
//     img: "images/man (4).png",
//     name: "Najeeh",
//     star: "⭐⭐",
//     testimony: "Not much good :("
//   },
//   {
//     img: "images/man (5).png",
//     name: "Anoof",
//     star: "⭐",
//     testimony: "Bad work..:("
//   }
// ]
// var count = 0;
// imgDiv.setAttribute("src", `${testimonials[0].img}`);
// man.textContent = testimonials[0].name;
// star.textContent = testimonials[0].star;
// testimony.textContent = testimonials[0].testimony;

// prev.addEventListener('click', function(e){
//   count--;
//   if (count < 0) {
//     count = testimonials.length - 1;
//   }
//   imgDiv.setAttribute("src", `${testimonials[count].img}`);
//   man.textContent = testimonials[count].name;
//   star.textContent = testimonials[count].star;
//   testimony.textContent = testimonials[count].testimony;
// });
// next.addEventListener('click', function(e){
//   count++;
//   if (count > testimonials.length - 1) {
//     count = 0;
//   }
//   imgDiv.setAttribute("src", `${testimonials[count].img}`);
//   man.textContent = testimonials[count].name;
//   star.textContent = testimonials[count].star;
//   testimony.textContent = testimonials[count].testimony;
// })


// Approach 2 - Using Object constructors //
var imgDiv = document.querySelector('img');
var man = document.querySelector('#name');
var star = document.querySelector('#star');
var testimony = document.querySelector('#testimony');

const buttons = document.querySelectorAll('button');

var testimonials = [];

// creating constructor
function Customer(img, name, star, text){
  this.img = img;
  this.name = name;
  this.star = star;
  this.text = text;
};
// Creating new customer using constructor function
function createCustomer(img, name, star, text){
  let finalImg = `images/man (${img}).png`;
  let customer = new Customer(finalImg, name, star, text);
  testimonials.push(customer)
};

createCustomer(1, 'Afeefa', '⭐⭐⭐⭐⭐', 'Masha Allah, Great...♥');
createCustomer(2, 'Hanoon', '⭐⭐⭐⭐', 'Nice work..☺☺☺');
createCustomer(3, 'Haniya', '⭐⭐⭐', 'You worked hard!');
createCustomer(4, 'Najeeh', '⭐⭐', 'Not much good :(');
createCustomer(5, 'Anoof', '⭐', 'Bad work..:(');

var count = 0;
imgDiv.setAttribute("src", `${testimonials[0].img}`);
man.textContent = testimonials[0].name;
star.textContent = testimonials[0].star;
testimony.textContent = testimonials[0].text;

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    if(e.target.getAttribute('id') == 'minus') {
      count--;
      if (count < 0) {
        count = testimonials.length - 1;
      }
      imgDiv.setAttribute("src", `${testimonials[count].img}`);
      man.textContent = testimonials[count].name;
      star.textContent = testimonials[count].star;
      testimony.textContent = testimonials[count].text;
    };
    if(e.target.getAttribute('id') == 'plus') {
      count++;
      if (count > testimonials.length - 1) {
        count = 0;
      }
      imgDiv.setAttribute("src", `${testimonials[count].img}`);
      man.textContent = testimonials[count].name;
      star.textContent = testimonials[count].star;
      testimony.textContent = testimonials[count].text;
    };
  });
});