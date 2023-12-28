import React from 'react'
import bgImg from '../assets/img1.jpg'
import {useForm} from 'react-hook-form';

export default function Form() {
    const{register, handleSubmit, watch, formState:{errors}}=useForm()
    const onSubmit = data=>console.log(data);
  return (
    <section>
        <div className='register'>
            <div className='col-1'>
                <h2>Sign In</h2>
                <span>Register</span>
                <form id='form' className='flex flex-col'>
                    <input type='text' {...register('username')} placeholder='username'/>
                    <input type='password' {...register('password')} placeholder='password'/>
                    <input type='password' {...register('confirmPwd')} placeholder='confirm password'/>
                    <input type='text' {...register('mobile', {required : true, maxLength: 10})} placeholder='mobile number'/>
                    {errors.mobile?.type==="reuired" && "Mobile Number is required"}
                    {errors.mobile?.type==="maxLength" && "Maximum length exceed"}
                    <button className='btn'>Sign In</button>
                </form>
            </div>
            <div className='col-2'>
                <img src={bgImg} />
            </div>
        </div>
    </section>
    
  )
}
