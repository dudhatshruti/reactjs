import React from 'react'
import Home from './Home'
import { useEffect, useState } from 'react'
import { Formik, ErrorMessage, Field, Form } from 'formik'


const Signup = () => {
  const [showhome, setshowhome] = useState(false)
  const [show, setshow] = useState(false)
  const localsignup = localStorage.getItem('signup')
  const localemail = localStorage.getItem('email')
  const localpassword= localStorage.getItem('password')
  const localname = localStorage.getItem('name')


  useEffect(()=>{
    if (localsignup) {
      setshowhome(true)
    }
    if (localemail) {
      setshowhome(true)
    }
  },[localsignup, localemail])

  const handleSignIn = (values, {setSubmitting})=>{
    if (values.email === localStorage && values.password === localpassword) {
      localStorage.setItem('signUp', values.email)
      setSubmitting(false),
        window.location.reload()
    }
    else{
      alert('please enter valid crediantial')
      setSubmitting(false)
    }
  }

  const hanleSignUp = (values , {setSubmitting})=>{
    localStorage.setItem('name', values.name)
    localStorage.setItem('email', values.email)
    localStorage.setItem('password', values.password)

  }

  return (
    <div>Signup</div>
  )
}

export default Signup