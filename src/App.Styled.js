import styled from "styled-components";

export const AppStyled = styled.div`
& h2{
    margin-bottom: 20px;
}
& section:not(:last-child){
    margin-bottom:40px;
}
& button{
    width: 100px;
    height: 30px;
    border: none;
    text-transform: capitalize;
}
& button:hover,& button:focus{
    background-color:#eb4034;
    cursor: pointer;
    
}
& button:not(:last-child){
    margin-right:20px;
}
`