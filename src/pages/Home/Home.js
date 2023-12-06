import React from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import Hero from "../../components/hero/index";
import Why from "../../components/why";
import Stories from "../../components/stories";
import What from "../../components/what";
import How from "../../components/how";
import Whatto from "../../components/whatto";









const Home = () => {




        return (
                <main className='bg-white h-screen'>

                        <div className="mx-8 pt-4 mb-4">
                                <Navbar />
                        </div>
                        <section className='w-[100vw] md:w-[100%]'>
                                <Hero />
                                <div>
                                        <Why />
                                </div>
                                <div>
                                        <Stories/>
                                </div>
                                <div>
                                        <What/>
                                </div>
                                <div>
                                        <How/>
                                </div>
                                <div>
                                        <Whatto/>
                                </div>

                                <div>

                                        <Footer />
                                </div>







                        </section>


                </main>






        )



}


export default Home;