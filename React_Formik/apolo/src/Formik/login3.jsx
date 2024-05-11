import React from 'react'
import { Formik, Form, Field, useFormik, ErrorMessage} from 'formik'
import * as Yup from 'yup'

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


const validationSchema  = Yup.object({
    firstname:Yup.string().required('required'),
    lastname:Yup.string().required('required'),
    email:Yup.string().email('invalide email formate').required('required'),
    password:Yup.string().required('required'),

})

const Login3 = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    // console.log('formik data' , formik.values)
    // console.log('form error' , formik.errors)
    console.log('form blur', formik.touched);

    return (
        <div>
            <Formik initialValues={{initialValues}} onSubmit={onsubmit} validationSchema={validationSchema}>
            <Form  className=''>
                <div className='form-control'>
                    <label className='block' htmlFor="firstname">FirstName</label>
                    <Field    type="text" name="firstname" id="firstname" />
                    <ErrorMessage firstname="firstname"></ErrorMessage>
                </div>
                <div className='form-control'>
                    <label className='block' htmlFor="lastname">LastName</label>
                    <Field  type="text" name="lastname" id="lastname" />
                    <ErrorMessage lastname="lastname"></ErrorMessage>

                </div>
                <div className='form-control'>
                    <label className='block' htmlFor="email">E-mail</label>
                    <Field    type="email" name="email" id="emial" />
                    <ErrorMessage email="email"></ErrorMessage>

                </div>
                <div className='form-control'>
                    <label className='block' htmlFor="password">Password</label>
                    <Field   type="password" name="password" id="password" />
                    <ErrorMessage password="password"></ErrorMessage>
                    
                </div>
                <button className='btn' type="submit">Submit</button>
            </Form>
            </Formik>
        </div>
    )
}

export default Login3
