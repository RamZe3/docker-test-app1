import {ref} from "vue";
import {useCookies} from "vue3-cookies";
import axios from 'axios'
import {useStore} from "vuex";
import {getHash, newGuid} from "@/common/GuidLogic";
import {API_URL, API_URL_MAIN, USERS_API_URL} from "@/common/API";

export function useUser() {
    const user = ref(
        {
            id: '',
            login: '',
            email: '',
            password: '',
        })
    const cookies = useCookies();
    const store = useStore()

    const login = async () => {
        const response = await axios.get(API_URL_MAIN +'/login?login=' + user.value.login
            + "&password=" + getHash(user.value.password))

        if (response.data !== '') {
            localStorage.setItem("userID", response.data.id)
            store.commit("setIsAuth", true)
            cookies.cookies.set("Login", user.value.login)
            cookies.cookies.set("Password", getHash(user.value.password))
            store.commit("setLogin", response.data.login)
            store.commit("setUserID", response.data.id)
            return ""
        } else {
            return "Неверно указан логин или пароль!"
            //store.commit("setIsAuth", false)
        }
    }

    const register = async () => {
        const response = await axios.get(API_URL_MAIN +'/login?login=' + user.value.login
            + "&password=" + getHash(user.value.password))
        const response1 = await axios.get(API_URL_MAIN +'/login?login=' + user.value.email
            + "&password=" + getHash(user.value.password))
        if (response.data === '' && response1.data === '') {
            localStorage.setItem("userID", user.value.id)
            store.commit("setIsAuth", true)
            const newUser = {
                login: user.value.login,
                email: user.value.email,
                password: getHash(user.value.password),
            }
            const A_response = await axios.post(API_URL_MAIN + USERS_API_URL, newUser);
            cookies.cookies.set("Login", user.value.login)
            cookies.cookies.set("Password", getHash(user.value.password))
            store.commit("setLogin", A_response.data.login)
            store.commit("setUserID", A_response.data.id)
            return ""
        } else {
            return "Такой пользователь уже существует!"
            //store.commit("setIsAuth", false)
        }
    }

    const signOut = () => {
        localStorage.removeItem("userID")
        cookies.cookies.remove("Login")
        cookies.cookies.remove("Password")
        store.commit("setIsAuth", false)
        store.commit("setLogin", '')
        store.commit("setUserID", null)

    }

    return {
        user, login, register, signOut
    }
}