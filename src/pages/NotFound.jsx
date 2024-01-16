import { BiHomeAlt } from "react-icons/bi"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex-column w-full gap-12 min-h-screen text-white bg-main lg:py-20 py-10 px-6">
      <img className="w-full h-96 object-contain" src="/images/404.png" alt="not-found" />
      <h1 className="lg:text-4xl font-bold uppercase">Page Not Found</h1>
      <p className="font-medium text-2xl text-border italic leading-6">
        The page you are looking for doesn&apos;t exist. You typed the URL wrong.
      </p>
      <Link to={"/"} className="bg-subMain flex-rows transitions hover:bg-transparent border border-subMain gap-2 text-white font-medium py-3 px-6 rounded-md">
        <BiHomeAlt /> Go Back Home
      </Link>
    </div>
  )
}

export default NotFound