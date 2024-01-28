import React from 'react'
import Navbar from './Navbar';
import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillFacebook, AiFillYoutube} from 'react-icons/ai'

const About = () => {
  return (
    <div>
        <Navbar />
        <div className='container pt-40'>
            <section id='home' className='text-center mt-4 flex flex-col justify-center '>
                {/* <div className="mx-auto rounded-full border-2 w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
                <img src={profileImage} layout="fill" objectfit="cover" alt='image_profile' />
                </div>
                <h1 className='text-2xl md:text-2xl font-medium text-blue-500 mb-3'>Randolf Brian Esta</h1> */}
                <h3 className='text-lg md:text-lg font-semibold'>Frontend Developer</h3>
                <p className='text-md py-1 text-gray-800 md:text-xl'>Enthusiastic and motivated self-learning about information technology. Focused on cloud designing, and web development. Now I am looking for more experience in my field. </p>
                <div className='text-5xl py-4 flex justify-center gap-16 text-gray-600'>
                <AiFillFacebook />
                <AiFillGithub />
                <AiFillInstagram />
                <AiFillLinkedin /> 
                <AiFillYoutube />
                </div>
            </section>

            <section id='service' className=''>
                <h1 className='text-xl font-medium'>Services I Offer</h1>
                <p className='mt-1 text-md'>
                    I have experience in building an application and creating application as an integration
                    to provide business and consumer solutions. I offer a wide of service, including Frontend Development.
                    I love to create responsive websites using ReactJS, JavaScript, HTML5, CSS3, Bootstrap, Tailwind, Node js, 
                    and having good coding skills.
                </p>
                <div className='mt-4 flex flex-col md:flex-row gap-8'>
                    <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
                        <h2 className='text-2xl font-semibold'>Software Development</h2>
                        <p className='text-gray-500'>I can help you solve a problem, build a product or grow existing project.</p>
                        <p className='text-xl '>Languages and Tools I Use</p>
                        <ul className='flex flex-col md:flex-row gap-8'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" height="40" alt='html5' />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" height="40" alt='css3' />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40" alt='javascript' />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" height="40" alt='react' />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" width="40" height="40" alt='redux' />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width="40" height="40" alt='nodejs' />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width="40" height="40" alt='nextjs' />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40" height="40" alt='git' />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40" height="40" alt='github' />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="40" height="40" alt='bootstrap' />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="40" height="40" alt='tailwind' />
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default About