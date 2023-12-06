import React from 'react';
import signup from "../../assets/signup.svg";
import post from "../../assets/post.svg";
import get from "../../assets/get.svg";
import BackgroundImage from '../backgroundimage';





const How = () => {


    return (
        <div>
            <BackgroundImage/>
            <div className="container mx-auto px-4 sm:px-[80px] py-[100px]">

                <h2 className="text-black text-3xl  font-bold leading-10 mx-96 px-16">
                    How to start?
                </h2>
                <h3 className="text-black text-xl  font-light mx-64">
                    The whole sign-up process takes about 5 minutes from start to finish.
                </h3>
                <div className='bg-white grid-cols-4 gap-4 md:flex md:flex-row'>
                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white sm:shrink-0 sm:grow sm:basis-0">
                        <img src={signup} alt="" class='object-contain' />
                        <div className="w-full h-1/2  mx-8">
                            <h3 className="font-bold text-black text-lg mx-20">
                                Sign Up
                            </h3>
                            <p className="font-normal text-justify text-black text-sm">
                            Anybody with creative mind and media-
                            <br></br>sphere presence can sign up now and 
                            <br></br>start earning regularly.


                            </p>

                        </div>

                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white sm:shrink-0 sm:grow sm:basis-0 ">
                        <img src={post} alt="" class='object-contain' />
                        <div className="w-full h-1/2  mx-12">
                            <h3 className="font-bold text-black text-lg mx-16">
                            Post and Share
                            </h3>
                            <p className="font-normal text-justify text-black text-sm mx-4">
                            Post text, images, videos, audio,
                            <br></br>documents. Create polls. Apply rich 
                            <br></br>formatting to refine the look.


                            </p>


                        </div>


                    </div>
                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white sm:shrink-0 sm:grow sm:basis-0">
                        <img src={get} alt="" class='object-contain' />
                        <div className="justify-center w-full h-1/2 mx-14">
                            <h3 className="font-bold text-black text-lg mx-20">
                            Get Paid
                            </h3>
                            <p className="font-normal text-justify text-black text-sm mx-4">
                            When enough funds collected, request a 
                            <br></br>payout and receive your money in 
                            <br></br>almost any country.
                            </p>

                        </div>

                    </div>



                </div>

            </div>
            </div>


    )


}


export default How;




