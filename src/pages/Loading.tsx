const Loading = () => {
    return (
        <div
            className='h-screen w-full flex items-center justify-center bg-neutral-950 antialiased'
        >

            <div className='flex flex-col items-center justify-center'>
                <svg
                    className='animate-spin w-16 h-16 text-violet-950'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                >
                    <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                    ></circle>
                    {/* wallet  */}
                    <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M12 14c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z'
                    ></path>
                </svg>
                <h1 className='text-2xl font-bold text-neutral-100 mt-4'>
                    Loading...
                </h1>
            </div>

        </div>
    )
}

export default Loading