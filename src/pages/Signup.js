import React from 'react'
import back from '../picture/back.png'
const Signup = () => {
  return (
 <>
    <div className= {`flex justify-center items-center w-[100vw] h-[100vh] bg-[url('${back}')] bg-cover absolute blur brightness-50`}>
    </div>

    <div className=' w-[30vw] h-[75vh] rounded-3xl flex flex-col absolute top-[10vh] left-[40vw] bg-white' >
    <h1 className='mt-[8vh] font-semibold my-4 text-xl mx-[3.5vw] '>SIGN UP</h1>
    <input type='text' placeholder='Full Name' className='py-[2vh] mb-[2vh] mx-[2.5vw] pl-4 rounded-xl bg-gray-200'></input>
     <input type='text' placeholder='Email' className='py-[2vh] mb-[2vh] mx-[2.5vw] pl-4 rounded-xl bg-gray-200'></input>
      <input type='text' placeholder='Password' className='py-[2vh] mb-[2vh] mx-[2.5vw] pl-4 rounded-xl bg-gray-200'></input>
    <button className='width-[10vw] mx-[2.5vw] py-3 bg-black text-white text-xl rounded-xl'>Sign up</button>
      <div className='flex flex-row rounded-xl border-black border-2 w-[25vw] ml-[2.5vw] mt-2'>
      <div className=" mt-6 ml-[5vw]">
        <img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg' alt=''></img>
      </div>
      <button className='width-[10vw] mr-[2.5vw] py-3 text-xl  mt-[2vh]'>Continue using Google</button>
      </div>
      <a href="/signup" className='text-center mt-1 underline text-black decoration-black' >Already Registered? Sign in</a>
    </div>
 
 </>
  )
}

export default Signup
