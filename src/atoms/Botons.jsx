import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    font-size: 2rem;
    border: none;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    border-radius: .5rem;
    background: linear-gradient(to right, #0000FF, #8A2BE2); // Gradiente de azul a violeta
    color: #FFFFFF; // Cambiado a blanco
`;

function Butons({msn, accion, clas}) {
    // alert('msn')
    return (
        <StyledButton id={msn} onClick={accion} className={clas} type="button">{msn}</StyledButton>
    );
}

export default Butons;