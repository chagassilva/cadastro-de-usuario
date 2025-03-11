
import { useRef } from "react"
import api from "../../services/api.js"
import { useNavigate } from "react-router-dom"
import  {ButtonRegister}   from "../../Components/Button/style.js"

import {
  Title,
  TopBackgound,
  Topcontainer,
  FormUser,
  InputUser,
  LabelUser,
  ContainerInputs
} from "./style.js"

import UserImage from "../../src/assets/users.png"


function Home() {

  const navigate = useNavigate()

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()



  //Inicio função para cadastrar o usuário
  async function RegisterNewUser() {

  await api.post("/usuarios", {

      email: inputEmail.current.value,
      age: inputAge.current.value,
      name: inputName.current.value
      

    })

    
    alert("Usuário cadastrado com sucesso!")
    navigate("/lista")
  }
 //Termina função para cadastrar o usuário

  return (

    <Topcontainer>

      <TopBackgound>
        <img src={UserImage} alt="imagnes de usuarios" />
      </TopBackgound>

      <FormUser>

        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>

          <div>
            <LabelUser>Nome:<span> *</span></LabelUser>
            <InputUser type="text" placeholder="Nome de usuário" ref={inputName} />
          </div>

          <div><LabelUser>Idade:<span> *</span></LabelUser>
            <InputUser type="number" placeholder="Idade do usuário" ref={inputAge} />
          </div>

        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <LabelUser>
            E-mail:<span> *</span>
          </LabelUser>
          <InputUser type="email" placeholder="Digite seu email" ref={inputEmail} />
        </div>



        <ButtonRegister type="button" onClick={RegisterNewUser} theme="primary" >Cadastrar usuário</ButtonRegister>


      </FormUser>

      <ButtonRegister type="button" onClick={()=> navigate("/lista")}>Ver lista de usuarios</ButtonRegister>

    </Topcontainer >

  )
}


export default Home