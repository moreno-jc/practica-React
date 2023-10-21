"use client"

import Link from "next/link"
import Image from "next/image"
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";

export function FirstBlock() {
    return (
        <div className="relative md:py-6">
        <BackgroundRadialRight />
        <div className="grid md:grid-cols-2 md:items-start gap-8">
          <div className="ms-8 md:my-8">
            <Reveal>
              <h1 className="text-5xl font-semibold">
                El nuevo{' '}
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-200">
                  Banco Digital
                </span>{' '}
                para Todos
              </h1>
            </Reveal>
            <Reveal>
              <p className="my:6 md:my-8">
                Nuestro equipo de expertos utiliza un enfoque cuidadoso para encontrar las tarjetas de crédito 
                que encajan mejor con lo que usted necesita. Analizamos las tasas de interés anuales, las tarifas 
                y otros factores importantes para asegurarnos de que obtenga la opción adecuada para usted.
              </p>
            </Reveal>
            <Reveal>
              <div className="my-4 md:my-4">
                <Link href="#clients" className="px-4 py-3 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 text-white">Empieza ahora</Link>
              </div>
            </Reveal>
          </div>
          <MotionTransition className="mt-8 md:mt-2">
            <Image src="/assets/cards-block.png" alt="Card" width={450} height={450} className="w-auto h-auto max-w-full max-h-full" />
          </MotionTransition>
        </div>
      </div>
      
    )
}
