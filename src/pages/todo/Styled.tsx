import styled from "styled-components";

export const TodoStyles = styled.div`
    width:100%;
    height:100vh;
    background-color:#3083DC;
    display:flex;
    flex-direction:column;
    align-items:center;
    
`
export const HeadImg = styled.img`
    width:80%;
`
export const Nav = styled.nav`
width:100%;
height:70px;
display:flex;
justify-content:start;
align-items:center;
color:#ffff;
padding:10px;
span{
    font-weight:700;
    
}
`
export const TodoInputWrapper = styled.div`
    width:90%;
    height:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:10px;

    input{
        width:80%;
        padding:15px;
        border-radius:10px;
        outline:none;
        background-color:#ffffffe8;
        color:#1F1F1F;
        border:none;
    }
`