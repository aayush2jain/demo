import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='main bg-black h-[100vh] w-full'>
      <div id="nav"
                className="text-black gap-[10vw] flex flex-row fixed w-[100vw] top-0 z-50  bg-zinc-100 py-[4vh]">
                <div className="pl-[10vw] hover:scale-125 font-bold text-2xl hover:cursor-default"><Link>VOGUEISH</Link></div>
                <div className="nav gap-[4vw] hidden md:flex flex-row font-medium">
                    <h2 className=" cursor-pointer hover:underline decoration-zinc-800 text-xl "><Link href="#home"
                            >Home</Link></h2>
                    <h2 className="  cursor-pointer hover:underline decoration-zinc-800 text-xl "><Link href="#about"
                          >About us</Link></h2>
                    <h2 className="cursor-pointer hover:underline decoration-zinc-800 text-xl "><Link href="#project"
                           >Blog</Link></h2>
                    <h2 className=" cursor-pointer hover:underline decoration-zinc-800 text-xl "><a href="#contact">
                        Contact</a></h2>
                </div>
                <div className='flex flex-row gap-[4vw]' >
                    <div className='flex flex-row gap-[1vw]'>
                    <h1><i class="fa-solid fa-magnifying-glass text-2xl"></i></h1>
                    <h1><input type='text' className='rounded-full border-2 w-[15vw] border-black pl-2 py-1 focus:border-black' placeholder='Search'></input></h1>
                    </div>
                    <h1><i className="fa-solid fa-cart-shopping text-2xl"></i></h1>
                    <h1><i className="fa-solid fa-user text-2xl"></i></h1>
                </div>
            </div>
         <div>
            hello bolo
         </div>
            </div>
  )
}

export default Homepage
