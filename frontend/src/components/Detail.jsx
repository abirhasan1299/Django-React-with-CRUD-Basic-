import { useEffect, useState } from 'react';
import Header from './Header.jsx';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import BarLoader from "react-spinners/ScaleLoader";



function Detail(){

    let [loading, setLoading] = useState(true);
    const [product,setProduct] = useState("")

    const { id } = useParams()
    const navigate = useNavigate()

    const getProduct = async () => {
        const { data } = await axios.get(`http://localhost:8000/${id}/`);
        console.log(data)
        setProduct(data)
        setLoading(false)
    }

    const deleteProduct = async(id)=>{
        await axios.delete(`http://localhost:8000/${id}/`)
        navigate('/')
    }

    useEffect(()=>{
        getProduct();
    },[])

    return(
        <>
            {product?
                <>
                    <Header />   
                <div>
                    <p className='display-3'>{product.name}</p>
                    <div className='row'>
                        <div className="d-flex justify-content-center">
                            <div className='product'>
                                <div className="d-flex justify-content-center">
                                    <img src={product.image} alt="" width={'500px'} />
                                </div>
                                <br />
                                <div className="d-flex justify-content-between">
                                    <div>
                                        Price:<span class="badge text-bg-primary"> {product.price}</span>
                                    </div>
                                    <div>
                                        Category:<span class="badge text-bg-warning"> {product.category}</span>
                                    </div>
                                </div>
                                <br />
                                <strong>Description</strong>
                                <p>
                                    {product.description}
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around'>
                            <div>
                                <Link to={`/update/${product.id}/`} className='btn btn-success'>Update</Link>
                            </div>
                            <div>
                                <button className='btn btn-danger' onClick={() => deleteProduct(product.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                </>
                
            :
                <div className='loader'>
                    <BarLoader
                        color={"#36d7b7"}
                        loading={loading}
                        size={800}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            }
            
        </>
    )
}
export default Detail; 