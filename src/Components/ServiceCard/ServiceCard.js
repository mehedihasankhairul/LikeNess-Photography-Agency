import React from 'react';
// import switzerland from '';

const ServiceCard = () => {
    return (
        <div className="md:container mx-auto">
            <div className="md:text-left sm:text-center">
                <h1 className="text-4xl md:text-4xl text-black-700 mb-1 font-semibold mt-5 pt-5 hover:text-gray-600 hover:underline"> Our Service </h1>
            </div>
            <div className="p-10 grid md:grid-cols-3 sm:gap-3">
                {/*Card 1*/}
                <div className="max-w-sm rounded overflow-hidden shadow-lg my-3">
                    <img className="w-full" src="https://images.fineartamerica.com/images-medium-large-5/natural-beauty--switzerland-mehul-dave.jpg" alt="Mountain" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Mountain</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex justify-between">
                        <button className="bg-gray-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">Details</button>
                        <button className="bg-gray-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">Order</button>
                    </div>
                </div>
                {/*Card 2*/}
                <div className="max-w-sm rounded overflow-hidden shadow-lg my-3">
                    <img className="w-full" src="https://images.fineartamerica.com/images-medium-large-5/natural-beauty--switzerland-mehul-dave.jpg" alt="Mountain" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Mountain</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex justify-between">
                        <button className="bg-gray-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">Details</button>
                        <button className="bg-gray-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">Order</button>
                    </div>
                </div>
                {/*Card 3*/}
                <div className="max-w-sm rounded overflow-hidden shadow-lg my-3">
                    <img className="w-full" src="https://images.fineartamerica.com/images-medium-large-5/natural-beauty--switzerland-mehul-dave.jpg" alt="Mountain" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Mountain</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex justify-between">
                        <button className="bg-gray-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">Details</button>
                        <button className="bg-gray-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">Order</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;