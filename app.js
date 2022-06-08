console.log("page loaded");

const apiKey ="AIzaSyDDVRvIprr4l_sxjoO7_oVjnZiTylva5Ec";
const limit = 10;
const client_key = "giphypartyEA";
const search_term = document.getElementById("searchText");
const gifForm = document.querySelector("form");
const results = document.querySelector("#results");
const showButton = document.getElementsByClassName("hidden");
let pageNum = 0;
let offset = pageNum*limit;
var searchTerm ='';

gifForm.addEventListener("submit",handleFormSubmit);
showButton.addEventListener("click",showMore);

async function getResults(search_term){
    const search_url = "https://tenor.googleapis.com/v2/search?q=" + search_term + "&key=" +
            apiKey +"&client_key=" + client_key +  "&limit=" + limit;
const response = await fetch(search_url)
const jsonResponse = await response.json();
const data = jsonResponse.results
console.log(111,jsonResponse)
data.forEach(element => displayResults(element));
return data


}
async function displayResults(element){
    console.log(111,element)
    results.innerHTML+=`
<img src="${element.media_formats.gif.url} "alt=${element.title}/>"
`

}


async function handleFormSubmit(evt){
    evt.preventDefault();
    results.innerHTML = ` `;
    searchTerm = search_term.value;
    const pageResults = await getResults(searchTerm);
    searchTerm.value = '';
    pageNum++;
    
    

}

async function showMore() {
    const pageResults = await getResults(searchTerm);
    pageNum++
}