//compound component
const Header = ({children}) => {
    return (
        <div style={{borderBottom: "1px solid black", padding:".5rem", marginBottom: ".5rem"
        }}>
            {children}
        </div>
    );
}

const Footer = ({children}) => {
    return (
         <div style={{borderTop:"1px solid black", padding:".5rem", marginTop:".5rem"}}>{children}</div>

    )
}

const Body = ({children}) => {
    return (
        <div style={{padding:".5rem"}}>{children}</div>
    )
}

const Card = ({header, footer, children}) => {
    return(
        <div style={{border:"1px solid black"}}>{children}</div>
    );
};

export default Card;

Card.Header = Header;
Card.Footer = Footer;
Card.Body = Body;