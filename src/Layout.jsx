import React from 'react'
import Navbar from './components/Navbar'

import "./index.css";
import { Link } from 'react-router-dom';
import AdmissionForm from './components/AdmissionForm';

const Layout = () => {
  return (
    <>

    <Navbar />
    
    <div className='flex justify-center flex-row'>
        <ul className='flex justify-center flex-row mt-3 gap-5'>
           <Link to={"/"}> <button className='text-xl border-solid border-2 p-4 rounded-xl font-bold text-cyan-50 bg-cyan-950  hover:cursor-pointer'><li>Admission Form</li></button></Link>
           <Link to={"./#"}> <button className='text-xl border-solid border-2 p-4 rounded-xl font-bold text-cyan-50 bg-cyan-950 hover:cursor-pointer'><li>Verify Admission</li></button></Link>
        </ul>
    </div>
    
<AdmissionForm />






    </>

  )

}

export default Layout