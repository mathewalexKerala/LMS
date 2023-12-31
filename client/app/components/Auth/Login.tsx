'use client'
import  React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import {AiOutlineEye,AiOutlineEyeInvisible,AiFillGithub} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { styles } from '@/app/styles/style';
type Props = {
setRoute : (route:string)=>void
}
const schema = Yup.object().shape({
    email:Yup.string().email('Invalid email!').required('Please enter your email'),
    password:Yup.string().required('Please enter your password!').min(6)
})
const Login =(props:Props) =>{
    const [show,setShow]= useState(false)


    const formik = useFormik({
        initialValues:{email:'',password:""},
        validationSchema:schema,
        onSubmit:async({email,password})=>{
            console.log(email,password)
        }
    })

    const {errors,touched,values,handleChange,handleSubmit} = formik
  return (
    <div className='w-full'>
        <h1 className={`${styles.title}`}>
            Login with Elearning

        </h1>
      <form onSubmit={handleSubmit}>
        <label className={`${styles.label}`} htmlFor='email'>
            Enter your email
        </label>
        <input type='email'
        name=''
        value={}
      </form>
    </div>
  );
}

export default Login
