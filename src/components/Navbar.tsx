import Image from 'next/image'
function Navbar() {
  return (
    <div>
      <nav className="flex flex-row bg-slate-300 py-3 ">
        <div className="flex flex-row w-screen">
          <Image
            src="/img/piano-icon.png"
            width={35}
            height={35}
            className="flex bg-white"
          ></Image>
        </div>
        <div>
          <ul className="flex flex-row justify-center items-center space-x-4  ">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
