import Navbar from '@/components/Navbar'
import SearchBox from '@/components/Home/SearchBox'
import PopularSongs from '@/components/Home/PopularSongs'
import Image from 'next/image'
const Page = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <div>Home Page</div> */}
      <div className="h-72 ">
        <Image
          src="/img/piano-banner-2.jpg"
          width={2558}
          height={1080}
          className="w-full h-full object-cover"
          alt="banner"
        ></Image>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-6 text-3xl font-bold">Find your favorite song!</div>
        <SearchBox></SearchBox>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="mt-6 text-2xl font-medium">Popular Songs</div>
      </div>
      <PopularSongs></PopularSongs>
    </div>
  )
}

export default Page
