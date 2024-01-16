import Head from "../components/Head"
import Layout from "../layout/Layout";
import { FiMail, FiPhoneCall, FiMapPin } from "react-icons/fi";

const Contact = () => {

    const contactData = [
        {
            id: 1,
            title: "Email Us",
            info: "Email Us if you have any problem.",
            icon: <FiMail />,
            contact: "info@movix.com",
        },
        {
            id: 2,
            title: "Call Us",
            info: "call Us if you want to become a part of our team.",
            icon: <FiPhoneCall />,
            contact: "+255 172 223 322",
        },
        {
            id: 3,
            title: "Location",
            info: "Jandrian Mohalla ,Pathankot, Punjab",
            icon: <FiMapPin />,
            contact: "",
        }
    ]

  return (
      <Layout>
          <div className="min-h-screen container mx-auto px-2 my-6">
              <Head title="About Us" />
              <div className="grid md:grid-cols-2 gap-6 lg:mt-20 mt-10 lg:grid-cols-3 xl:gap-8">
                  {
                      contactData.map((item) => (
                          <div key={item.id} className="border border-border flex-column p-10 bg-dry rounded-lg text-center">
                              <span className="flex-column w-20 mb-4 h-20 rounded-full bg-main text-subMain text-2xl">
                                  {item.icon}
                              </span>
                              <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                              <p className="mb-0 text-text text-sm leading-7">
                                  <a href={`mailto:${item.contact}`} className="text-blue-600 pr-2">{item.contact}</a>
                                  {item.info}
                              </p>
                          </div>
                      ))
                 }
              </div>
          </div>
    </Layout>
  )
}

export default Contact