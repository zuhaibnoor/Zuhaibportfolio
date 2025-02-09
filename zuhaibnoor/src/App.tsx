import './index.css'
import Navbar from './components/Navbar'
function App() {
 return(
    <>
    <div className='h-screen bg-[#00000D]'>
        <Navbar/>

        {/* hero section start */}
        <div className = 'flex flex-row h-full w-full items-center justify-center'>
            <div>
                <img src='./profile.png' className='rounded-[50%]'/>
            </div>
            <div className='flex flex-col'>
                <div className='p-5 text-white font-[700] text-[50px]'>
                <div className='text-white text-[20px]'>Hi, i am</div>    
                    Zuhaib <div className='inline text-[#7ABA78]'>Noor</div>
                </div>
                <div className='text-white text-[20px]'>& I am a developer!</div>
            </div>

        {/* hero section end */}
        </div>

        
    </div>

        {/* About me start */}

        <div className='h-screen bg-[#00000D] p-10'>
            <div className='bg-[#171716] m-auto w-[70%] h-full p-10'>
                <h1 className='text-white text-center font-bold text-[50px]'>{"< "}About <div className=' inline text-[#7ABA78]'>Me</div>{" />"}</h1>
                <p className='text-center text-white'></p>
            </div>
        </div>

        {/* About me end */}

        {/* projects start */}
        <div className='h-screen bg-[#00000D] p-10'>
            <div className='bg-[#171716] m-auto w-[70%] h-full p-10'>
                <h1 className='text-white text-center font-bold text-[50px]'>{"< "}My<div className=' inline text-[#7ABA78]'>Projects</div>{" />"}</h1>
                <div></div>
            </div>
        </div>
        {/* projects end */}


        {/* Contact me start */}
        <div className='h-[70vh] bg-[#00000D] p-10'>
            <div className='bg-[#171716] m-auto w-[70%] h-[60vh] p-10'>
                <h1 className='text-white text-center font-bold text-[50px]'>{"< "}Contact<div className=' inline text-[#7ABA78]'> Me</div>{" />"}</h1>
                <div></div>
            </div>
        </div>
        {/* Contact me end */}
  </>
 )
}

export default App
