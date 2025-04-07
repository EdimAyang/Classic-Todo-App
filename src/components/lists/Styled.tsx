import styled from "styled-components";






export const ListsStyled = styled.section`
    width:90%;
    height:300px;
    overflow-y:scroll;
    margin-top:20px;
`
export const Card = styled.div`
    width:100%;
    height:80px;
    background-color:#ffff;
    color:#1F1F1F;
    border-radius:15px;
    padding:10px;
    margin-bottom:20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:20px;
`
export const Item = styled.label`
    height:100%;
    width:80%;
    color:#1F1F1F;
    text-align:start;
    font-size:1.3em;
    background-color:#fff;
    align-content:center;
    overflow-y:scroll;
    
`
export const Actions = styled.div`
    height:100%;
    width:20%;
    display:flex;
    flex-direction:column;
    gap:10px;
    align-items:center;
    justify-content:center;
    background-color:#ffff;
    border-left:1px solid;
    img{
        width:40%;
        background-color:transparent;
    }
    input[type= "checkbox"]{
        position: relative;
        appearance: none;
        -webkit-appearance:none;
        border-radius:10% ;
        height:20px;
        width:20px;
        background-color:#cfcfcfcf;
    }
    input[type="checkbox"]:checked{
        background-color:#54BF36;
    }
    input[type="checkbox"]::before{
        content:"";
        position:absolute;
        top:3px;
        left:6.5px;
        width:4px;
        height:10px;
        border:4px solid transparent;
        border-left:none;
        border-top:none;
        transform:rotate(45deg);
    }
    input[type="checkbox"]:checked:before{
        border-color:#ffff;
        animation:checkboxAim .2s ease;
    }

    @keyframes checkboxAim {
        from {
            transform:rotate(45deg) scale(0)
        }
    }
`