
import { TopBackgound, Topcontainer, ButtonRegister, Title, CardUsersMain, CardUsersChild, AvatarUsers, UserIconTrash, ContainerFilter, CardUsersHeaderMain,CardUsersHeaderChild } from "../../../Components/Button/style.js"
import UserImage from "../../../src/assets/users.png"
import Trash from "../../../src/assets/trash.svg"
import api from "../../../Services/api.js"
import { use, useEffect } from "react"
import { data, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Avatar } from "@mui/material"
import { InputUser } from "../style.js"
import styled from "styled-components"




function Pageteste() {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {


        async function getUsers() {

            const { data } = await api.get("/usuarios")


            setUsers(data)

        }

        getUsers()
    }, [])


    //excluir usuario

    async function deleteUser(id) {

        await api.delete(`/usuarios/${id}`)

        const newUsers = users.filter(user => user.id !== id)

        setUsers(newUsers)

    }



    // Filtra os usuários com base no termo de pesquisa
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())

    )



    return (


        <Topcontainer>



            <TopBackgound theme="page2" >


                
                   {/* Filtro de Usuários do header */}
                    {filteredUsers.map(user => (

                        <CardUsersHeaderMain >
                          

                            <AvatarUsers src={`https://api.dicebear.com/9.x/micah/svg?seed=Felix=${user.id}=gradientLinear,soli`}></AvatarUsers>

                                            
 
                        </CardUsersHeaderMain>

                       
                          

                    ))}

                

            </TopBackgound>

            <Title theme="listusers">Lista de Usuários</Title>


            <ContainerFilter>

                <label htmlFor="searchInput"> Pesquisar usuário:     </label>
                <input type="text" id="inputusers" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} placeholder="Pesquisar usuário" />


            </ContainerFilter>

            <CardUsersMain>



                {filteredUsers.map(user => (

                    <CardUsersChild >




                        <AvatarUsers src={`https://api.dicebear.com/9.x/micah/svg?seed=Felix=${user.id}=gradientLinear,soli`}></AvatarUsers>


                        <div className="user-info">
                            <ul>
                                <li>{"Nome: " + user.name}</li>
                                <li>{"Email: " + user.email}</li>
                                <li>{"Idade: " + user.age}</li>
                            </ul>
                        </div>


                        <UserIconTrash src={Trash} alt="imagnes de usuarios" onClick={() => deleteUser(user.id)} ></UserIconTrash>


                    </CardUsersChild>


                ))}




            </CardUsersMain>




            <ButtonRegister theme="primary" onClick={() => navigate("/")}>Voltar ao inicio</ButtonRegister>






        </Topcontainer>



    )

}


export default Pageteste