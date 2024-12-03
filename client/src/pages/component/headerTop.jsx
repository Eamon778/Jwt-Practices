import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

function HeaderTop() {
    const [toggler, setToggler] = useState(true)
    const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated)
    
    useEffect(()=>{
        if (isAuthenticated){
            setToggler(false)
        }
    }, [isAuthenticated])

    return (
        <>
            {toggler && (
                <div className="bg-black">
                    <div className=" md:container mx-auto flex justify-between items-center">
                        <p className="text-sm text-white text-center flex-grow py-2">Sign up and get 20% off to your first order. <a href="/register" className="font-bold underline">Sign Up Now</a></p>
                        <button onClick={()=> setToggler(false)} className="text-white text-right text-lg">x</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default HeaderTop