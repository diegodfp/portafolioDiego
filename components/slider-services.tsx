"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { serviceData } from '@/data';

const SliderServices = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="h-[400px] md:h-[450px] w-[300px] md:w-[600px]"
        >
            {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="flex px-6 py-8 h-full md:h-[350px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
                        <div className="mb-4 text-2xl md:text-4xl text-secondary">{item.icon}</div>
                        <div>
                            <h3 className="mb-3 text-base md:text-lg">{item.title}</h3>
                            <p className="text-sm md:text-sm">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SliderServices;
