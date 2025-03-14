import React from 'react'
import Link from 'next/link'
import { FaArrowRight, FaBookOpen } from 'react-icons/fa'

const title = (
    <>
        Read, listen, discover.
        <br />
        All in one app.
    </>
);
const description = (
    <>
        Apple Books is the single destination to find, buy, and dive into audiobooks and ebooks. Browse curated collections and get personalized recommendations. Share your books with up to five family
        members.* All with no subscription or monthly commitment.
    </>
);

export const Hero = () => {
    return (
        <>
            {/*<div className='text-center flex flex-col justify-center items-center'>
            <h1 className='text-title font-bold mb-2'>Welcome to Book Store</h1>
            <p className='text-subtitle'>my store is the best</p>
            <Link href="#" className="capitalize">get started</Link>
        </div>*/}

            <section className=" dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <FaBookOpen className="mx-auto mb-4 text-8xl text-white bg-orange-400 dark:bg-transparent dark:border-orange-400 dark:border dark:text-orange-400 py-3 px-4 rounded-3xl" />
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        {title}
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                        {description}
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link
                            href="#"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            Get started
                            <FaArrowRight className="ms-2" />
                        </Link>
                        <Link
                            href="#"
                            className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}