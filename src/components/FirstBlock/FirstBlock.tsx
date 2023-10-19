"use client"

import Link from "next/link"
import Image from "next/image"
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";

export function FirstBlock() {
    return (
        <div className="relative p-3 md:py-24">
            <BackgroundRadialRight/>
                <div className="gird flex max-m-5xl mx-auto md:grid-cols-2 gap-48">
                    <MotionTransition className="flex">
                        <div className="ms-8">
                            <h1 className="text-5xl font-semibold">
                                El nuevo
                                <span className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-200">
                                    Banco Digital
                                </span>
                                para Todos
                            </h1>
                            <p className="max-w-md mt-10">
                                Nuestro equipo de expertos utiliza un enfoque 
                                cuidadoso para encontrar las tarjetas de crédito
                                que encajan mejor con lo que usted necesita. 
                                Analizamos las tasas de interés anuales, las tarifas,
                                y otros factores importantes para asegurarnos de que 
                                obtenga la opción adecuada para usted.
                            </p>      
                        </div>
                    </MotionTransition>  
         
                    <MotionTransition className="flex items-center justify-center">
                        <Image src="/assets/cards-block.png" alt="Card" width={450} height={450} className="h-auto 80 md:m-full md:grid"/>
                    </MotionTransition>                
                </div>
        </div>
    )
}
