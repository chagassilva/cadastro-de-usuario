

import api from "../../Services/api"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useId } from 'react';
//import { ButtonRegister } from "../../Components/Button/style"
import { TopBackgound, Topcontainer, ButtonRegister, Title, CardUsersMain, CardUsersChild, AvatarUsers, UserIconTrash, ContainerFilter } from "../../Components/Button/style"
import UserImage from "../../src/assets/users.png"
import Trash from "../../src/assets/trash.svg"

// biblioteca para fazer navegar entre paginas





function ListUsers() {


    const [users, setUsers] = useState([])
    const navigate = useNavigate()

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
    //excluir usuario





        return (


            <Topcontainer>

                <TopBackgound theme="page2" >
                    <img src={UserImage} alt="imagnes de usuarios" />
                </TopBackgound>

                <Title>Lista de Usuários</Title>


                <ContainerFilter>

                    <label htmlFor="searchInput">Pesquisar usuário:  </label>
                    <input type="text" id="searchInput" placeholder="Pesquisar usuário"/>


                </ContainerFilter>

                <CardUsersMain>



                    {users.map(user => (

                        <CardUsersChild key={user.id}>



                            <AvatarUsers src={`https://avatar.iran.liara.run/public/boy?username=${user.id}`}></AvatarUsers>

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

    export default ListUsers