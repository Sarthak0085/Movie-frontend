const Head = ({ title }) => {
    return (
        <div className='w-full bg-deepGray lg:h-64 h-40 relative overflow-hidden rounded-md'>
            <img
                src='1.jpg'
                alt='about us'
                className='w-full h-full object-cover'
            />
            <div className='w-full flex-column absolute lg:top-24 top-16'>
                <h1 className='text-2xl lg:text-h1 text-white text-center font-bold'>
                    {title}
                </h1>
            </div>
        </div>
    )
}

export default Head