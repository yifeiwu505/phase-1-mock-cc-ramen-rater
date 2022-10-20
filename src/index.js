// write your code here


fetch ('http://localhost:3000/ramens') //get data from server
.then(resp => resp.json())
.then(data => { data.forEach(elem =>{
    //forEach to choose everything from json data
    const ramenImg = document.querySelector('#ramen-menu')
    const img = document.querySelector('#ramen-detail')
    //create variables to grab the two sections
    document.h2.append(ramenImg, img)
    //give them home
    img.src = data.img;
    // put content in the created element,display image
    }) 
})

const img = document.querySelector('#ramen-detail')

img.addEventListener('click', () => {
        e.preventDefault()
    
        document.body.append(img)
        
})
//display all ramen images, click to show specific image 
