import React from 'react'
import { useFormik } from 'formik'

const FormikForm = () => {

  const formik = useFormik({
    initialValues:{
      firstname:'',
      lastname:"",
      email:"",
      password:""
    },
    onSubmit: values=>{
      console.log('form data', values);
    },
    validate: values=>{
      let error = {}
      if (!values.firstname) {
        error.firstname = 'Required'
      }
      if (!values.lastname) {
        error.lastname = 'Required'
      }
      if (!values.email) {
        error.email = 'Required',
        else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }
      if (!values.password) {
        error.password = 'Required'
      }
      
    }
  })

  console.log('formik data',formik.values);
  console.log('form error', formik.errors);

  return (

    <>
    <div className=' mt-4  border-2 border-purple-300 w-min m-auto p-12'>
      <div className='underline'>Submit Form</div>

      <label htmlFor="firstname" className=' text-[18px]' >First Name: </label>
      <input type="text" value={formik.values.firstname} onChange={formik.handleChange}  name='firstname' id='firstname' placeholder='First Name' className='outline-0 border-2 border-black w-52 mb-3'/>

      <label htmlFor="lastname" className=' text-[18px]'>Last Name: </label>
      <input type="text" value={formik.values.lastname} onChange={formik.handleChange} name='lastname' id='lastname'placeholder='Last Name'  className='outline-0 border-2 border-black text-[18px] w-52 mb-3'/>

      <label htmlFor="email" className=' text-[18px]'>Email: </label>
      <input type="email"value={formik.values.email} onChange={formik.handleChange}  name='email' id='email'placeholder='Enter Email'  className='outline-0 border-2 border-black text-[18px] w-52 mb-3' />

      <label htmlFor="password" className='text-[18px]'>Password:  </label>
      <input type="password" value={formik.values.password} onChange={formik.handleChange}  name='password' id='password' placeholder='Enter Password'  className='outline-0 border-2 border-black text-[18px] w-52 mb-3'/>

      <button className='btn'>Submit</button>
    </div>
    
    </>


  )
}

export default FormikForm