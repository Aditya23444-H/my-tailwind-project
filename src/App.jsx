import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='text-gray-400 font-serif'>
        <div className='shadow-lg'>
            <nav className='flex flex-row justify-between'>
                <div>
                    <h1 className='font-bold uppercase p-4 '><a href="/">Food plaza</a></h1>
                </div>
                <ul className='flex-row p-4 flex' id='menu'>
                    <li className='font-bold text-gray-600 px-2 lg:px-4 hover:drop-shadow-lg'><a href="#"><span>Home</span></a></li>
                    <li><a href="#" className='px-2 lg:px-4 hover:drop-shadow-lg'><span>About</span></a></li>
                    <li><a href="#" className='px-2 lg:px-4 hover:drop-shadow-lg'><span>Contact</span></a></li>

                </ul>

            </nav>
        </div>
        <main className='px-6 lg:px-16 py-4 lg:py-8 -z-10'>
            <div className='justify-center flex lg:justify-end'>
                <a href="#" className='text-primary p-1 btn lg:hover:bg-primary lg:hover:text-white  lg:border-2 lg:border-primary transition duration-500 ease-in'>Log in</a>
                <a href="#" className='text-primary p-1 ml-8 btn lg:hover:bg-primary lg:hover:text-white lg:border-2 lg:border-primary transition duration-500 ease-in'>Sign up</a>
            </div>
            <header>
                <h2 className='text-gray-700 text-6xl '>Recepies</h2>
            </header>
            <div>
                <h4 className='font-bold mt-12 pb-2 border-b border-gray-300'>Latest recepies</h4>
                <div className='grid lg:grid-cols-2 lg:gap-10 gap-4'>
                    <div className='card'>
                        <img src="../src/assets/butter-bread.jpg " alt="butter bread" className='image'/>
                        <div className='p-4'>
                            <span className='font-bold text-sm lg:text-lg text-gray-600'>Butter bread </span>
                            <span className='block text-xs lg:text-lg'>Recipe by XYZ</span>
                        </div>
                        <div className='absolute top-0 m-2 left-0'>
                            <span className='bg-yellow-100 text-yellow-950 rounded-full w-fit p-2'>25 min</span>
                        </div>
                    </div>
                    <div className='card'>
                        <img src="../src/assets/noodles.jpg " alt="butter bread" className='image'/>
                        <div className='p-4'>
                            <span className='font-bold text-sm lg:text-lg text-gray-600'>Noodles </span>
                            <span className='block text-xs lg:text-lg'>Recipe by XYZ</span>
                        </div>
                        <div className='absolute top-0 m-2 left-0'>
                            <span className='bg-yellow-100 text-yellow-950 rounded-full w-fit p-2'>25 min</span>
                        </div>
                    </div>
                    <div className='card'>
                        <img src="../src/assets/stew.jpg " alt="butter bread" className='image'/>
                        <div className='p-4'>
                            <span className='font-bold text-sm lg:text-lg text-gray-600'>Stew </span>
                            <span className='block text-xs lg:text-lg'>Recipe by XYZ</span>
                        </div>
                        <div className='absolute top-0 m-2 left-0'>
                            <span className='bg-yellow-100 text-yellow-950 rounded-full w-fit p-2'>25 min</span>
                        </div>
                    </div>
                    <div className='card'>
                        <img src="../src/assets/fried-rice.jpg " alt="butter bread" className='image'/>
                        <div className='p-4'>
                            <span className='font-bold text-sm lg:text-lg text-gray-600'>Fried Rice </span>
                            <span className='block text-xs lg:text-lg'>Recipe by XYZ</span>
                        </div>
                        <div className='absolute top-0 m-2 left-0'>
                            <span className='bg-yellow-100 text-yellow-950 rounded-full w-fit p-2'>25 min</span>
                        </div>
                    </div>
                </div>

                <h4 className='font-bold mt-12 pb-2 border-b border-gray-300'>Most popular recepies</h4>
                <div className='mt-8 border-2 p-2'>

                </div>
                <div className='flex justify-center mt-4'>
                    <div className='bg-yellow-100 text-yeloow-900 font-semibold hover:shadow-inner text-black btn transform ease-out hover:scale-125 transition duration-500'>Load more</div>
                </div>
            </div>

        </main>
    </div>
    </>
  )
}

export default App
