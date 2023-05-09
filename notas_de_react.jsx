import React from 'projects/learning-react/src/react'
import ReactDOM from 'projects/learning-react/src/react-dom/client'

//^ ----------------------------------- 
//^ -  INICIANDO UN PROYECTO EN REACT - 
//^ ----------------------------------- 


//^ ----- ----- 1.- usamos "npm init -y" para inicializar el proyecto y tener un package JSON ----- ----- 

//^ ----- ----- 2.- "npm create vite@latest" (alt + 6 4 para escribir el arroba) para crear un proyecto con vite ----- ----- 

//^ ----- ----- 2,1.- escogemos react con javascript + SWC ----- ----- 

//^ ----- ----- 3.- npm install para instalar las dependencias ----- ----- 

//^ ----- ----- 3,1.- "npm run dev" para iniciar el servidor con react ----- ----- 



//^ ----------------------------------- 
//^ -         JSX Y REACT DOM         - 
//^ ----------------------------------- 


//^ ----- ----- 4.- JSX es un manera de escribir codigo parecido al HTML en javascript ----- ----- 

//^ ----- ----- 4,1.- dentro del JSX tambien podemos ejecutar codigo javascript abriendo lalves {} y ejecutando dentro lo que queramos ----- ----- 

//^ ----- ----- 4,2.- Si queremos tener varias etiquetas juntas es obligatorio encerrarlas dentro de un contenedor ----- ----- 

//^ ----- ----- 4,3.- tambien podemos usar los "fragmentos de react" en remplazo de los "divs" con <></> ----- ----- 

//^ ----- ----- 5.- si queremos añadir una clase al elemento usamos " className='' " ----- ----- 

//^ ----- ----- 6.- tambien podemos añadir estilos en linea usando "style={}" y dentro le pasamos un objeto ----- ----- 

const nombre = "Juan";
const JSX = (
    <>
        <h1 className='' style={{color: "red"}}>Hola {nombre}! Como estas!</h1>
        <p>Que tengas un buen día</p>
    </>
)

