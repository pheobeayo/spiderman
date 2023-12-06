import React from 'react';
import { BsCheck2All } from "react-icons/bs";






const Whatto = () => {


    return (
        <div className='bg-white '>

            <div className="container mx-auto px-4 sm:px-[80px] py-[100px]">

                <h2 className="text-black text-3xl  font-bold leading-10 mx-80 px-20">
                    What do you get?

                </h2>
                <h3 className="text-black text-xl  font-light mx-64">
                    With a free profile on SubscribeStar.com, every content creator gets a set
                    <br></br> of tools to make the everyday publishing routine a pleasure.
                    <br></br>The list of tools is evergrowing and based on your requests.

                </h3>
                <div className='bg-white grid-cols-4 gap-4 md:flex md:flex-row'>
                    <div
                        class="mx-3 mt-6 flex flex-row rounded-lg bg-white sm:shrink-0 sm:grow sm:basis-0">
                        <BsCheck2All class='w-8' />
                       
                            <p className="font-normal text-justify text-black text-lg mx-4">
                                Reliable Anti skripping and
                                <br></br>anti - skimming content creation


                            </p>

                        

                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-row rounded-lg bg-white sm:shrink-0 sm:grow sm:basis-0 ">
                       < BsCheck2All class='w-8'/>
                        
                           
                            <p className="font-normal text-justify text-black text-lg mx-4">
                            elaborate and 
                            <br></br>comprehensive tools


                            </p>


                       


                    </div>
                    <div
                        class="mx-3 mt-6 flex flex-row rounded-lg bg-white sm:shrink-0 sm:grow sm:basis-0">
                       
                        <BsCheck2All class='w-8'/>
                            <p className="font-normal text-justify text-black text-lg mx-4">
                            Free domestic and 
                            <br></br>international options
                            </p>

                       

                    </div>



                </div>
                <div className='bg-white grid-cols-4 gap-4 md:flex md:flex-row'>
                    <div
                        class="mx-3 mt-6 flex flex-row rounded-lg bg-white sm:shrink-0 sm:grow sm:basis-0">
                        <BsCheck2All class='w-8'/>
                       
                            <p className="font-normal text-justify text-black text-lg mx-4">
                            OAuth2, API, Discord and 
                            <br></br>Webhooks for integrations

                            </p>

                        

                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-row rounded-lg bg-white sm:shrink-0 sm:grow sm:basis-0 ">
                       <BsCheck2All class='w-8'/>
                        
                           
                            <p className="font-normal text-justify text-black text-lg mx-4">
                            Handy tiered subscription 
                            <br></br>pricing and charging structure.

                            </p>


                       


                    </div>
                    <div
                        class="mx-3 mt-6 flex flex-row rounded-lg bg-white sm:shrink-0 sm:grow sm:basis-0">
                       
                        <BsCheck2All class='w-8'/>
                            <p className="font-normal text-justify text-black text-lg mx-4">
                            Extensive editing and scheduled
                            <br></br> publishing for your posts.

                       </p>

                    </div>



                </div>

            </div>
        </div>


    )


}


export default Whatto;




