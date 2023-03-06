
const About = () => {
  return (
    <div 
    // style={{ backgroundImage: `url(${ Background })`}} 
    className='flex bg-[url("./assets/images/shelf.jpg")] justify-center bg-cover bg-fixed'
    >
      <div className='flex flex-grow place-items-start h-screen w-screen m-10'>          
          <div className='flex flex-column justify-center bg-black w-screen m-20 bg-opacity-70 h-fit'>
            <h1 className='p-5 text-orange-100 text-xl rounded font-extrabold text-center'>

              {/* TODO: Align the title */}
                About The Whiskey Shelf
                <br />
                <p className='leading-loose font-normal text-white'>
                <br />The Whiskey Shelf is designed to be a place for you to keep track of whiskeys. 
                  <br />Now, when you hear of or try a new whiskey, you can simply add it to your Whiskey Shelf
                  for a reference. 
                  <br />No longer will you have to try to remember what that whiskey was your tried on vacation 
                  six years ago, or what the name of the distillery was that the guy on the YouTube video mentioned. 
                  <br />You have them all in one place: The Whiskey Shelf. 
                </p>
            </h1>
            
          </div>
        
        
      </div>
    </div>
     
  )
}

export default About