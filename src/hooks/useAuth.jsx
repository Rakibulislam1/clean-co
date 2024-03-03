import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";


const useAuth = () => {
    const useUtils = useContext(AuthContext);
    return useUtils;
};

export default useAuth;