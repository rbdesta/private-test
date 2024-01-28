import {BsFillMoonStarsFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import randolfCv from './assets/images/RANDOLF-CV.pdf';

export default function Navbar(){
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm px-8 md:px-20 lg:px-40 py-4 flex justify-between items-center z-50">
            <h1 className="text-lg font-bold">Randolf</h1>

            <div className="">
                <NavLink to='/private-test/' className="link me-5">Home</NavLink>
                <NavLink to='/private-test/about' className="link me-5">About</NavLink>
                <NavLink to='/private-test/projects' className="link me-5">Projects</NavLink>
            </div>

            <ul className="flex items-center">
                <li><BsFillMoonStarsFill /></li>
                <a 
                    className="px-4 py-2 bg-blue-500 rounded-md ml-8 text-white" 
                    href={randolfCv}
                    rel='noopener noreferrer'
                    target='_BLANK'
                    download
                >
                    Download CV
                </a>
            </ul>
        </nav>
    )
}