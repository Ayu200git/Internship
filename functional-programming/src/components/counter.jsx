import { useEffect, useState } from "react";
import { emitter } from "../App";
import { Button } from "./Button";

export const Counter = () => {
    const [count , setcount] = useState(0);

    useEffect(() => {
        const onIncreament = () => {
            setcount((count) => count + 1);
        }
        const onDecreament = () => {
            setcount((count) => count - 1);
        }
        emitter.on("Inc.", onIncreament);
        emitter.on("dec.", onDecreament);

        return () => {
            emitter.off("Inc.", onIncreament);
            emitter.off("dec.", onDecreament);
        }
    }, [])
    return (
        <div>
            #: {count}
        </div>
        
    )

};
 