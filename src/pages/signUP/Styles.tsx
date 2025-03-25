import styled from "styled-components";

interface Iprops {
    state?:string
    state2?:string
}

export const SignUpStyles = styled.div`
    width:100%;
    height:100vh;
    background-color:#3083DC;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
export const SignUpForm = styled.form`
    width:80%;
margin:0 auto;
height:300px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:20px;
h1{
    color:#fff;
    text-align:center;
}
`
export const SignUPInputWrapper = styled.div<Iprops>`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
    position:relative;

    input{
        padding:15px;
        border:${({state})=> state? `${state}` : "none"};
        border-radius:10px;
        outline:none;
        background-color:#ffffffe8;
        color:#000;
    }

    span{
        font-size:0.8em;
        color:red;
        position:absolute;
        top:44%;
        display:${({state2})=>state2? `${state2}` : "none"};

    }
`

export const SignDiv = styled.div`
    width:90%;
    display:flex;
    justify-content:space-between;
    span{
        color:#fff;
    }
`