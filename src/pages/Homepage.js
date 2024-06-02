import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
   return (
    <>
      <div className='main flex flex-col'>
      <div
        id="nav"
        className="text-black gap-[10vw] flex flex-row  z-50 bg-zinc-100 py-[4vh]"
      >
        <div className="pl-[10vw] hover:scale-125 font-bold text-2xl hover:cursor-default">
          <Link to="/">VOGUEISH</Link>
        </div>
        <div className="nav gap-[4vw] hidden md:flex flex-row font-medium">
          <h2 className="cursor-pointer hover:underline decoration-zinc-800 text-xl">
            <Link to="#home">Home</Link>
          </h2>
          <h2 className="cursor-pointer hover:underline decoration-zinc-800 text-xl">
            <Link to="#about">About us</Link>
          </h2>
          <h2 className="cursor-pointer hover:underline decoration-zinc-800 text-xl">
            <Link to="#project">Blog</Link>
          </h2>
          <h2 className="cursor-pointer hover:underline decoration-zinc-800 text-xl">
            <a href="#contact">Contact</a>
          </h2>
        </div>
        <div className="flex flex-row gap-[4vw]">
          <div className="flex flex-row gap-[1vw]">
            <h1>
              <i className="fa-solid fa-magnifying-glass text-2xl"></i>
            </h1>
            <h1>
              <input
                type="text"
                className="rounded-full border-2 w-[15vw] border-black pl-2 py-1 focus:border-black"
                placeholder="Search"
              />
            </h1>
          </div>
          <h1>
            <i className="fa-solid fa-cart-shopping text-2xl"></i>
          </h1>
          <h1>
            <i className="fa-solid fa-user text-2xl"></i>
          </h1>
        </div>
      </div>
      <div className="text-black">
        <img
          className="w-[100vw] h-[90vh]"
          src='https://imgs.search.brave.com/U0-55rXZRueMSKuZfFoGnabIUthDtYlGMYJvUZjA3ls/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NDUyMDUxNzAyMzAt/MDUzYjgzMDE2MDUw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRKOGZH/WmhjMmhwYjI1OFpX/NThNSHg4TUh4OGZE/QT0'
          alt="Description"
        />
      </div>
    
  </div>
    </>
  );
}

export default Homepage
