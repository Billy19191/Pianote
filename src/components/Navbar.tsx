import Image from 'next/image'
function Navbar() {
  return (
    <div>
      <nav className="flex flex-row py-3 px-6 w-screen">
        <div className="flex flex-row justify-start">
          <Image
            src="/img/piano-icon.png"
            width={30}
            height={30}
            className="bg-white"
            alt="Pianote Logo"
          ></Image>
          <div className="flex flex-row justify-center items-center text-lg font-bold ml-3">
            Pianote
          </div>
        </div>
        <div className="flex flex-row flex-grow"></div>
        <div className="flex flex-row justify-end">
          <ul className="flex flex-row justify-center items-center space-x-5">
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
