import Image from 'next/image'
const Home = () => {
  return (
    <div>
      <div className="flex flex-col m-6 justify-center items-center h-[calc(100vh-3em)] w-[calc(100vw-3em)] border border-black">
        <Image
          src="/img/piano-icon.png"
          width={40}
          height={40}
          alt="icon"
          className="mb-4"
        ></Image>
        <div className="font-bold text-3xl">Pianote</div>
        <div className="mt-2 text-gray-700 text-sm">
          Pianote is a website that allows you to transpose piano chords and
          melodies based on key.
        </div>
        <div className="mt-4 font-bold">
          <a href="/home">Enter &gt;</a>
        </div>
      </div>
    </div>
  )
}
export default Home
