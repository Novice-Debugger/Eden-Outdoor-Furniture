import React, { useRef } from 'react';
import EmblaCarousel from './components/EmblaCarousel.js';

const ProductDescriptionPage = ({ id, imgList, category, description }) => {

    const targetRef = useRef(null);

    const scrollToTarget = () => {
        const target = targetRef.current;
        const top = target.getBoundingClientRect().top + window.scrollY;
        const offset = window.innerHeight / 2 - target.clientHeight / 2;

        window.scrollTo({
            top: top - offset,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <div className='min-h-screen flex flex-col justify-center'>
                <div className='pt-32 px-12 flex gap-10 text-palette3 tracking-wide'>
                    <div className="w-2/5">
                        <EmblaCarousel slides={imgList} options={{ dragFree: false, loop: true }} />
                    </div>
                    <div className="prod-info w-3/5">
                        <div className="pid text-4xl font-bold">
                            {/* {id} */}
                            Product Name
                        </div>
                        <div className="category text-lg py-3 text-palette3/35 font-semibold">
                            {/* {category} */}
                            Sofa
                        </div>
                        <div className="desc mt-5 p-3 text-sm border text-palette3/60 rounded-xl border-palette3/25 leading-7">
                            {/* {description} */}
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis perferendis ipsum iure error voluptatibus praesentium voluptatum, voluptas voluptate officia, alias adipisci in et? Rerum sequi est possimus nobis eaque adipisci!
                        </div>
                        <div onClick={scrollToTarget} className='p-2 border border-palette3/25 bg-palette3 text-palette1 max-w-max rounded-md mt-4 cursor-pointer hover:bg-palette1 hover:text-palette3'>
                            <button className='decoration no-underline text-sm'>Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={targetRef} id="enquiry-form" className='flex justify-center'>
                <div className="prod-form flex flex-col gap-3 mt-10 p-5 border max-w-[600px] border-palette3/40 bg-palette3/5 rounded-md mx-6">
                    <div className="form-head text-xl font-bold text-palette3">
                        Interested? Drop Your Query Here!
                    </div>
                    <div className="name overflow-hidden flex gap-4">
                        <input className='w-1/2 max-w-[300px] bg-palette1 focus:border-palette3/50 focus:shadow-none focus:outline-none text-palette3 border-palette3/25 border p-3 text-sm rounded-md placeholder-palette3/60' type="text" name="First Name" id="fname" placeholder='*First Name' required />
                        <input className='w-1/2 max-w-[300px] bg-palette1 focus:border-palette3/50 focus:shadow-none focus:outline-none text-palette3 border-palette3/25 border p-3 text-sm rounded-md placeholder-palette3/60' type="text" name="Last Name" id="lname" placeholder='Last Name' />
                    </div>
                    <div className="email overflow-hidden">
                        <input className='w-full max-w-[300px] bg-palette1 focus:border-palette3/50 focus:shadow-none focus:outline-none text-palette3 border-palette3/25 border p-3 text-sm rounded-md placeholder-palette3/60' type="email" name="email" id="email" placeholder='*Email' required />
                    </div>
                    <div className="contact overflow-hidden">
                        <input className='w-full max-w-[300px] bg-palette1 focus:border-palette3/50 focus:shadow-none focus:outline-none text-palette3 border-palette3/25 border p-3 text-sm rounded-md placeholder-palette3/60' type="tel" name="email" id="email" pattern="[0-9]{10}" placeholder='*Contact No' required />
                    </div>
                    <div className="message">
                        <textarea class="w-full max-w-[600px] min-h-[150px] bg-palette1 focus:border-palette3/50 focus:shadow-none focus:outline-none text-palette3 border-palette3/25 border p-3 text-sm rounded-md placeholder-palette3/60 resize-y" placeholder="Enter your message..."></textarea>
                    </div>
                    <div className="submit">
                        <button className='px-3 py-2 bg-palette3 rounded-md text-palette1 border border-palette3 hover:bg-palette1 hover:text-palette3 text-sm' type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-screen"></div>
        </div>
    );
}

export default ProductDescriptionPage;
