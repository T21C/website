import Image from 'next/image'

export default function Home() {
  return (
    <main className="text-center p-24 h-screen">
      <h1 className="text-white text-9xl drop-shadow-2xl">T21<span className="text-transparent bg-gradient-to-tr bg-clip-text from-red-900 to-red-600">+</span>C</h1>
      <h2 className="text-white text-4xl drop-shadow-2xl">The 21 Forums</h2>
      <div className= 'flex w-full justify-center mt-10'><input type="checkbox"></input><span className="text-white ml-1">detailed Level Search</span></div>
      <div className='flex w-full justify-center mt-10 drop-shadow-2xl'>
        <select name="category" className='rounded-l-full p-4 text-xl'>
          <option>Level</option>
          {/*<option>Player</option>*/}
        </select>
        <input className="h-20 p-4 w-96 text-3xl" placeholder="Search" />
        <button className="text-white text-4xl p-4 bg-blue-500 h-20 rounded-r-full w-44">Search</button>
      </div>
    </main>
  )
}
