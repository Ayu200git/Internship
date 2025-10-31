export const PartialComponent = (Component, partialProps) => {
    return props => {
        return <Component {...partialProps} {...props}/>
    }
};
export const Button = ({size, color, text, ...props}) => {
    return (
        <button
        style={{fontSize: size === "small" ? "8px" : "32px", backgroundColor: color}}>
           {text}
        </button>
    );
}

export const BlueButton = PartialComponent(Button, {color: "blue"})
export const  SmallRedButton = PartialComponent(BlueButton, {size: "small"} )