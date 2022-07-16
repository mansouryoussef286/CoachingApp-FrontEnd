import { Outlet } from "react-router";
import { Signin } from "./components/SignInComponents/Signin";


const useAuth=()=>{
    // var cookies= document.cookie.split(';').map(cook=> cook.split('=')).reduce((acc,[key,value])=>({...acc,[key.trim()]:value}),{});
    // console.log(cookies);

}

const ProtectedRoute=()=>{
    const isAuth=useAuth();
return isAuth?<Outlet/>:<Signin/>
    
};
export default ProtectedRoute;