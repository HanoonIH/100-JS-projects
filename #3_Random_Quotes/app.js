var quote;
fetch("https://type.fit/api/quotes")
  .then(response =>  response.json())
  .then(data => {quote = data} );

var button = document.querySelector('button')
button.addEventListener('click', function(){ 
    var display = document.getElementById('display')
    var author = document.getElementById('author')
    var value = Math.floor(Math.random() * quote.length)

    display.textContent = quote[value].text
    author.textContent = `- ${quote[value].author} -`
});
