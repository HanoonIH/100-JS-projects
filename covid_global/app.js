// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
// fetch("https://api.covid19api.com/summary", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log("ther's a problem", error));

$(document).ready(function(){
    var url = "https://api.covid19api.com/summary";

    $.getJSON(url, function(data){

        for (let i = 0; i < data.Countries.length; i++) {
            let tbody =  document.querySelector('.table tbody')
            
            let tr = document.createElement('tr')
            let th = document.createElement('th')
            let tdCountry = document.createElement('td')
            let tdConfirm = document.createElement('td')
            let tdRecover = document.createElement('td')
            let tdDeath = document.createElement('td')

            tbody.appendChild(tr)
            tr.appendChild(th)
            tr.appendChild(tdCountry)
            tr.appendChild(tdConfirm)
            tr.appendChild(tdRecover)
            tr.appendChild(tdDeath)
            
            th.setAttribute("scope", "row")

            th.textContent = i + 1
            tdCountry.textContent = data.Countries[i].Country
            tdConfirm.textContent = data.Countries[i].TotalConfirmed
            tdRecover.textContent = data.Countries[i].TotalRecovered
            tdDeath.textContent = data.Countries[i].TotalDeaths

            if(data.Countries[i].TotalDeaths > 10000){
                document.querySelector('table').rows[i + 1].classList.add("bg-danger", "font-weight-bold")
            } else if(data.Countries[i].TotalDeaths > 1000){
                document.querySelector('table').rows[i + 1].classList.add("bg-warning", "text-dark", "font-weight-bold")
            } else if(data.Countries[i].TotalDeaths < 1){
                document.querySelector('table').rows[i + 1].classList.add("bg-success")
            } 

            var search = document.getElementById('search')
            search.addEventListener('keyup', function(e){
                let term = search.value.toLowerCase()
                if(tdCountry.textContent.toLowerCase().indexOf(term) == -1){
                    tdCountry.parentNode.classList.add('d-none')
                } else {
                    tdCountry.parentElement.classList.remove('d-none')
                }
            })
        }
    })
});
