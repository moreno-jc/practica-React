import { useAnimation, useInView, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { MotionTransitionProps} from "./MotionTransition.types";
import { fadeIn } from "@/utils/transitions";

export function MotionTransition (props: MotionTransitionProps) {
    const {children, className} = props

    const ref = useRef(null)
    const isInView = useInView (ref, {once: false})
    const mainControls = useAnimation ()
    const slideControls = useAnimation ()

    useEffect (() => {

        if(isInView){
            mainControls.start("visible")
            slideControls.start("visible")
        }
    }, [isInView])
    
    return (
        <div ref={ref}>
            <motion.div 
                variants={fadeIn()}
                initial="hidden"
                animate={mainControls}
                exit="hidden"
                className={className}>
                {children}
            </motion.div>
        </div>

    )
}