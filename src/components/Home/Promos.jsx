import { FaUser } from 'react-icons/fa'

const Promos = () => {
    return (
        <div className='my-20 py-10 md:px-20 px-8 bg-dry'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
                <div className='flex lg:gap-10 gap-6 flex-col'>
                    <h1 className='text-xl bg-gradient-to-r bg-clip-text text-transparent from-subMain to-red-700 xl:text-3xl capitalize font-sans font-medium xl:leading-relaxed'>
                        Download your movies watch offline <br />
                        Enjoy on your mobile
                    </h1>
                    <p className='text-text text-sm xl:text-base leading-6 xl:leading-8'>
                        <span className='font-bold'>Download your favorite movies</span> and enjoy them offline on your mobile device with our convenient feature.
                        Take your cinematic experience on the go, whether you&apos;re traveling, commuting, or in an area with
                        limited internet access. Simply select the movies you love, download them to your mobile device, and
                        immerse yourself in entertainment whenever and wherever you are. With the freedom to watch offline,
                        your movie time is no longer bound by connectivity constraints. Enjoy the flexibility and convenience
                        of carrying your favorite films in your pocket and dive into a world of entertainment whenever it suits you.
                    </p>
                    <div className='flex gap-4 text-sm md:text-lg'>
                        <div className='flex-column bg-main text-subMain px-6 py-3 rounded font-bold'>
                            HD 4k
                        </div>
                        <div className='flex-rows gap-4 bg-main text-subMain px-6 py-3 rounded font-bold'>
                            <FaUser /> 2k
                        </div>
                    </div>
                </div>
                <div>
                    <img src='/mobile.png' alt='Mobile App' className='w-full object-contain' />
                </div>
            </div>
        </div>
    )
}

export default Promos