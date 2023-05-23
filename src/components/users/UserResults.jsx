import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ThemeContext } from '../../context/github/theme/ThemeContextPro';
import { GithubContext } from '../../context/github/GithubContextPro';
import styles from "../shared/loadingAnime.module.css"
import stylesLight from "../shared/loadingAnimeLight.module.css"
import UserItem from './UserItem';
// import SearchItem from './SearchItem';
const UserResults = () => {

    const { theme } = useContext(ThemeContext)
    const { state, fetchUsers, fade } = useContext(GithubContext)




    useEffect(() => {
        const getUsers = async () => {
            await fetchUsers()

        }

         getUsers()


    }, [])

    // users.map(item =>
    //     <h3 className="text-center">{item.login}</h3>
    // )







    return (
        <div className={` ${fade ? "a op" : "a"} ${(state.users.length === 0 ? "flex justify-center items-center" : '  grid  gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 p-3 max-sm:px-7')}`} >

           

                <>

                    {

                        state.searchActive && state.items.length >= 0 ?
                            state.items.length === 0 && state.searchActive ? <p className=' text-xl font-semibold text-error absolute right-[%]  sm:right-[40%] '>Sorry ! Your search did not match any users </p>
                                 :



                                state.items.map((item, i) =>

                                    <UserItem key={item.id} user={item} index={i} />

                                )

                            :

                            state.loading ? "" :
                                state.users.map((item, i) =>
                                    <UserItem key={item.id} user={item} index={i} />
                                )

                    }

                </>
           
        </div>

    );
};

export default UserResults;



