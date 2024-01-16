import React from 'react'
import { Link } from 'react-router-dom'

const Links = [
  {
    title: "Company",
    links: [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "About Us",
        link: "/about-us"
      },
      {
        name: "Contact Us",
        link: "/contact-us"
      },
      {
        name: "Movies",
        link: "/movies"
      }
    ]
  },
  {
    title: "Top Categories",
    links: [
      {
        name: "Action",
        link: "/"
      },
      {
        name: "Drama",
        link: "#"
      },
      {
        name: "Romantic",
        link: "#"
      },
      {
        name: "Histoical",
        link: "#"
      }
    ]
  },
  {
    title: "My Profile",
    links: [
      {
        name: "Dashboard",
        link: "/dashboard"
      },
      {
        name: "Profile",
        link: "/profile"
      },
      {
        name: "My Favourites",
        link: "/favourites"
      },
      {
        name: "Password",
        link: "/password"
      }
    ]
  },
]

const Footer = () => {
  return (
    <div className='bg-dry border-t-2 border-black py-4'>
      <div className='container mx-auto px-2'>
        <div className='grid grid-cols-2 md:grid-cols-6 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between'>
          {
            Links.map((link, index) => (
              <div key={index} className='col-span-1 mx-auto md:cols-span-2 lg:col-span-3 pb-3.5 lg:pb-0'>
                <h3 className='font-medium text-md lg:leading-7 mb-4 sm:mb-5 lg:mb-6 pb-0.5'>
                  {link.title}
                </h3>
                <ul className='text-sm flex flex-col space-y-3'>
                  {
                    link.links.map((item, index) => (
                      <li key={index} className='flex items-baseline'>
                        <Link to={item.link} className='w-full text-border inline-block hover:text-subMain'>
                          {item.name}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
          <div className='pb-3.5 px-auto lg:pb-0 mx-auto items-center justify-center col-span-1 md:col-span-2 lg:col-span-3'>
            <Link to="/">
              <img src='logp.png' alt="logo" className='w-2/4 object-contain h-12'/>
            </Link>
            <div className='leading-7 text-sm text-border mt-3'> 
              <span className='block'>
                Lorem colony Near shiv Mandir  <br/> Bangolore , India
              </span>
              <span className='block'>
                Tel: +12 292002-121202
              </span>
              <span className='block'>
                Email: sarthak@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer