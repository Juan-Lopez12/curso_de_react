import React, { useState } from 'react' // eslint-disable-line
import styles from './FormSession.module.css'
import Button from '../elements/Button'

const FormSession = ({ changeSession }) => { // eslint-disable-line
    const [user, changeUser] = useState('')
    const [password, changePassword] = useState('')

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

    return (
        <form action="" onSubmit={onSubmit} className={styles.formulario}>
            <h1>No haz iniciado sesion</h1>
            <div>
                <label htmlFor="user" className={styles.label}>Usuario</label>
                <input 
                    type="text" 
                    name="user" 
                    id="user" 
                    value={user}
                    onChange={onChange}
                    className={styles.input}
                />
            </div>
            <div>
                <label htmlFor="password" className={styles.label}>Contraseña</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={onChange}
                    className={styles.input}
                />
            </div>
            <div>
                <Button $long type='submit'>Iniciar Sesion</Button>
            </div>
        </form>
    )
}

export default FormSession