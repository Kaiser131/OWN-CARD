import card from '../../../../public/images/card-6.jpg';

const Hover = () => {
    return (
        <div className='flex justify-center h-screen w-screen items-center gap-10'>


            {/* description fade from right */}
            <div className='max-w-[320px] rounded-2xl overflow-hidden max-h-[500px] relative group'>
                <img className='w-full h-full object-cover rounded-2xl ' src={card} alt="" />

                <div className='w-full h-full absolute top-0 right-[-100%] group-hover:right-0 transition-all duration-[1.5s] bg-[#1f3d4738] p-10 text-white backdrop-blur-sm rounded-2xl flex flex-col justify-center'>
                    <h1 className='uppercase text-4xl font-medium'>Title</h1>
                    <p className='capitalize text-sm font-light'>Sub Title</p>
                    <p className='leading-6 my-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quidem tempore fugit aspernatur consequatur! Expedita dolor optio blanditiis laborum non!</p>
                    <button className='btn btn-outline text-white capitalize max-w-[120px]'>SEE MORE</button>
                </div>

            </div>





            {/* suddenly fade in card */}
            <div className="max-w-[320px] rounded-2xl overflow-hidden max-h-[500px] relative group">
                <img className="w-full h-full object-cover rounded-2xl" src={card} alt="" />

                {/* Overlay Content */}
                <div className="w-full h-full absolute top-0 bg-[#1f3d4738] p-10 text-white backdrop-blur-sm rounded-2xl flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <h1 className="uppercase text-4xl font-medium">Title</h1>
                    <p className="capitalize text-sm font-light">Sub Title</p>
                    <p className="leading-6 my-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quidem tempore fugit aspernatur consequatur! Expedita dolor optio blanditiis laborum non!
                    </p>
                    <button className="btn btn-outline text-white capitalize max-w-[120px]">SEE MORE</button>
                </div>
            </div>



        </div>
    );
};

export default Hover;