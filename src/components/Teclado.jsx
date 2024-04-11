import React from "react";
import styled from "styled-components";
import Butons from "../atoms/Botons";
import Pantalla from "../atoms/Pantalla";

const StyledTeclado = styled.div`
    display: grid;
    height: 89vh;
    border-radius: 2rem;
    aspect-ratio: 9/17;
    padding: .15rem;
    grid-template-columns: repeat(4, 1fr);
    gap: .5rem;
    background-color: #17171c;
    border: 5px solid #C0C0C0; // Cambiado a gris plateado
    box-shadow: 0 0 30px #00FF00, 0 0 10px #00FF00; // Cambiado a verde neón
    .operacion{
        background: linear-gradient(to right, #FF0000, #FF7F00); // Gradiente de rojo a naranja
        color: #FFFFFF; // Cambiado a blanco
    }
    .otro{
        background: linear-gradient(to right, #FFEB3B, #FBC02D); // Gradiente de amarillo claro a amarillo oscuro
    }
    .igual{
        background: linear-gradient(to right, #0000FF, #8A2BE2); // Gradiente de azul a violeta
    }
    button:active{
        transform: scale(1.1);
    }
`;

function Teclado({ accion, operacion }) {
    // alert(valores)
    const valores = ['DEL', 'AC', '(', ')', 7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '/', 0, '.', '=', '*'];
    return (
        <StyledTeclado>
            <Pantalla msn={operacion} />
            {
                valores.map((valor) => {
                    if (valor === '+' || valor === '-' || valor === '/' || valor === '*') {
                        return <Butons accion={accion} msn={valor} clas={'operacion'} />
                    } else if (valor === 'DEL' || valor === 'AC' || valor === '(' || valor === ')') {
                        return <Butons accion={accion} msn={valor} clas={'otro'} />
                    } else if (valor === '=') {
                        return <Butons accion={accion} msn={valor} clas={'igual'} />
                    }
                    return <Butons accion={accion} msn={valor} />
                })
            }
        </StyledTeclado>
    );
}

export default Teclado;