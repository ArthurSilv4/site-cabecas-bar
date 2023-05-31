'use client'

import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

export function Slider() {

    const slides = [
        {
            url: "https://www.iped.com.br/_upload/content/2014/12/22/gerir-bares-restaurantes.jpg"
        },
        {
            url: "https://servircomrequinte.francobachot.com.br/wp-content/uploads/2020/08/post_thumbnail-5119340b39b314917440ed22562078eb.jpg"
        },
        {

        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className="h-full m-auto group">
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="h-full w-full bg-center bg-cover duration-500" />

            <div className="hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>

            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            <div className="flex top-4 justify-center translate-y-[-200%]">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? "active" : ""}`}
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    )
}