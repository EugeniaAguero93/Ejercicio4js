// Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

//👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

//👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
//👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

//🚨 Si no coincide con ningún id, renderizar un mensaje de error.

const valorIdingrediente = document.getElementById('inputPizzaId'); 
const tituloNombre= document.getElementById('nombreIngrediente');
const tituloPrecio= document.getElementById('precioIngrediente');
const btnId=document.getElementById('cta');

function renderizarDatos (){
  let idBusqueda= parseInt(valorIdingrediente.value, 10);
  let nombreEncontrado= "";
  let precioEncontrado= "";
  let encontrado= false;
  tituloNombre.innerHTML="";
  tituloPrecio.innerHTML="";
  arrayPizzas.forEach(elemento=>{
    if(idBusqueda===elemento.id){

    nombreEncontrado=elemento.nombre;
    precioEncontrado=elemento.precio;
    encontrado=true;
  } 
  })
  if (encontrado){
    tituloNombre.innerHTML+=nombreEncontrado;
    tituloPrecio.innerHTML+=precioEncontrado;
  }
  else{
    alert("Error, id no encontrado");
    tituloNombre.innerHTML="";
    tituloPrecio.innerHTML="";
  }
}


const arrayPizzas=[
  {
    id:1,
    nombre:"Pepperoni",
    ingredientes:["harina","pepperoni","tomate"],
    precio:650,
    imagen:"./pepperoni.png",  
  },
  {
    id:2,
    nombre:"Champiniones",
    ingredientes:["harina","champiniones","tomate"],
    precio:500,
    imagen:"img/champinones-ok.png",  
  },
  {
    id:3,
    nombre:"Margarita",
    ingredientes:["harina","albahaca","tomate"],
    precio:678,
    imagen:"img/margarita.png",
  },
  {
    id:4,
    nombre:"Cuatro quesos",
    ingredientes:["harina","queso azul","tomate"],
    precio:650,
    imagen:"img/cuatro-quesos.png",
  },
  {
    id:5,
    nombre:"Hawaiana",
    ingredientes:["harina","anana","tomate"],
    precio:750,
    imagen:"img/hawaiana1.png",
  },{
    id:6,
    nombre:"Napolitana",
    ingredientes:["harina","alcaparras","tomate"],
    precio:850,
    imagen:"img/napo.png",
  }
  ];

localStorage.setItem("pizzas",JSON.stringify(arrayPizzas));
//let Cards = document.getElementById('cardscontainer')
document.getElementById("filterBtn").addEventListener("click",()=>{
  const input = document.getElementById("filterInput").value;
  const filteredResult = filter(input);
  drawCards(filteredResult);
}
)

const filter = (input) => {
  let pizzas = localStorage.getItem("pizzas");
  if (pizzas !== "") {
    pizzas = JSON.parse(pizzas);
  } else {
    alert("Could not get pizza array from the localstorage");
  }

  return input === "" ? pizzas : pizzas.filter((item) =>
    item.nombre.toLowerCase().includes(input.toLowerCase())
  );
};

const drawCards = (items) => {
  let cardsSection = document.getElementById("cardscontainer");
  items.map((item) => {
    let card = document.createElement("div");
    card.className = "card"; // add class name of a card
    let newImage = document.createElement("img");
    newImage.src = item.imagen;
    let precioPizza = document.createElement("h4");
    precioPizza.textContent = item.precio;
    let nombrePizza = document.createElement("h3");
    nombrePizza.textContent = item.nombre;
    card.appendChild(newImage);
    card.appendChild(precioPizza);
    card.appendChild(nombrePizza);
    cardsSection.appendChild(card);
  });
};

// const newImage = document.createElement("img");
// newImage.src = "img/napo.png";
// const elementoPadre = document.querySelector(".card");
// elementoPadre.appendChild(newImage);