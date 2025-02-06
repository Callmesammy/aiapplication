import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import { imageItemss } from "."

export function CarouselItemn() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-3xl"
    >
      <CarouselContent>
        {imageItemss.map((img, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-3">
                <Image src={img.image} width={200} height={300} alt="Image" className="  object-fill flex "/>
                </CardContent>
                
              </Card>
              <h1 className="font-bold text-pretty capitalize items-center text-center pt-2">{img.label}</h1>
              <h1 className="text-muted-foreground text-sm text-center">{img.name}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
