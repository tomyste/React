import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"


export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
      username: '',
      email: '',
      password: ''
    });

    // const { username, email, password} = formState
    return (
      <>
          <h1>Form FormWithCustomHook</h1>
          <hr></hr>

          <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={ onInputChange } />

          <input type="email" className="form-control mt-2" placeholder="tomas@hotmail.com" name="email" value={email} onChange={ onInputChange }/>

          <input type="password" className="form-control mt-2" placeholder="contraseña" name="password" value={password} onChange={ onInputChange }/>

          <button onClick={onResetForm} className="btn btn-dark mt-2">Borrar</button>

    
            

          
      </>
    )
}
