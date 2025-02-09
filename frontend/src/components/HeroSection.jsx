import React from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
                <h1 className='text-5xl font-bold'>Search, apply & <br></br> Get your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p className='text-sm'>Occaecat et cupidatat duis consectetur est et commodo culpa in sit exercitation anim sunt ea.</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto '>
                    <input type='text'
                        placeholder='Find your Job'
                        className='outline-none border-none w-full'>
                    </input>
                    <Button className="rounded-r-full bg-[#6A38C2]  hover:bg-[#522a99] cursor-pointer"><Search className='h-5 w-5 text-white'></Search></Button>
                </div>
            </div>
        </div>
    )
}
