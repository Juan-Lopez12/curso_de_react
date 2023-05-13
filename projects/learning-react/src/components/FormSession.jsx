import React, { useState } from 'react' // eslint-disable-line
import styles from './FormSession.module.css'
import Button from '../elements/Button'
import Input from '../elements/Input'
import Label from '../elements/Label'
import Form from '../elements/Form'

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
        <Form action="" onSubmit={onSubmit} className={styles.formulario}>
            <h1>No haz iniciado sesion</h1>
            <div>
                <Label htmlFor="user" className={styles.label}>Usuario</Label>
                <Input 
                    type="text" 
                    name="user" 
                    id="user" 
                    value={user}
                    onChange={onChange}
                />
            </div>
            <div>
                <Label htmlFor="password" className={styles.label}>Contraseña</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={onChange}
                />
            </div>
            <div>
                <Button $long type='submit'>Iniciar Sesion</Button>
            </div>
        </Form>
    )
}

export default FormSession