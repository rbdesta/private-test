import React from 'react'
import { useRef } from 'react'

const Contact = () => {
    const form = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className="container bg-gray-100 border-gray-800 rounded shadow-lg p-5">
        <div className="flex items-center justify-start">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <form ref={form} onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name" className="text-sm font-medium leading-6 text-gray-900">Name</label>
                        <input type="text" name="name" id="name" className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6" />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className="text-sm font-medium leading-6 text-gray-900">Email</label>
                        <input type="text" name="email" id="email" className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6" />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="subject" className="text-sm font-medium leading-6 text-gray-900">Subject</label>
                        <input type="text" name="subject" id="subject" className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6" />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="message" className="text-sm font-medium leading-6 text-gray-900">Message</label>
                        <textarea type="text" name="message" id="message" className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6" />
                    </div>
                    <div className='mb-3 text-right'>
                        <button type="submit" className="rounded-md bg-blue-500 px-3 py-2 text-sm text-right font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;