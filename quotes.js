window.onload = function() {
  const cors = "https://cors-anywhere.herokuapp.com/"
  const url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&jsonp=?&key=555"
  fetch(cors + url)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      document.getElementById("quote-space").innerHTML = `<a class="nav-link active quote" href="${json.quoteLink}">"${json.quoteText}" - ${json.quoteAuthor}</a>`
    })
}
