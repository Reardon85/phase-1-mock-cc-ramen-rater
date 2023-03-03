

function init(){

    const menu = document.getElementById('ramen-menu');
    const ramenForm = document.querySelector('#new-ramen');

    fetch('http://localhost:3000/ramens')
    .then((resp) => resp.json())
    .then((ramens) =>{
        ramens.forEach(renderRamen);
    })

    ramenForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const ramenObj = {
            id: [menu.childElementCount+1],
            name: ramenForm.name.value,
            restaurant: ramenForm.restaurant.value,
            image: ramenForm.image.value,
            rating: ramenForm.rating.value,
            comment: ramenForm.comment.value
        }
        renderRamen(ramenObj);

    })

}


function renderRamen(ramen){

    const menu = document.getElementById('ramen-menu');
    const ramenImg = document.createElement("img");
    ramenImg.id = `ramen-${ramen.id}`

    ramenImg.src = ramen.image;

    ramenImg.addEventListener('click', () => {
        addDetails(ramen);
    })

    menu.append(ramenImg);
}


function addDetails(ramen){

    const ramenDetails = document.getElementById('ramen-detail');
    const rating = document.getElementById('rating-display');
    const comment = document.getElementById('comment-display');

    console.log(ramenDetails.children[1])
    ramenDetails.children[0].src = ramen.image;
    ramenDetails.children[1].textContent = ramen.name;
    ramenDetails.children[2].textContent = ramen.restaurant;
    rating.textContent = ramen.rating;
    comment.textContent = ramen.comment;


}


document.addEventListener("DOMContentLoaded", init);










































// // write your code here


// function init(){

//     const ramenForm = document.querySelector("#new-ramen");
//     const newRamen = {
//         name: ramenForm.name.value,
//         restaurant: ramenForm.restaurant.value,
//         image: ramenForm.image.value,
//         rating: ramenForm.rating.value,
//         comment: ramenForm.comment.value
//     }


    

//     ramenForm.addEventListener('submit', function (event) {

//         event.preventDefault()
//          renderRamen(newRamen);
//     })


//     fetch('http://localhost:3000/ramens')
//     .then(resp => resp.json())
//     .then(ramens => {
//         addDetails(ramens[0])
//         ramens.forEach(renderRamen)
//     })



// }



// function renderRamen ( ramen, index, arr){

//     console.log(index)
//     const menu = document.querySelector("#ramen-menu");
//     const newDiv = document.createElement('div');
//     const image = document.createElement("img");
//     const delBtn = document.createElement("button");


//     // const details = document.querySelector("#ramen-detail")
//     // const rating = document.querySelector("#rating-display");
//     // const comment = document.querySelector("#comment-display");


//     //console.log(details.children[1])
//     delBtn.innerText = "DELETE";
//     image.src = ramen.image;
//     newDiv.append(image, delBtn)
//     newDiv.id = index;

//     delBtn.addEventListener('click', ()=> {

//         const delDiv = document.getElementById(`${index}`)
//         delDiv.remove();
//         document.location.reload()
//         console.log(delDiv);
//     })
// a

//     image.addEventListener('click', () => {

//         addDetails(ramen);
//         // details.children[0].src = ramen.image;
//         // details.children[1].textContent = ramen.name;
//         // details.children[2].textContent = ramen.restaurant;
//         // rating.textContent = ramen.rating;
//         // comment.textContent = ramen.comment;
//     } )

    
//     menu.append(newDiv)
//     console.log(menu)
// }

// function addDetails(ramen){

//     const details = document.querySelector("#ramen-detail")
//     const rating = document.querySelector("#rating-display");
//     const comment = document.querySelector("#comment-display");
//     //const deleteRamen = document.querySelector("#delete");


//     details.children[0].src = ramen.image;
//     details.children[1].textContent = ramen.name;
//     details.children[2].textContent = ramen.restaurant;
//     rating.textContent = ramen.rating;
//     comment.textContent = ramen.comment;

//     const updateForm = document.querySelector("#edit-ramen");

//     updateForm.addEventListener('submit', (e) => {

//         e.preventDefault();
//         ramen.rating = updateForm.rating.value;
//         ramen.comment = updateForm.comment.value;
//         addDetails(ramen);
        

//     })




// }







// document.addEventListener('DOMContentLoaded', init);


