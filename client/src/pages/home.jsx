import React, {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../store/authSlice"
import { useEffect } from "react"
import HeaderTop from "./component/headerTop"
import Navbar from "./component/navbar"
import Hero from "./component/hero"
import axios from 'axios'
import imgLoader from '../assets/loader.gif'

function HomePage() {
    const dispatch = useDispatch()
    const user = useSelector((state)=> state.auth.user)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const getNewProducts = async () =>{
            try {
                setLoading(true)
                setError(null)
                const response = await axios.get('http://localhost:3000/api/v1/newproducts')
                setProducts(response.data)
            } catch (error){
                setError('Failed to fetch products')
            } finally {
                setLoading(false)
            }
        }

        getNewProducts()
    }, [])

    const handleLogout = ()=>{
        dispatch(logout())
    }

    return (
        <div>
            <HeaderTop />
            <Navbar />
            <Hero />
            {user && (<button onClick={handleLogout} className="btn btn-accent m-8">logout</button>)}
            <section className="bg-white">
                <div className="md:container mx-auto">
                    <p className="text-center text-black font-bold text-5xl py-10">NEW ARRIVALS</p>
                    <div id="product-container" className="py-7">
                        {loading && (
                            <div className="justify-items-center"><img src={imgLoader}/></div>
                        )}
                        {error && (
                            <p className="text-center text-red-500 text-3xl">Something went wrong: {error}</p>
                        )}
                        {!loading && !error && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                {products.map((product)=> (
                                    
                                    <div key={product.id}>
                                        <img src={product.images[0]} alt={product.name || 'Product Image'} />
                                        <p className="text-black font-bold text-xl">{product.name}</p>
                                        <p className="text-black">{product.averageRating}/5</p>
                                        <p className="text-black text-md">${product.price}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage