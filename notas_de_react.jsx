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

{/* <Title user="Juan" color="green" /> */}

const TitleRed = ({ user = "Anon", color }) => {
    return (<h1 className='title' style={{color: color}}>Hola {user}!</h1>)
}

const TitleBlue = (props) => {
    const color = "blue";

    return (<h1 className='title' style={{color: color}}>Hola {props.user}!</h1>)
}



//^ ----------------------------------- 
//^ -     ESTADO DE LOS COMPONENTES   - 
//^ ----------------------------------- 


//^ ----- ----- 12.- Podemos ejecutar evento con funciones dentro de los componentes pasandole de que tipo sera el evento directamente ----- ----- 

//^ ----- ----- 13.- Si queremos que un componente cambie o no se muestre debemos usar el estado para que el componente se vuelva a renderizar con el nuevo valor ----- ----- 

const cerrarSesion = () => {
    alert("Hola")
}

<>
    <button onClick={cerrarSesion}>Cerrar Sesion</button>
    
    <button onClick={() => alert("Cerramos sesion")}>Cerrar Sesion</button>
</>


//^ ----- ----- 13,1.- Usaremos "useState" importandolo de "React" y luego usaremos la destructuración: const [estado, fnCambiarEstado] = useState(valorInicial) ----- ----- 

//^ ----- ----- 13,2.- Cuando el estado cambie React siempre va a volver a cargar el componente, y cada componente tendra su propio estado, renderizandose de forma independiente ----- ----- 


const [session, changeSession] = useState(true)

{/* <>
    <button onClick={() => changeSession(!session)}>Cerrar Sesion</button>
    
    <button onClick={() => changeSession(!session)}>Cerrar Sesion</button>
</> */}



//^ ----------------------------------- 
//^ -       FORMULARIOS EN REACT      - 
//^ ----------------------------------- 


//^ ----- ----- 14.- podemos trabajar con los inputs usando los evento "onChange" ----- ----- 

//^ ----- ----- 15.- Tambien podemos usar el evento "onSubmit" para ejecutar codigo al enviar los datos, y usar el metodo "preventDefault()" para evitar que se envien los datos ----- ----- 

//^ ----- ----- 16.- Al mismo tiempo tambien podemos pasarle la función de estado del componente padre al hijo en forma de propiedad, y asi poder ejecutarla para cambiar el estado ----- ----- 

<FormSession changeSession={changeSession} />

const onChange = (e) => {
    if (e.target.name === 'user') {
        changeUser(e.target.value)
    } else if (e.target.name === 'password') {
        changePassword(e.target.value)
    }
}

const onSubmit = (e) => {
    e.preventDefault()
    if (user === "Juan" && password === "123") {
        changeSession(true)
    } else {
        alert("Datos incorrectos!")
        changeUser("")
        changePassword("")
    }
}

<form action="" onSubmit={onSubmit}>
    <input 
        type="text" 
        name="user" 
        id="user" 
        value={user}
        onChange={onChange}
    />
</form>


//^ ----------------------------------- 
//^ -   COMPONENTES BASADOS EN CLASE  - 
//^ ----------------------------------- 


//^ ----- ----- 17.- ya no se usan y es mejor dejar de usarlos. Para mas información ir al componente en: "./components/CounterClass" y la clase de "Componentes basados en clase" ----- ----- 



//^ ----------------------------------- 
//^ - CICLO DE VIDA DE LOS COMPONENTES - 
//^ ----------------------------------- 


//^ ----- ----- 18.- En los componentes basados en clases estan los "metodos de ciclo de vida" los cuales ejecutaran codigo si el componente: se cargo, se actualizo o se desmonto ----- ----- 

//^ ----- ----- 18,1.- En los componentes funcionales tendremos lo mismo pero usando "Hooks" ----- ----- 

//^ ----- ----- 18,2.- los metodos son: componentDidMount(){}, componentDidUpdate(lastProps, lastState){}, componente ----- -----



//^ ----------------------------------- 
//^ -       ESTILOS CSS EN REACT      - 
//^ ----------------------------------- 



//^ ----------------------------------- 
//^ -       USANDO UN ARCHIVO .CSS    - 
//^ ----------------------------------- 


//^ ----- ----- 19.- Si queremos usar archivos CSS para estilar, le pondremos al archivo el mismo nombre que del componente y crearemos un archivo CSS por cada componente y lo importamos en dicho componente ----- ----- 

//^ ----- ----- 19,1.- importamos el archivo CSS usando "import './index.css'" ----- ----- 

//^ ----- ----- 19,2.- Si usamos archivos CSS usando el mismo nombre de clases, estas van a chocar cuando se cargue el componente. Ej una clase boton chocando con otra clase boton en los estilos ----- ----- 



//^ ----------------------------------- 
//^ -          MÓDULOS DE CSS         - 
//^ ----------------------------------- 

//^ ----- ----- Ventaja de usar módulos es que las clases no entraran en conflicto ----- ----- 

//^ ----- ----- 20.- Para trabajar con los "módulos de css" hay que escribir los archivos como "nombre.module.css" y exportarlo con "import style from" Ej: "import style from './nombre.module.css'" ----- ----- 

//^ ----- ----- 20,1.- y luego para acceder a las clases hay que escribirlos como "className={style.boton}" ----- ----- 



//^ ----------------------------------- 
//^ -        STYLED COMPONENTS        - 
//^ ----------------------------------- 


//^ ----- ----- 21.- Importamos con: "import styled from 'styled-components'" para utilizarlo ----- ----- 

//^ ----- ----- 22.- Luego creamos una constante y la primera letra en mayuscula y va a ser igual a: style.tipoElemento` ` y dentro escribiremos todo el codigo css, luego usaremos ese componente como un elemento HTML ----- ----- 

//^ ----- ----- 22,1.- Ejemplo: const Paragraph = styled.p`margin: 20px 0;`; ----- ----- 
//^ ----- ----- <Paragraph>Esto es un parrafo</Paragraph> ----- ----- 


//^ ----- ----- 23.- Crear una carpeta "elements" si queremos guardar los elementos creados en archivos independientes, y luego los exportamos ----- ----- 


//^ ----- ----- 24.- usar "&:hover {}" el simbolo de "&" y el nombre de la pseuda clase u pseudo elemento para añadirlos dentro del propio elemento ----- ----- 

//^ ----- ----- 24,1.- el "&" hace referencia al elemento como si fuera un "this" ----- ----- 


//^ ----------------------------------- 
//^ -   STYLED COMPONENTS DINAMICOS   - 
//^ ----------------------------------- 


//^ ----- ----- 25.- Podemos añadirles propiedades a estos "STYLED COMPONENTS" haciendolos mas dinamicos ----- ----- 

//^ ----- ----- 25,1.- "import styled, { css } from 'styled-components'" primero importamos "css" desde "styled" ----- ----- 

//^ ----- ----- 25,2.- luego le añadimos una propiedad al componente con el signo de dolar al principio. Ej: "$black" ----- ----- 

//^ ----- ----- 25,3.- ${props => props.$black && css` `} y añadimos llaves y dentro le pasamos las propiedades, ejecutamos una función, el nombre de la propiedad y luego "&& css``" ----- ----- 

//^ ${props => props.$black && css`
//^ background: #000;
//^ color: #fff;
//^ ` }


//^ ----- ----- 26.- Tambien podemos añadir condicionales a los estilos ----- ----- 

//^ ----- ----- 26,1.- width: ${props => props.$long ? '100%' : 'auto'}; abrimos llaves y dentro pasamos las propiedades, y luego usamos el operador ternario, si existe la propiedad va a retornar "100%" y si no existe (para el resto de los componentes) retornara "auto" ----- ----- 



//^ ----------------------------------- 
//^ -          REACT HOOKS            - 
//^ ----------------------------------- 

//^ ----- ----- Los hooks tienen 2 reglas, se tiene que crear dentro del componente hasta arriba y no peude ser usado dentro de bucles o condicionales ----- ----- 


//^ ----------------------------------- 
//^ -          HOOK useEffect         - 
//^ ----------------------------------- 

//^ ----- ----- 27.- "useEffect()" nos permitira usar los metodos de ciclos de vida en los componentes funcionales, lo importamos desde "React" y llamamos a una función de callback dentro de "useEffect()" ----- ----- 

//^ ----- ----- 27,1.- "useEffect()" es el equivalente a "componentDidMount" y a "componentDidUpdate", se ejecutara el "useEffect" cada vez que el componente se renderize ----- ----- 

//^ useEffect(() => {
//^     console.log('El componente se ha cargado!')
//^ })


//^ ----- ----- 28.- "useEffect(() => {}, [])" si le pasamos como segundo parametro un "array" (sera un arreglo de dependencias) y lo dejamos vacio, useEffect solo se ejecutara cuando se cargue el componente por primera vez ----- ----- 

//^ ----- ----- 28,1.- Este seria el equivalente a "componentDidMount" ----- ----- 

//^ useEffect(() => {
//^     console.log('Primer renderizado del componente!')
//^ }, [])


//^ ----- ----- 29.- Si le pasamos el estado dentro del array, useEffect solo se ejecutara cuando ESE estado/dependencia cambie ----- ----- 

//^ ----- ----- 30.- Tambien le podemos pasar mas de un estado/dependencia ----- ----- 

//^ useEffect(() => {
//^     console.log('Primer renderizado del componente!')
//^ }, [count, count2])


//^ ----- ----- 31.- Para el equivalente a "componentDidUnmount" le pasaremos un return con una función callback, y un array vacio ----- ----- 

//^ useEffect(() => {
//^     return(() => {
//^         console.log('Adiós componente!')
//^     })
//^ }, [])



//^ ----------------------------------- 
//^ -          HOOK useReducer        - 
//^ ----------------------------------- 


//^ ----- ----- useReducer funciona como el useState, pero nos permitira administrar la logica para cambiar el estado AFUERA del componente, pudiendo exportarla si queremos, al mismo tiempo que tambien nos permitira separar las funciones de mejor manera ----- ----- 


//^ ----- ----- 32.- exportamos useReducer desde react, adentro del componente llamamos el hook, y afuera del componente declaramos la función de "reducer(state, action)" ----- ----- 


//^ ----- ----- 33.- useReducer(reducer, initialState) recibe 2 parametros, la función reducer, y el estado inicial ----- ----- 

//^ ----- ----- 33,1.- const [state, dispatch] = useReducer() al mismo tiempo nos devolvera un array, con el estado de la aplicación y una función de "dispatch" ----- ----- 


//^ ----- ----- 34.- al llamar a "dispatch()" podemos pasarle una acción, especificarle que tipo de acción es para que haga una u otra cosa ----- ----- 

//^ ----- ----- 34,1.- las "acciones" son objetos de javascript, normalmente le pondremos la propiedad de "type" y la descripción indicara el valor de la acción identificando que hara, lo pondremos en mayuscula ----- ----- 

//^ <Button onClick={() => dispatch({ type: 'PLUS' })}>Aumentar</Button> 



//^ ----- ----- 35.- el "initialState" podemos definirlo fuera del componente y pasarselo al "useReducer" como variable ----- -----  

//^ ----- ----- 35,1.- el valor de "initiaLState" puede ser lo que queramos pero normalmente sera un objeto con la propiedad y valor  ----- ----- 

//^ ----- ----- 35,2.- Ej: initialCounter = {counter: 0} ----- ----- 


//^ ----- ----- 36.- el "reducer" va a ser una función que escuche que tipo de "acción" estamos ejecutando con el "dispatch", y dependiendo de la acción va a cambiar el estado ----- ----- 

//^ ----- ----- 36,1.-  "reducer(state, action)" el reducer recibe 2 valores, el estado que va a cambiar, y la acción ----- ----- 

//^ ----- ----- 36,2.- dentro del reducer escribiremos un "switch(action.type){}" y le pasaremos la acción y accedemos al tipo ----- ----- 

//^ ----- ----- 36,3.- dentro ponemos el caso y haremos un "return" de un nuevo objeto, y entramos al estado y como el estado es un objeto, le indicamos a que propiedad queremos acceder ----- ----- 

//^ ----- ----- 36,4.- al final del swithc añadirmos un "default:" y devolveremos el estado en caso de que no haya ningun "case" ----- ----- 

//^ const reducer = (state, action) => {
//^     switch(action.type){
//^         case 'PLUS':
//^             return {counter: state.counter + 1}
//^         case 'MINUS':
//^             return {counter: state.counter - 1}
//^         case 'RESTART':
//^             return {counter: 0}
//^         default:
//^             return state;
//^     }
//^ }


//^ ----- ----- 37.- Como el nuevo estado en el componente es un objeto, accederemos a el como tal: {state.counter} ----- ----- 



//^ ----------------------------------- 
//^ -           CUSTOM HOOKS          - 
//^ ----------------------------------- 


//^ ----------------------------------- 
//^ - LOGICA DE PINTAR LA INFORMACIÓN DE UNA "API" - 
//^ ----------------------------------- 


// const Blog = () => {
//     // Usamos useState para guardar los datos de la "API" en un "ARRAY"
//     // y luego las dibujamos en el componente
//     const [articles, setArticle] = useState([])
//     // un useState poner un mensaje de "cargando"
//     const  [loading, setLoading] = useState(true)

//     // con useEffect llamamos a la "API" cuando se inicie el componente por primera vez
//     useEffect(() => {
//         // Simulacro de llamar a la "API"
//         setTimeout(() => {
//             // Aqui setteamos el estado, guardamos los objetos dentro de un "ARRAY" en el estado
//             setArticle([
//                 {
//                     id: 1,
//                     title: 'Titulo del primer articulo'
//                 },
//                 {
//                     id: 2,
//                     title: 'Titulo del segundo articulo'
//                 },
//                 {
//                     id: 3,
//                     title: 'Titulo del tercer articulo'
//                 }
//             ])
//             // estado del mensaje de carga pasa a ser "false"
//             setLoading(false)
//         }, 3000);
//     }, [])

//     return (
//         <BlogContainer>
//             <Title>Blog</Title>
//             {/* con un ternario pintamos que esta cargando hasta que la "API" cargue/responda. Entonces ahi vamos a pintar un div con los articulos */}
//             {loading ?
//                 <Title>Cargando . . .</Title>
//             :
//                 <div>
//                     {/* y con un map recorremos el "ARRAY" de objetos de la "API" y escribimos su titulo, y le pasamos la propiedad "key" con su identificador */}
//                     {articles.map(article => {
//                         return <Article key={article.id}>{article.title}</Article>
//                     })}
//                 </div>
//             }
//         </BlogContainer>
//     )
// }


//^ ----------------------------------- 
//^ -        CREAR CUSTOM HOOKS       - 
//^ ----------------------------------- 


//^ ----- ----- "Los custom hooks" nos permitira guardar lógica o lógica que involucre otros hooks, y guardarlos en forma de hooks para reutilizarlo ----- ----- 

//^ ----- ----- 38.- creamos una carpeta "hooks" en src, y todos los hooks que creemos le pondremos "useNombre" y el nombre del hook ----- ----- 

//^ ----- ----- 38,1.- importaremos los hooks que vayamos a utilizar, y creamos una función tipo componente funcional, pero  no devolveremos codigo "JSX" en el "return", en su lugar retornaremos un valor o un "array" [] ----- ----- 


//^ ----- ----- 39.- Al crear el hook, lo que hay que hacer al final es devolver los valores que nos de nuestra lógica, o los valores que nos devuelva el estado ----- ----- 

//^ ----- ----- 39,1.- usaremos "return []" el return para devolver los valores, o un "ARRAY" con los valores ----- ----- 

//^ Ej: return [articles, loading];


//^ ----- ----- 40.- luego importaremos nuestro hook y extraeremos sus valores como un hook normal, tambien podemos pasarle parametros. Ej: const [articles, loading] = useGetArticles(parametro?) ----- ----- 

// const useGetArticles = (parametro?) => {
//     const [articles, setArticle] = useState([])
//     const  [loading, setLoading] = useState(true)

//     useEffect(() => {
//         setTimeout(() => {
//             setArticle([
//                 {id: 1, title: 'Titulo del primer articulo'},
//                 {id: 2, title: 'Titulo del segundo articulo'},
//                 {id: 3, title: 'Titulo del tercer articulo'},
//             ])
//             setLoading(false)
//         }, 3000);
//     }, [])

//     return [articles, loading];
// }



//^ ----------------------------------- 
//^ -   PROYECTO 1  APP DE LISTA DE TAREAS - 
//^ ----------------------------------- 


//^ ----------------------------------- 
//^ -            FONT AWESOME         - 
//^ ----------------------------------- 

//^ ----- ----- 41.- Podemos usar "Font AWESOME" en nuestros proyectos de react, para ellos lo instalamos usando: ----- ----- 

//^ npm i --save @fortawesome/fontawesome-svg-core
//^ npm install --save @fortawesome/free-solid-svg-icons
//^ npm install --save @fortawesome/react-fontawesome


//^ ----- ----- 41,1.- luego lo importamos "font Awesome" y los iconos que vayamos a utilziar ----- ----- 

//^ import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//^ import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'


//^ ----- ----- 41,2.- y lo usamos en forma de componente, con la propiedad "icon" y el nombre del icono ----- ----- 

//^ {/* <FontAwesomeIcon icon={faEyeSlash} className='header__icon-button' /> */}


//^ ----------------------------------- 
//^ -          NOMBRAR TAREAS         - 
//^ ----------------------------------- 

//^ ----- ----- 42.- Para obtener el valor de un "input", primero hacemos una función "handleSubmit" y usamos el preventDefault() para evitar que envie los datos  ----- ----- 

//^ ----- ----- 42,1.- y creamos un estado que sera el valor del input, y una función del estado que tomara el valor del input ----- ----- 

// const [inputTask, setInputTask] = useState('')

// const handleInput = (e) => {
//     setInputTask(e.target.value)
// }

// const handleSubmit = (e) => {
//     e.preventDefault();
//     setTask([...tasks, {id: 3, text: inputTask, done: false}])
// }

// <form action="" onSubmit={handleSubmit} >
//     <input
//         type="text"
//         placeholder="Escribe una tarea"
//         value={inputTask}
//         onChange={(e) => handleInput(e)}
//     />
// </form>


//^ ----------------------------------- 
//^ -    IDENTIFICADORES CON "UUID"   - 
//^ ----------------------------------- 

//^ ----- ----- https://www.npmjs.com/package/uuid los "UUID" nos generarán identificadores unicos ----- ----- 

//^ npm install uuid

//^ import { v4 as uuidv4 } from 'uuid';


//^ ----------------------------------- 
//^ -    CREANDO LA LISTA DE TAREAS   - 
//^ ----------------------------------- 

//^ ----- ----- Crearemos 2 componentes, 1 de "TaskList" y otra de "Task" para separar todo mejor ----- ----- 

//^ ----- ----- 43.- en el "TastLisk" usaremos "map" para recorrer cada objeto en el array de las tareas. Recibiremos las "Tasks" del componente "App" donde se creo el estado ----- ----- 

//^ ----- ----- 43,1.- y usamos un ternario para mostrar un mensaje en caso de que no haya tareas ----- ----- 

const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.length ? 
            tasks.map(task => <Task key={task.id} task={task} />)
            :
            <div>
                ~ No hay tareas agregadas ~
            </div>}
        </ul>
    )
}


//^ ----- ----- 44.- y en el componente "Task" le pasaremos lo que recorrio el "map" y le pasaremos las propeidades de cada objeto ----- ----- 

//^ ----- ----- 44,1.- tambien le añadiremos "Font Awesome" ----- ----- 

const Task = ({ task }) => {
    return (
        <li>
            <FontAwesomeIcon icon={faCheckSquare}/>
            <div>
                {task.text}
            </div>
        </li>
    )
}


//^ ----------------------------------- 
//^ -      FORMULARIO EDITAR TAREAS   - 
//^ ----------------------------------- 

//^ ----- ----- Vamos a usar un estado para saber si "editTask" es verdadero, si lo es mostraremos el formulario para editar tareas con un ternario, y si es falso mostramos el "task.text" ----- ----- 

//^ ----- ----- 45.- Podemos cambiar el estado del "editTask" añadiendole un "OnClick" al "Icono" ----- ----- 

<FontAwesomeIcon
    icon={faEdit}
    className='task-list__icon task-list__icon-action'
    onClick={() => setEditTask(!editTask)}
/>


//^ ----- ----- 46.- Como siempre, para trabajar con "formularios" dentro de "React" hay que añadir la propiedad de "value" y "onChange" al "input text", y crear un estadoFN que ira dentro del "onChange", y el estado dentro del "value" ----- ----- 

//^ ----- ----- 47.- El estado "ediTask" tambien lo pondremos dentro del "handleSubmit" para que se active el "edit"  ----- ----- 

// const [newTask, setNewTask] = useState(task.text)
// const [editTask, setEditTask] = useState(false)

// <input 
//     value={newTask} 
//     onChange={(e) => setNewTask(e.target.value)}
// />

const handleSubmit = (e) => {
    e.preventDefault()
    setEditTask(false)
}

{editTask ?
    <form action="" onSubmit={handleSubmit} >
        <input type="text" value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Actualizar</button>
    </form>
    : task.text // eslint-disable-line
}
<div>
    <FontAwesomeIcon icon={faEdit} onClick={() => setEditTask(!editTask)}/>
</div>


//^ ----------------------------------- 
//^ -   FUNCIÓN PARA COMPLETAR LAS TAREAS - 
//^ ----------------------------------- 

