'use client'

import React from 'react'
import Image from "next/image"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

const MobileImages = [
    { src: '/images/iphone_01.png', title: 'Audio Book 01', speed: 10 },
    { src: '/images/iphone_02.png', title: 'Audio Book 02', speed: 20 },
    { src: '/images/iphone_03.png', title: 'Audio Book 03', speed: 10 },
    { src: '/images/iphone_04.png', title: 'Audio Book 04', speed: 20 },
    { src: '/images/iphone_05.png', title: 'Audio Book 05', speed: 10 },
]

export const MobileGallery = () => {
    return (
        <ParallaxProvider>
            <div className="grid grid-cols-2 gap-4">
                {MobileImages.map((image, index) => (
                    <Parallax key={index} speed={image.speed}>
                        <Image src={image.src} alt={image.title} width={200} height={200} />
                    </Parallax>
                ))}
            </div>
        </ParallaxProvider>
    )
}
