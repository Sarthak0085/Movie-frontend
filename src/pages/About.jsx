import Head from "../components/Head"
import Layout from "../layout/Layout"

const About = () => {
  return (
      <Layout>
          <div className="min-h-screen container mx-auto px-2 my-6">
              <Head title="About Us" />
              <div className="xl:py-20 py-10 px-4">
                  <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
                      <div>
                          <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                              Welcome to Movix
                          </h3>
                          <div className="mt-3 text-sm leading-8 text-text">
                          <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur nostrum? Officia dolore
                              delectus atque, autem facilis quis sit assumenda, voluptatem, mollitia dolor dicta. Ad repellat magni
                              cumque dolore, quae nihil asperiores, beatae, vero quam eos saepe exercitationem inventore consequuntur
                              assumenda eligendi maiores molestias adipisci similique aliquam? Quasi enim nam laudantium neque magnam,
                              eius, odio, excepturi suscipit minima earum sequi minus doloremque explicabo dignissimos! Distinctio
                              atque praesentium iste neque repudiandae labore impedit tempora, natus obcaecati fuga ullam a aspernatur
                              
                          </p>
                          <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur nostrum? Officia dolore
                              delectus atque, autem facilis quis sit assumenda, voluptatem, mollitia dolor dicta. Ad repellat magni
                              cumque dolore, quae nihil asperiores, beatae, vero quam eos saepe exercitationem inventore consequuntur
                              assumenda eligendi maiores molestias adipisci similique aliquam? Quasi enim nam laudantium neque magnam,
                              eius, odio, excepturi suscipit minima earum sequi minus doloremque explicabo dignissimos! Distinctio
                              atque praesentium iste neque repudiandae labore impedit tempora, natus obcaecati fuga ullam a aspernatur
                          </p>
                          </div>
                          <div className="grid md:grid-cols-2 gap-6 mt-8">
                              <div className="p-8 bg-dry rounded-lg">
                                  <span className="text-3xl block font-extrabold">10K</span>
                                  <h4 className="text-lg font-semibold my-2">Listed Movies</h4>
                                  <p className="mb-0 text-text leading-7 text-sm">
                                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                      Tempora, fugiat laborum nihil
                                  </p>
                              </div>
                              <div className="p-8 bg-dry rounded-lg">
                                  <span className="text-3xl block font-extrabold">7K</span>
                                  <h4 className="text-lg font-semibold my-2">Lovely Users</h4>
                                  <p className="mb-0 text-text leading-7 text-sm">
                                      Watch Movies, Online Without Registration
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="mt-10 lg:mt-0">
                          <img 
                              src="1.jpg"
                              alt="About us"
                              className="w-full hidden xl:block h-header rounded-lg object-cover"
                          />
                      </div>
                  </div>
              </div>
          </div>
    </Layout>
  )
}

export default About