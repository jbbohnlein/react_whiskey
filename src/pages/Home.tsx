
import Background from '../assets/images/barrels.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed '
      >
        <div className='flex place-items-start h-screen m-40'>
          <h1 className='bg-black bg-opacity-70 h-fit p-5 text-white rounded text-4xl'>Welcome to The Whiskey Shelf
          <p className='flex justify-center text-xl leading-loose'>Your online app for storing your
          favorite whiskeys</p>

          </h1>
          
        </div>
    </div>
  )
}

export default Home