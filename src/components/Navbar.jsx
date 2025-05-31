

const Navbar = () => {
  return (
    <>
      <nav className='bg-gradient-to-r from-violet-950 to-[#2D336B] bg-clip-padding sticky top-0 p-4 w-full h-15 hidden xl:flex'>
        <ul className='flex items-center gap-4'>
          <li className='font-sans cursor-pointer text-xl bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent hover:font-bold transition-all'>Home</li>
          <div className='font-sans font-bold ml-137 text-2xl bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 bg-clip-text text-transparent select-none'>GOTask</div>
          <li className='font-sans cursor-pointer ml-137 text-xl bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent hover:font-bold transition-all'>About</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
