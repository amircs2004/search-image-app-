const acessKey ="iIZN41Hk0XCvxfgIojTZJfkpMRWxYmnspgle6AVbasM"
const searchEL = document.getElementById("search")
const formEL =document.querySelector("form")
const searchResultsEL = document.querySelector(".searchResults")
const showMoreEL = document.getElementById("showMore")
let inputData = ""
let page = 1
async function searchImages() {
    inputData = searchEL.value
    const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${acessKey}`
   const response = await fetch(URL)
   const data = await response.json()
   if (page === 1 ) {
    searchResultsEL.innerHTML = ""
   }
const results = data.results
results.map((result)=>{
   const imageWrapper = document.createElement("div")
   imageWrapper.classList.add("searchCard")
   const image = document.createElement("img")
   image.src = result.urls.small
   image.alt = result.alt_description
   const imageLink = document.createElement("a")
   imageLink.href = result.links.html
   imageLink.target = "_blank"
   imageLink.textContent = result.alt_description
   imageWrapper.appendChild(image)
   imageWrapper.appendChild(imageLink)
   searchResultsEL.appendChild(imageWrapper)


})
page++
console.log(page);

if (page > 1) {
   showMoreButtonEL.style.display = "block"
}

}

formEL.addEventListener("submit" , (event)=>{
   event.preventDefault()
   page = 1 
  searchImages()
})
showMoreEL.addEventListener("click" , ()=>{
   searchImages()
})