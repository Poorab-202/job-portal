import React from 'react'
import {
    Carousel, CarouselContent, CarouselItem, CarouselNext,
    CarouselPrevious,
} from './ui/carousel'
import { Button } from './ui/button'


const category = [
    "Frontend Developed",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "Full-Stack Developer"
]

export default function CategoryCarousel() {
    return (
        <div>

            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="lg:basis-1/3 md:basis-1/2 text-center">
                                <Button className="bg-black text-white rounded-full">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className="hover:bg-gray-100"></CarouselPrevious>
                <CarouselNext className="hover:bg-gray-100"></CarouselNext>
                
            </Carousel>
        </div>
    )
}
