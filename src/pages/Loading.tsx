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
                    <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V4a10 10 0 00-10 10h2zm2 0a6 6 0 016-6V6a8 8 0 00-8 8h2zm2 0a4 4 0 014-4V4a6 6 0 00-6 6h2zm2 0a2 2 0 012-2V2a4 4 0 00-4 4h2z'
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