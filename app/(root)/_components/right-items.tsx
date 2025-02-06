"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { imageItemss } from "."
import Image from "next/image"

export function RightItems() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imageItemss.map((i, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                <Image src={i.image} alt="images" fill className="object-fill rounded-xl relative"/>

                <div className=" absolute h-10 justify-center text-center flex-col w-full bg-black/75 px-2 text-white bottom-0 flex rounded-xl inset-0 z-40 mt-auto ">
                
                <span className="font-bold text-sm capitalize">{i.label}</span>
                <span className="font-bold text-xs text-muted-foreground">{i.name}</span>

                </div>  
                </CardContent>
        
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
     
    </Carousel>
  )
}
