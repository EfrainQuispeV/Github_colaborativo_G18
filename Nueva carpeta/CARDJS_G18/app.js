//crar una variable
const redColor = document.querySelector('.red') // servira de puente entre HTML y JS
const grayColor = document.querySelector('.gray')  //para acceder a todo la inforaino del HTML usabmos (document.querySelector'.red')
const blackColor = document.querySelector('#black')

const imageCard = document.querySelector('.imageContainer')

const cartButton = document.getElementById('button')

const feedbackButton =  document

// agregando un evento con el escuchador de evento: addEventListener() 
// 1er evento (a escuchar, click) y 2do funcion (tareas asignadas, cambia imagen)

// cambiando a color rojo 
redColor.addEventListener('click', function(){
    imageCard.style.backgroundImage = 'url(./assets/C300Red.png)'
    cartButton.style.backgroundColor = 'red'
})

// cambiando a color gray

grayColor.addEventListener('click', function(){
    imageCard.style.backgroundImage = 'url(./assets/C300Gray.png)'
    cartButton.style.backgroundColor = 'gray'
})

//cambiandoa color black
blackColor.addEventListener('click', function(){
    imageCard.style.backgroundImage = 'url(./assets/C300Black1.png)'
    cartButton.style.backgroundColor = 'black'
})


//crear unya etiqueta h3, agregar una clase, un texto y lo vamos a incrustar
const etiquetah3 = document.createElement('h3');
etiquetah3,className = 'tag';
etiquetah3.textContent = 'Car'
  
const containerDescription = document.querySelector('.description')
const cardh2 = document.querySelector('h2')

containerDescription.insertBefore(etiquetah3, cardh2)

cartButton.addEventListener('click', function(){
    cartButton.style.display = 'none'
    feedbackButton.style.display = 'block'
    confetti({
        particleCount: 200, //cambiando valores es posible modificar intensidad
        spread: 70,
        origin: {y:1}
    })

})

feedbackButton.addEventListener('click', function(){
    feedbackButton.style.display = 'none'
    cartButton.style.display = 'block'
})



//NOTA

//querySelector
/*es posible tomar elemnto del HTML utilizando la propias etiquetas.
por ejemplo: button, a travez de CLASE y el ID
es necesario agregar algo más, 

class (agregar . adelante y entre "")
id (agregar # adelante y entre "")  */


//getElementByid
/*solo trabaja con el ID, es necesario para el "nombre del ID"

ID (solo nombre del ID) */

