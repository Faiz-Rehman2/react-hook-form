import React from 'react'
import { useForm } from 'react-hook-form';

  function AdmissionForm() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    return (
      <form className='flex justify-center flex-col items-center mt-10'
       onSubmit={handleSubmit((data) => console.log(data))}>
        <label className='flex flex-col text-center'  htmlFor="#fullName">Full Name
        <input id='fullName' placeholder='Full Name' type='text' className='mt-2 mb-2 p-3 mr-4 ml-4 w-96' {...register('fullName', { required: true })} /></label>
        {errors.fullName && <p className='flex flex-col' >Full name is required.</p>}

        <label  className='flex flex-col  text-center' htmlFor="#fatherName" >Father Name
        <input id='fatherName' placeholder='Father Name' type='text' className='mt-2 mb-2 p-3 mr-4 ml-4 w-96' {...register('fatherName', { required: true })} /></label>
        {errors.fatherName && <p className='flex flex-col' >Father name is required.</p>}

        <label  className='flex flex-col  text-center' htmlFor="#email" >Email
        <input id='email' placeholder='Email' type='email' className='mt-2 mb-2 p-3 mr-4 ml-4 w-96' {...register('email', { required: true })} /></label>
        {errors.email && <p className='flex flex-col' >email is required.</p>}

        <label  className='flex flex-col  text-center' htmlFor="#phoneNumber" >Phone Number
        <input id='phoneNumber' placeholder='Phone Number' type='number' className='mt-2 mb-2 p-3 mr-4 ml-4 w-96' {...register('phoneNumber', { required: true })} /></label>
        {errors.phoneNumber && <p>Phone Number is required.</p>}

        <label  className='flex flex-col  text-center' htmlFor="#cnic" >CNIC
        <input id='cnic' placeholder='National ID Card Number' type='number' className='mt-2 mb-2 p-3 mr-4 ml-4 w-96' {...register('national_id', { required: true })} /></label>
        {errors.national_id && <p>National Id is required.</p>}

        <label  className='flex flex-col  text-center' htmlFor="#dob" >Date of Birth
        <input id='dob' placeholder='dd/mm/yy' type='date' className='mt-2 mb-2 p-3 mr-4 ml-4 w-96' {...register('birthday', { required: true })} /></label>
        {errors.birthday && <p>Date of Birth is required.</p>}

        <label  className='flex flex-col  text-center' htmlFor="#gender" >Gender
        <input id='gender' placeholder='Gender' className='mt-2 mb-2 p-3 mr-4 ml-4 w-96' {...register('gender', { required: true }) } /></label>
        {errors.gender && <p>Gender is required.</p>}




        <label className='flex flex-col  text-center' htmlFor="#age">Age
        <input id='age' placeholder='Age' className='mt-2 mb-2 p-3 mr-4 ml-4 w-96' {...register('age', { pattern: /\d+/ })} /></label>
        {errors.age && <p>Please enter number for age.</p>}


        <input className='mt-2 font-bold text-2xl border-2 p-2 rounded-md' type="submit" />

      </form>
    );
  }

export default AdmissionForm