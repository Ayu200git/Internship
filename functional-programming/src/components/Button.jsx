import { emitter } from "../App"

export const Button = () => {
    const onIncreamentCounter = () => {
        emitter.emit("Inc.")

    };

    const onDecreamentCounter = () => {
        emitter.emit("dec.")
    }

    return (
         <div>
            <button onClick={onIncreamentCounter}>+</button>
            <button onClick={onDecreamentCounter}>-</button>
         </div>
    )
};

 