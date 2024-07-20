// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://github.com/Ydv-Kunjesh/React_Router/blob/main/src/Components/images/Brown%20Modern%20Computer%20Programming%20Course%20Instagram%20Post.png?raw=true" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>







<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
<div className="grid grid-cols-1 sm:grid-cols-12 gap-5">

    <div className="sm:col-span-5">
        <Link to="#">
            <div className="bg-cover text-center overflow-hidden"
                style={{ minHeight: '300px', backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1')" }}
                title="Woman holding a mug">
            </div>
        </Link>
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between">
            <div>
                <Link to="#" className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                    Election
                </Link>
                <Link to="#" className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                    Revenge of the Never Trumpers
                </Link>
                <p className="text-gray-700 text-base mt-2">
                    Meet the Republican dissidents fighting to push Donald Trump out of office—and reclaim their party
                </p>
            </div>
        </div>
    </div>

    <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
            <Link to="#">
                <div className="h-40 bg-cover text-center overflow-hidden"
                    style={{ backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1')" }}
                    title="Woman holding a mug">
                </div>
            </Link>
            <Link to="#" className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                Trump Steps Back Into Coronavirus Spotlight
            </Link>
        </div>
        <div>
            <Link to="#">
                <div className="h-40 bg-cover text-center overflow-hidden"
                    style={{ backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&w=364&h=204&crop=1')" }}
                    title="Woman holding a mug">
                </div>
            </Link>
            <Link to="#" className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                How Trump's Mistakes Became Biden's Big Breaks
            </Link>
        </div>
        <div>
            <Link to="#">
                <div className="h-40 bg-cover text-center overflow-hidden"
                    style={{ backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&w=364&h=204&crop=1')" }}
                    title="Woman holding a mug">
                </div>
            </Link>
            <Link to="#" className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                Survey: Many Americans 'Dissatisfied' With U.S.
            </Link>
        </div>
        <div>
            <Link to="#">
                <div className="h-40 bg-cover text-center overflow-hidden"
                    style={{ backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&w=364&h=204&crop=1')" }}
                    title="Woman holding a mug">
                </div>
            </Link>
            <Link to="#" className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                How Trump's Mistakes Became Biden's Big Breaks
            </Link>
        </div>
        <div>
            <Link to="#">
                <div className="h-40 bg-cover text-center overflow-hidden"
                    style={{ backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&w=364&h=204&crop=1')" }}
                    title="Woman holding a mug">
                </div>
            </Link>
            <Link to="#" className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                Survey: Many Americans 'Dissatisfied' With U.S.
            </Link>
        </div>
        <div>
            <Link to="#">
                <div className="h-40 bg-cover text-center overflow-hidden"
                    style={{ backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1')" }}
                    title="Woman holding a mug">
                </div>
            </Link>
            <Link to="#" className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                Trump Steps Back Into Coronavirus Spotlight
            </Link>
        </div>
    </div>

</div>
</div>

</>
    );
}
