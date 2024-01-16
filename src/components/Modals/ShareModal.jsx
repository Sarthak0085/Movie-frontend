import { FaFacebook, FaInstagram, FaPinterest, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { EmailShareButton, FacebookShareButton, InstapaperShareButton, PinterestShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'
import { MdEmail } from 'react-icons/md'
import MainModal from './MainModal'

const ShareMovieModal = ({ modalOpen, setModalOpen, movie }) => {

    const shareLinksData = [
        {
            icon: FaFacebook,
            shareButton: FacebookShareButton,
        },
        {
            icon: FaTwitter,
            shareButton: TwitterShareButton,
        },
        {
            icon: FaTelegram,
            shareButton: TelegramShareButton,
        },
        {
            icon: FaWhatsapp,
            shareButton: WhatsappShareButton,
        },
        {
            icon: FaPinterest,
            shareButton: PinterestShareButton,
        },
        {
            icon: MdEmail,
            shareButton: EmailShareButton,
        },
        {
            icon: FaInstagram,
            shareButton: InstapaperShareButton,
        }
    ]

    console.log(movie);

    const url = `${window.location.protocol}//${window.location.host}/movie/${movie?.name}`;

    return (
        <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <div className='inline-block sm:w-4/5 md:w-3/5 lg:w-2/5 w-full p-10 overflow-y-auto h-full bg-main text-white border align-middle border-bordershadow-xl rounded-2xl'>
                <h2 className='text-2xl z-60'>Share <span className='text-xl font-bold'>{movie?.name}</span></h2>
                <form className='flex-rows flex-wrap gap-6 mt-6'>
                    {
                        shareLinksData.map((data, index) => (
                            <data.shareButton key={index} url={url} type='button' >
                                <div className="w-10 transitions hover:bg-subMain flex-column h-10 bg-white rounded bg-opacity-30">
                                    <data.icon className="z-50" />
                                </div>
                            </data.shareButton>
                        ))
                    }
                </form>
            </div>
        </MainModal>
    )
}

export default ShareMovieModal