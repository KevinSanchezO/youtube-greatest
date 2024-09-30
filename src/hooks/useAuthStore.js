import { useDispatch, useSelector } from "react-redux"
import { onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {
    const {status, user, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async () => {
        dispatch(onChecking());

        dispatch(onLogin({name: "Kevin", password: "123456"}));
    }

    const startLogout = async() => {
        dispatch(onLogout());
    }

    return {
        status, user, errorMessage,
    
        startLogin,
        startLogout
    }    
}