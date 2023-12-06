import React from 'react';
import rectangle from "../../assets/rectangle.svg";
import sub from "../../assets/sub.svg";
import subprice from "../../assets/subprice.svg";



const What = () => {


    return (
        <div className='bg-white '>

            <div className="container mx-auto px-4 sm:px-[80px] py-[100px]">

                <h2 className="text-black text-3xl font-bold leading-10">
                    What about the money?
                </h2>
                <h2 className="text-black text-xl font-bold leading-10">
                    You are in control here. The revenue will depend on the number of subscribers you
                    <br></br>have and on the subscription price you set.
                </h2>
                <div className='bg-white grid-cols-2 gap-4 md:flex md:flex-row'>
                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white sm:shrink-0 sm:grow sm:basis-0 ">
                        <img src={rectangle} alt="" class='object-contain' />
                        <p className="font-normal text-justify text-black text-sm">

                            Move sliders on the Revenue
                            <br></br>Calculator to estimate your potential monthly
                            <br></br>income.



                        </p>
                        <p className="font-normal text-justify text-black text-sm">

                            The calculation takes into account our
                            <br></br>Service fee (5%) and Transaction
                            <br></br>Processing fees (2.9% + $0.3 on
                            <br></br>average).



                        </p>

                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-white sm:shrink-0 sm:grow sm:basis-0 ">
                        <h3>Subscribers</h3>
                        <h4>300</h4>
                        <img src={sub} alt="" class='object-contain' />
                        <h3>Subscription Price</h3>
                        <h4>$10</h4>
                        <img src={subprice} alt="" class='object-contain' />



                    </div>




                </div>

            </div>
        </div>


    )


}


export default What;




