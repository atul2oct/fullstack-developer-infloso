import toast from "react-hot-toast";
import { endpoints } from "../api";
import { apiConnector } from "../apiConnector";
import { setLoading, setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";

const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API,
    RESETPASSTOKEN_API,
    RESETPASSWORD_API,
  } = endpoints;

  export function sendOtp(email,navigate){
    return async(dispatch) => {
        const toastId = toast.loading('Loading...')
        dispatch(setLoading(true))
        try{
            const response = await apiConnector("POST",SENDOTP_API,{
                email,
                checkUserPresent:true,
            })
            console.log("SENDOTP API RESPONSE............", response)
            console.log(response.data.success)

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            toast.success('OTP Send Successfully')
            navigate('/verify-email')
        }catch(error){
            console.log("SENDOTP API ERROR ..........",error)
            toast.error("Could not SENDOTP")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
  }

  export function signUp(
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    otp,
    navigate
  ) {
    return async(dispatch) => {
        const toastId = toast.loading('Loading...')
        dispatch(setLoading(true))
        try{
            const response = await apiConnector('POST',SIGNUP_API,{
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                otp,
            })

            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success('Sign-Up successful')
            navigate('/login')
        }catch(error){
            console.log("SIGNUP API ERROR ..........",error)
            toast.error("Could not SIGNUP the User")
            navigate('/signup')
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
  }

  export function login(email, password, navigate) {
    return async(dispatch) => {
        const toastId = toast.loading('Loading...')
        dispatch(setLoading(true))
        try{
            const response = await apiConnector('POST',LOGIN_API,{
                email,
                password,
            })
            console.log("LOGIN API RESPONSE......",response)

            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success('Login Successfully')
            console.log("response",response)
            dispatch(setToken(response.data.token))
            const userImage = response.data?.user?.image ? response.data.user.image
            : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
            dispatch(setUser({ ...response.data.user, image: userImage}))
            localStorage.setItem('user',JSON.stringify(response.data.user))
            localStorage.setItem('token',JSON.stringify(response.data.token))
            navigate("/dashboard/my-profile")
        }catch(error){
            console.log("LOGIN API ERROR............", error)
            toast.error("Login Failed")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
  }

  export function logout(navigate) {
    return (dispatch) => {
        dispatch(setToken(null));
      dispatch(setUser(null));
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      toast.success("Logges Out!");
      navigate("/");
    }
  }