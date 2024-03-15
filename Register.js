import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik }from 'formik';
import * as yup from "yup";

const Register = () => {
    const validateschema = yup.object({
        name: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
        
    })
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema:validateschema,
        onSubmit: values => {
            alert("success")
            console.log(values);
        },
   
      });
  return (
    <form className='addformm' onSubmit={formik.handleSubmit}>
        <h1>Register</h1>
        <TextField id="outlined-basic" name="name" label="Name" onChange={formik.handleChange}
  value={formik.values.name} variant="outlined"
  onBlur={formik.handleBlur} error={formik.touched.name && formik.errors.name}
  helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}
  />
  
  <TextField id="outlined-basic" name="email" label="email" onChange={formik.handleChange}
  value={formik.values.name} variant="outlined"
  onBlur={formik.handleBlur} error={formik.touched.name && formik.errors.name}
  helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}
  />
  
  <TextField id="outlined-basic" name="password" label="password" onChange={formik.handleChange}
  value={formik.values.name} variant="outlined"
  onBlur={formik.handleBlur} error={formik.touched.name && formik.errors.name}
  helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}
  />
  
        <Button variant="contained" type='submit'>Outlined</Button>
    </form>
  )
  }
  
  export default Register;