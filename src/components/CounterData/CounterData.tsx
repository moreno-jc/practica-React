"use client"
import CountUp from "react-countup";
import { MotionTransition } from "../MotionTransition";
import { dataCounter } from "./CounterData.data";

export function CounterData() {
    return (
        <MotionTransition className="max-w-5xl mx-auto md:py-2">
            <div className="ms-8 justify-between md:flex">
                {dataCounter.map(({ id, startNumber, endNumber, text }) => (
                    <div key={id} className="flex items-start py-5 text-2xl text-center md:text-left">
                        <div className="flex items-center">
                            <span className="mr-2">+ </span>
                            <CountUp start={startNumber} end={endNumber} duration={1.5} />
                        </div>
                    <span className="text-cyan-200 ml-2">{ text}</span>
                    </div>
                ))}
            </div>

        </MotionTransition>
    )
}
