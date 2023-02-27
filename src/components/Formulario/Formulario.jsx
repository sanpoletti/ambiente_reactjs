import React, { useState} from 'react'
import './Formulario.css'

const Formulario = () => {

  const [form, setForm] =useState({
    email:'',
    password:'',
    
  })



  const {email, password} = form

  const handleChange = (e) => {
    const {name, value} =  e.target
    setForm({
      ...form,
      [name]:value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    setForm({
      email:'',
    password:''
    })
  }


  return (
    <div>
    <form onSubmit={handleSubmit} >
      <h1>Formulario</h1>
      <input onChange={handleChange} value={email} name='email' placeholder='usuario@gmail.com' type ='email' required/>
      <input onChange={handleChange} value={password} name='password' placeholder='*******' type ='password' required/>
      <button type='submit'>Enviar </button>
    </form>
    </div>
    
  )
}

export default Formulario
