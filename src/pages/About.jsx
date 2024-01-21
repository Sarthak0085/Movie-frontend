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
                                Welcome to <span className="text-transparent bg-gradient-to-r bg-clip-text from-subMain to-red-500">CinéCraze</span>
                            </h3>
                            <div className="mt-3 text-sm leading-8 text-text">
                                <p>
                                    Welcome to CinéCraze, where the magic of movies meets seamless accessibility.
                                    Dive into a world of cinematic wonders without any subscription fees. At CinéCraze,
                                    we're dedicated to offering a diverse collection of movies, from classics to the latest releases,
                                    all at your fingertips. Our user-friendly platform ensures effortless navigation, and our commitment
                                    to legality means you can enjoy quality entertainment worry-free. Whether you&apos;re at home or on the
                                    go, CinéCraze brings the joy of movies to your screens. Join our community, explore diverse
                                    genres, and embark on a cinematic journey like never before.

                                </p>
                                <p>
                                    Step into the realm of limitless entertainment with CinéCraze. Unleashing a treasure trove of
                                    films, our platform is designed for movie enthusiasts seeking an escape into captivating narratives.
                                    At CinéCraze, we believe in making cinema accessible to everyone, and that&apos;s why our
                                    expansive library caters to various tastes and preferences. Indulge in a seamless streaming
                                    experience, discover hidden gems, and let the love for movies flourish. Wherever you are,
                                    CinéCraze is your passport to a world of cinematic brilliance – all just a click away. Join us
                                    and redefine the way you experience movies online.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="p-8 bg-dry rounded-lg">
                                    <span className="text-3xl block font-extrabold">10k</span>
                                    <h4 className="text-lg font-semibold my-2">Listed Movies</h4>
                                    <p className="mb-0 text-text leading-7 text-sm">
                                        Embark on an extensive cinematic journey with our collection of over 10,000 movies,
                                        offering an eclectic mix of genres and eras.
                                    </p>
                                </div>
                                <div className="p-8 bg-dry rounded-lg">
                                    <span className="text-3xl block font-extrabold">7K</span>
                                    <h4 className="text-lg font-semibold my-2">Lovely Users</h4>
                                    <p className="mb-0 text-text leading-7 text-sm">
                                        Discover personalized recommendations, and unlock exclusive features on CinéCraze.
                                        Your cinematic adventure awaits!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <img
                                src="about-us.jpg"
                                alt="About us"
                                className="w-[80%] hidden xl:block mx-auto h-[600px] rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About