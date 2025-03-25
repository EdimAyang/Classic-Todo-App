import styled from "styled-components"


interface BTNprops {
    children:string,
    size?:string,
    color?:string,
    color2?:string
}

export const ButtonS = styled.button<BTNprops>`
    width:${({size})=> size?`${size}` : "70%" };
    padding:15px;
    border-radius:10px;
    background-color:${({color})=> color? `${color}` : "#ffff"};
    border:none;
    font-size:1em;
    font-weight:500;
    color:${({color2})=>color2? `${color2}` : "#1F1F1F"}
`
