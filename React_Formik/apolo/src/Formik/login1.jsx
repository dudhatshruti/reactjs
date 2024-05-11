import React from 'react'
import { useFormik } from 'formik'

const initialValues = {
    firstname:'',
    lastname:'',
    email:'',
    password:''
}

const onSubmit = values => {
    console.log('form data' , values);
}

const validate = values => {
    let error = {}
    if(!values.firstname){
        error.firstname = 'Required'
    }
    if(!values.lastname){
        error.lastname = 'Required'
    }
    if(!values.email){
        error.email = 'Required'
    }else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        error.email = 'Invalid email address';
      }
    if(!values.password){
        error.password = 'Required'
    }

    return error

}

const Login = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log('formik data' , formik.values)
    console.log('form error' , formik.errors)

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className=''>
                <div className='form-control'>
                    <label className='block' htmlFor="firstname">FirstName</label>
                    <input value={formik.values.firstname} onChange={formik.handleChange}  type="text" name="firstname" id="firstname" />
                    {formik.errors.firstname ? <div className="error">{formik.errors.firstname}</div> : null}
                </div>
                <div className='form-control'>
                    <label className='block' htmlFor="lastname">LastName</label>
                    <input value={formik.values.lastname} onChange={formik.handleChange}  type="text" name="lastname" id="lastname" />
                    {formik.errors.lastname ? <div className="error">{formik.errors.lastname}</div> : null}
                </div>
                <div className='form-control'>
                    <label className='block' htmlFor="email">E-mail</label>
                    <input value={formik.values.email} onChange={formik.handleChange}  type="email" name="email" id="emial" />
                    {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>
                <div className='form-control'>
                    <label className='block' htmlFor="password">Password</label>
                    <input value={formik.values.password} onChange={formik.handleChange}  type="password" name="password" id="password" />
                    {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login
