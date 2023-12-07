import React from 'react';
import independent from "../../assets/independent.svg";
import transparent from "../../assets/transparent.svg";
import safe from "../../assets/safe.svg";





const Why = () => {


    return (
        <div className='bg-white '>

            <div className="container mx-auto px-4 sm:px-[80px] py-[100px]">

                <h2 className="text-black text-3xl  font-bold leading-10 mx-96">
                    Why SubscribeStar.com
                    
                </h2>
                <h3 className="text-black text-xl  font-light mx-72">
                    The only purpose of our existence is to serve you, our Stars
                </h3>
                <div className='bg-white grid-cols-4 gap-4 md:flex md:flex-row'>
                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white sm:shrink-0 sm:grow sm:basis-0">
                        <img src={independent} alt="" class='object-contain' />
                        <div className="w-full h-1/2  mx-8">
                            <h3 className="font-bold text-black text-lg mx-16">
                                Independent
                            </h3>
                            <p className="font-normal text-justify text-black text-sm">
                                Flexible and attentive to your needs. No
                                <br></br>micromanagement, overreactions or
                                <br></br>judgements.


                            </p>

                        </div>

                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white sm:shrink-0 sm:grow sm:basis-0 ">
                        <img src={transparent} alt="" class='object-contain' />
                        <div className="w-full h-1/2  mx-12">
                            <h3 className="font-bold text-black text-lg mx-16">
                                Transparent
                            </h3>
                            <p className="font-normal text-justify text-black text-sm">
                                Comprehensive statistics and analysis.
                                <br></br>Easy to understand fee structure and
                                <br></br>pricing policies.


                            </p>


                        </div>


                    </div>
                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white sm:shrink-0 sm:grow sm:basis-0">
                        <img src={safe} alt="" class='object-contain' />
                        <div className="justify-center w-full h-1/2 mx-14">
                            <h3 className="font-bold text-black text-lg mx-24">
                                Safe
                            </h3>
                            <p className="font-normal text-justify text-black text-sm ">
                                Your content and data are protected.
                                <br></br>We are fully compliant with all industry
                                <br></br>requirements.
                            </p>

                        </div>

                    </div>



                </div>

            </div>
        </div>


    )


}


export default Why;




