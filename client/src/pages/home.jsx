import { useDispatch, useSelector } from "react-redux"
import { logout } from "../store/authSlice"
import { useEffect } from "react"

function HomePage() {
    const dispatch = useDispatch()
    const user = useSelector((state)=> state.auth.user)

    useEffect(()=>{
        document.title = "RafCart | Home"
    }, [])

    const name = user.name;

    const handleLogout = ()=>{
        dispatch(logout())
    }
    return (
        <div>
            <h1>Hello</h1>
            <p>{name}</p>
            <button className="bg-blue-500 px-5 p-3 mt-20 ms-5 text-white rounded-lg" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default HomePage