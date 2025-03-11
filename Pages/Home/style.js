
import styled from "styled-components"

export const Topcontainer = styled.div`

    background-color:#181f36;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly;
    padding: 20px;
    height:100vh;
    
`

export const TopBackgound = styled.div`




background: linear-gradient(to right, #fe7e5d, #7f3841);
height:30vh;
width:90vw;
border-radius:30px;
display:flex;
justify-content:center;
align-items: center;
max-width: 800px;


img{

    max-width: 80%;
    max-height: 80%;

}

`

export const FormUser = styled.form`


display:flex;
flex-direction: column;
align-items: center;
gap: 20px;
max-width: 500px;
    

`

export const Title = styled.h1`

 text-align: center;
 color: white;
 font-size: 50px;
 
 

`

export const ContainerInputs = styled.div`

display:flex;
gap: 10px;
   
`


export const InputUser = styled.input`


height: 50px;
border-radius: 6px;
border: none;
outline: none;
padding: 12px 8px;
width: 100%;

`

export const LabelUser = styled.label`

color:white;
margin: 5px 8px;
font-size: 13px;  

span{

    color:red;
    font-size: 10px;   
    font-style:bold;
    font-weight: bold;
    
    
}

`

// export const Button = styled.button`

// border:none;
// background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
// font-size: 16px;
// color: white;
// padding: 16px 32px;
// width:fit-content;
// height: 60px;
// border-radius: 16px;
// cursor: pointer;

// &:hover{
//     opacity: 0.8;
// }

// &:active{
//     opacity: 0.6;
// }

// `
