console.log("test");


let url = 'https://api.thecatapi.com/v1/images/search'
fetch(url)
    .then(res  => res.json())
    .then(data  =>{

        const img = document.querySelector(".catImage");
        img.src = data[0].url;
    });

const buttonCat = document.querySelector(".new-cat-button");

buttonCat.addEventListener("click",() =>{
    
    let url = 'https://api.thecatapi.com/v1/images/search'
    fetch(url)
    .then(res  => res.json())
    .then(data  =>{

        const img = document.querySelector(".catImage");
        img.src = data[0].url;
    });
})