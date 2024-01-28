import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();

export const CreateAuth = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [serviceData, setServiceData] = useState([]);
    const AuthorizationToken=`Bearer ${token}`;

    const storeToken = (token) => {
        setToken(token);
        return localStorage.setItem("token", token);
    }

    let isLoggedIN = !!token;

    const logoutUser = () => {
        setToken("");
        setUser("");
        return localStorage.removeItem("token");
    }

    const getUserData = async () => {
        try {
            const response = await fetch("http://localhost:5000/user", {
                method: "GET",
                headers: {
                    Authorization: AuthorizationToken
                }
            });
            if (response.ok) {
                const data = await response.json();
                // console.log(data);
                setUser(data.userData)
            }
        } catch (error) {
            console.log("error ",error);
        }
    }
    const getServiceData=async()=>{
        try {
            const response=await fetch("http://localhost:5000/service", {
                method: "GET"
            })
            if (response.ok){
                const sData=await response.json();
                setServiceData(sData);
                // console.log(serviceData);

            }

        } catch (error) {
            console.log("error ",error);
            
        }
    }
    useEffect(() => {
        getServiceData();
            
    }, []);
    useEffect(() => {
        if(isLoggedIN){
            getUserData();
        }
        
            
    }, [token]);

    return (
        <AuthContext.Provider value={{ storeToken, logoutUser, isLoggedIN ,user,serviceData,AuthorizationToken}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    // const AuthConsumer=useContext(AuthContext);
    // return AuthConsumer;
    return useContext(AuthContext);
}