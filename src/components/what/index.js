import React from 'react';
import rectangle from "../../assets/rectangle.svg";
import sub from "../../assets/sub.svg";
import subprice from "../../assets/subprice.svg";



const What = () => {


    return (
        <div class="bg-[url('../src/assets/what.svg')] bg-cover bg-center">

            <div className="container mx-auto px-4 sm:px-[80px] py-[100px]">

                <h2 className="text-black text-3xl font-bold leading-10 mx-80 px-16">
                    What about the money?
                </h2>
                <h3 className="text-black text-xl font-light mx-60">
                    You are in control here. The revenue will depend on the number of 
                    <br></br>subscribers you have and on the subscription price you set
                </h3>
                <div className='grid-cols-2 gap-4 md:flex md:flex-row'>
                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg  sm:shrink-0 sm:grow sm:basis-0 ">
                        <img src={rectangle} alt="" class='object-contain' />
                        <p className="font-normal text-justify text-black text-sm mt-4">

                            Move sliders on the Revenue
                            <br></br>Calculator to estimate your potential monthly
                            <br></br>income.



                        </p>
                        <p className="font-normal text-justify text-black text-sm mt-4">

                            The calculation takes into account our
                            <br></br>Service fee (5%) and Transaction
                            <br></br>Processing fees (2.9% + $0.3 on
                            <br></br>average).



                        </p>

                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg  sm:shrink-0 sm:grow sm:basis-0 ">
                        <h3>Subscribers</h3>
                        <h4>300</h4>
                        <img src={sub} alt="" class='object-contain' />
                        <h3>Subscription Price</h3>
                        <h4>$10</h4>
                        <img src={subprice} alt="" class='object-contain' />



                    </div>




                </div>
                <div class='mx-96 px-28'>
                <button type="submit" class="text-white absolute  bg-[#FF4081] hover:bg-[#009688] focus:ring-4 focus:outline-none focus:ring-[#009688] font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#009688] dark:hover:bg-[#009688] dark:focus:ring-[#009688]">Get Started</button>
                </div>
            </div>
        </div>


    )


}


export default What;




