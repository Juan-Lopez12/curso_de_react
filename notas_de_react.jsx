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

//^ ----- ----- 6,1.- podemos tambien meter variables dentro de los valores de style ----- ----- 

const nombre = "Juan";
const color = "green";
const JSX = (
    <>
        <h1 className='' style={{color: color}}>Hola {nombre}! Como estas!</h1>
        <p>Que tengas un buen día</p>
    </>
)



//^ ----------------------------------- 
//^ -       CONDICIONALES EN JSX      - 
//^ ----------------------------------- 


//^ ----- ----- 7.- Podemos usar condicionales para retornar codigo JSX ----- ----- 

const sesion = false;
const verificarSesion = (sesion) => {
    if (sesion) {
        return JSX;
    } else {
        return <h1>No haz iniciado sesión</h1>
    }
}

//^ ----- ----- 7,1.- tambien podemos usar el operador ternario ----- ----- 

//^ ----- ----- 7,2.- podemos comprobar si una variable no esta vacia y mostrar texto JSX encerrandolo dentro de llaves y usando el && {variable && <p>Texto a devolver: {variable}</p>} ----- ----- 

const JSX2 = (
    <>
        {sesion ? 
        <>
            <h1 className='title' style={{color: color}}>Hola {nombre}!</h1>
            <p>Como estas!</p>
            {pais && <p>Iniciaste sesion desde: {pais} </p>}
        </>
        :
        <h1>No haz iniciado sesion</h1>}
    </>
)



//^ ----------------------------------- 
//^ -         ARREGLOS EN JSX         - 
//^ ----------------------------------- 


//^ ----- ----- 8.- Podemos mostrar arrays dentro del JSX llamando al arreglo dentro de llaves como siempre ----- ----- 

const amigos = ["Alejandro", "Manuel", "Cesar"];

<ul>
    {amigos}
    {amigos.map(amigo => <li>{amigo}</li>)}
    {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
</ul>



//^ ----------------------------------- 
//^ -       COMPONENTES EN REACT      - 
//^ ----------------------------------- 


//^ ----- ----- 9.- podemos crear componentes para reutilizarlos en otras partes de nuestra aplicación, y que tengan información de forma dinamica, y que un cambio aplique al componente en toda la aplicación ----- ----- 

//^ ----- ----- 9,1.- un componente es una función y su primera letra siempre debe ser mayuscula ----- ----- 

//^ ----- ----- 9,2.- el componente siempre debe retornar algo. Usaremos "return (y el JSX aca dentro);" ----- ----- 

//^ ----- ----- 9,3.- el componente lo traeremos como codigo JSX Ej. <Usuario /> ----- ----- 

//^ ----- ----- 10.- separaremos el codigo en pequeños componentes, creamos una carpeta llamada "components" en "src" y para usar los componentes los importamos con "export default 'componentName'" default si es 1 solo componente, y luego los recibiremos como "import 'componentName' from './ubicación del componente'" ----- ----- 

//^ ----- ----- 10,1.- usar snippet "rafce"  para importar react, creara el componente y lo exportara ----- ----- 

//^ ----- ----- 10,2.- si queremos exportar varios componentes usaremos "export {Comp1, Comp2}" y lo exportaremos como "import {Comp2}" ----- ----- 

// export User from "./user";
// export {Comp2} from "./user";

const User = () => {
    return (
        <>
            <h1 className='title' style={{color: color}}>Hola {nombre}!</h1>
            <p>Como estas!</p>
            {pais && <p>Iniciaste sesion desde: {pais} </p>}
            <ul>
                {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
            </ul>
        </>
    );
};

<User />

// import default User;
// import {Comp1, Comp2}



//^ ----------------------------------- 
//^ -   PROPIEDADES DE LOS COMPONENTES - 
//^ ----------------------------------- 


//^ ----- ----- 11.- a un componente le podemos pasar propiedades para hacer un componente mas dinamico. Lo escribimos como si fueran propiedades HTML y luego en el archivo del componente lo recibimos en la función como si fuera un objeto, tambien podemos destructurarlo ----- ----- 

//^ ----- ----- 11,1.- tambien podemos escribir valores por defecto en las propiedades ----- ----- 

//^ ----- ----- 11,2.- las propiedades tambien peuden recibir arrays, objetos, numeros, varoles booleanos e incluso elementos JSX etc ----- ----- 

const TitleRed = ({ user = "Anon", color }) => {
    const color = "red";

    return (<h1 className='title' style={{color: color}}>Hola {user}!</h1>)
}

const TitleBlue = (props) => {
    const color = "blue";

    return (<h1 className='title' style={{color: color}}>Hola {props.user}!</h1>)
}


