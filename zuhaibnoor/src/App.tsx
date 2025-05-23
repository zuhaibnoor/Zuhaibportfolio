import './index.css'
import Navbar from './components/Navbar'
import './App.css'
function App() {
 return(
    <>
    <div className='h-screen bg-[#00000D] z-[999]' id = "hero">
        <Navbar/>

        {/* hero section start */}
        <div className = 'flex flex-row h-full w-full items-center justify-center'>
            <div className=''>
                <img src='./profile.png' className='rounded-[50%]'/>
            </div>
            <div className='flex flex-col '>
                <div className='p-5 text-white font-[700] text-[50px]'>
                <div className='text-white text-[20px] font-normal'><div className='inline text-[18px] text-[#7ABA78]'>{"</> "}</div>👋 Hi, I am</div>    
                    Zuhaib <div className='inline text-[#7ABA78]'>Noor</div>
                </div>
                <div className='text-white text-[20px]'>& I am a developer! <div className='inline text-[18px] text-[#7ABA78]'>{"</>"}</div></div>
            </div>

        {/* hero section end */}
        </div>

        
    </div>

        {/* About me start */}

        <div className='bg-[#00000D] p-2 md:p-10 sm:h-[60vh] md:h-[110vh] lg:h-[70vh]' id='about'>
            <div className='bg-[#171716] m-auto w-[95%] sm:w-[70%] h-full p-5 md:p-10  rounded-xl'>
                <h1 className='text-white text-center font-bold text-[40px] md:text-[50px]'>{"< "}About <div className=' inline text-[#7ABA78]'>Me</div>{" />"}</h1>
                <p className='text-center text-white text-[20px] pt-10 text-center tracking-wide leading-[2] md:leading-[3] lg:leading-[2] family-courier md:pt-3'>Code, creativity, and curiosity—that’s my world.
                     As a Computer Systems Engineering student, <br/>I love building smart solutions, whether it’s crafting sleek software or optimizing systems. Always exploring, always learning—let’s create something awesome! 🚀</p>

                <div className='text-center pt-10 hover:drop-shadow-[0_3px_3px_rgba(240,240,240,0.25)]'>
                    <a href="./zuhaibs-resume.pdf" download className='bg-[#7ABA78] text-white font-bold py-2 px-4 rounded italic  hover:text-[#000000]'>
                        My Resume!
                    </a>
                </div>

            </div>
        </div>

        {/* About me end */}

        {/* projects start */}
        <div className='h-[170vh] md:h-[120vh] bg-[#00000D]' id = "projects">
            <div className='bg-[#171716] m-auto w-[80%] h-full p-5 rounded-xl w-[93%] sm:w-[66.5%]  h-full md:p-10'>
                <h1 className='text-white text-center font-bold text-[30px] md:text-[40px]'>{"< "}My<div className=' inline text-[#7ABA78]'> Projects</div>{" />"}</h1>
                
                <div className='flex flex-col pt-10 h-full'>
                    
                    {/* project 1 */}
                    <div className='border bg-[#00000D] rounded-xl h-[30%] md:h-[30%] m-2'>
                        <h1 className='text-white text-center font-[700] text-[30px] italic'>Taskify</h1>
                        <div className='text-white text-center p-5 pt-5 family-courier lg:leading-9'>A sleek and efficient task manager built with Python's CustomTkinter, blending simplicity with a modern UI. Designed for productivity, it offers an intuitive experience to keep track of tasks effortlessly.</div>
                        <div className='text-center'><a href="https://github.com/zuhaibnoor/Taskify" target='_blank' className='bg-[#7ABA78] text-white family-courier py-2 px-4 rounded  hover:text-[#000000] text-center hover:drop-shadow-[0_3px_3px_rgba(240,240,240,0.25)]'>
                        Check it out!
                        </a></div>
                    </div>
                    
                    {/* project 2 */}
                    <div className='border bg-[#00000D] rounded-xl h-[30%] md:h-[30%] m-2'>
                        <h1 className='text-white text-center font-[700] text-[25px] md:text-[30px] italic'>FlashMind</h1>
                        <div className='text-white text-center p-5 pt-5 family-courier lg:leading-9'>FlashMind: An intuitive full-stack web application built with Flask, leveraging MongoDB and AI to help users create, organize, and study personalized flashcards for effective learning.</div>
                        <div className='text-center'><a href="https://github.com/zuhaibnoor/FlashMind" target='_blank' className='bg-[#7ABA78] text-white family-courier py-2 px-4 rounded  hover:text-[#000000] text-center hover:drop-shadow-[0_3px_3px_rgba(240,240,240,0.25)]'>
                        Check it out!
                        </a></div>
                    </div>                    
                    

                    {/* project 3
                    <div className='border bg-[#00000D] rounded-xl h-[25%] md:h-[30%] m-2'>
                        <h1 className='text-white text-center font-[700] text-[25px] md:text-[30px] italic'>Hangman</h1>
                        <div className='text-white text-center p-5 pt-5 family-courier lg:leading-9'>Hangman, a classic word-guessing game, was one of my first Python projects when I started learning to code, making it a fun way to explore logic and problem-solving.</div>
                        <div className='text-center'><a href="https://github.com/zuhaibnoor" target='_blank' className='bg-[#7ABA78] text-white family-courier py-2 px-4 rounded  hover:text-[#000000] text-center hover:drop-shadow-[0_3px_3px_rgba(240,240,240,0.25)]'>
                        Check it out!
                        </a></div>
                    </div> */}

                </div>

            </div>
        </div>
        {/* projects end */}


        {/* Contact me start */}
        <div className='h-[40vh] bg-[#00000D] pt-10' id="contact">
            <div className='bg-[#171716] m-auto w-[80%] h-full p-5 rounded-xl w-[93%] sm:w-[66.5%] h-full md:p-10'>
                <h1 className='text-white text-center font-bold text-[28px] md:text-[30px]'>{"< "}Connect with<div className='inline text-[#7ABA78]'> Me</div>{" />"}</h1>
                <div className='flex flex-row h-[70%] w-[80%] items-center justify-around  m-auto'>
                    <div className='text-center'>
                        <a href="mailto:zuhaibnoor2003@gmail.com">
                            <img src="./gmail.svg" alt="Gmail" className='h-[50px] w-[50px] hover:drop-shadow-[0_3px_3px_rgba(240,240,240,0.25)] m-3'/>
                        </a>
                        <p className='text-white'>Gmail</p>
                    </div>
                    <div className='text-center'>
                        <a href="https://linkedin.com/in/zohaibnoor">
                            <img src="./linkedin.svg" alt="LinkedIn" className='h-[50px] w-[50px] hover:drop-shadow-[0_3px_3px_rgba(240,240,240,0.25)] m-3'/>
                        </a>
                        <p className='text-white'>LinkedIn</p>
                    </div>
                    <div className='text-center'>
                        <a href="https://github.com/zuhaibnoor">
                            <img src="./github.svg" alt="GitHub" className='h-[50px] w-[50px] hover:drop-shadow-[0_3px_3px_rgba(240,240,240,0.25)] m-3'/>
                        </a>
                        <p className='text-white'>GitHub</p>
                    </div>
                </div>
            </div>
            <div className='text-center bg-[#00000D] text-white family-courier p-4s'>&copy; 2025 Zuhaib Noor</div>
        </div>
        {/* Contact me end */}
  </>
 )
}

export default App
