import React from 'react'
import Navbar from './Navbar'

const Project = () => {
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
                {/* <AiFillFacebook />
                <AiFillGithub />
                <AiFillInstagram />
                <AiFillLinkedin /> 
                <AiFillYoutube /> */}
                </div>
            </section>

            <section>
                <h1 className='text-xl font-medium mb-3'>List of Accomplishments</h1>

                <ul className='list-disc'>
                    <li>
                        <p className='font-semibold'>
                            User Authentication and Authorization:
                        </p>
                        <p>
                            Users can register for an account and log in securely.
                            Different levels of access control (admin, user) are implemented to ensure data security and integrity.
                        </p>
                    </li>
                    <li>
                        <p className='font-semibold mt-3'>Profile Management:</p>
                        <p>
                            Users can create and manage their profiles, including personal information, qualifications, and other relevant details.
                            Admins have the ability to review and approve user profiles, ensuring data accuracy and compliance.
                            Each user is assigned a unique digital ID for identification purposes, which is generated and stored securely within the system.
                        </p>
                    </li>
                    <li>
                        <p className='font-semibold mt-3'>Certificate Generation:</p>
                        <p>
                            The system allows for the generation of certificates in both soft and hard copy formats.
                            Users can request certificates based on their qualifications or achievements.
                            Admins can verify and approve certificate requests before generation.
                            Each certificate includes a unique digital ID linked to the user's profile for verification purposes.
                        </p>
                    </li>
                    <li>
                        <p className='font-semibold mt-3'>Profile Editing:</p>
                        <p>
                            Users and admins can edit profile information as needed, ensuring data remains up-to-date and accurate.
                            Changes made to profiles are logged for auditing purposes.
                        </p>
                    </li>
                    <li>
                        <p className='font-semibold mt-3'>Payment Processing:</p>
                        <p>
                            Integration with payment gateways to facilitate secure online payments for services or certificate issuance.
                            Users can view payment history and invoices within their account.
                        </p>
                    </li>
                    <li>
                        <p className='font-semibold mt-3'>Reporting Functionality:</p>
                        <p>
                            The system generates various reports, including:
                            Payment reports: Summarizes all financial transactions and payments made within a specified period.
                            Applicant statistics: Provides insights into the number of applicants, certificates issued, and program usage over time.
                            Reports can be exported in different formats (e.g., PDF, CSV) for further analysis or distribution.
                        </p>
                    </li>
                    <li>
                        <p className='font-semibold mt-3'>ID Generation:</p>
                        <p>
                            Upon registration, each user is assigned a unique digital ID, which is generated securely within the system.
                            The system also supports the generation of hard copy IDs, which can be printed and distributed to users as needed.
                            Both digital and hard copy IDs are linked to the user's profile for easy identification and verification.
                        </p>
                    </li>
                    <li>
                        <p className='font-semibold mt-3'>Security Measures:</p>
                        <p>
                            Implementation of robust security measures, including encryption, secure authentication protocols, and role-based access control, to protect sensitive data.
                            Regular security audits and updates to ensure compliance with data protection regulations.
                        </p>
                    </li>
                    <li>
                        <p className='font-semibold mt-3'>Scalability and Performance:</p>
                        <p>
                            The system is designed to handle a large volume of users and data efficiently, with scalability options in place to accommodate future growth.
                            Performance optimization techniques are implemented to ensure fast response times and a seamless user experience.
                        </p>
                    </li>
                    <li>
                        <p className='font-semibold mt-3'>User Support and Feedback:</p>
                        <p>
                            Provision of user support channels (e.g., helpdesk, FAQs) for addressing user queries and issues promptly.
                            Feedback mechanisms to gather user input and suggestions for system improvements.
                            This updated version includes ID generation in both digital and hard copy formats, enhancing the system's capabilities for user identification and verification.
                        </p>
                    </li>
                </ul>
            </section>

            <section id='service' className='mt-5'>
                <h1 className='text-xl font-medium'>Services I Offer</h1>
                <p className='mt-1 text-md'>
                    I have experience in building an application and creating application as an integration
                    to provide business and consumer solutions. I offer a wide of service, including Frontend Development.
                    I love to create responsive websites using ReactJS, JavaScript, HTML5, CSS3, Bootstrap, Tailwind, Node js, 
                    and having good coding skills.
                </p>
                <div className='mt-4 flex flex-col md:flex-row gap-8'>
                    <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
                        <p className='text-2xl font-semibold'>Software Development</p>
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

export default Project