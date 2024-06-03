import axios from "axios";
import Header from "./Header";
import { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import BarLoader from 'react-spinners/ScaleLoader';


function ShowProduct() {
    let [loading,setLoading] = useState(true);
    const [product,setProduct] = useState("");

    const getProduct = async()=>{
        const response = await axios.get('http://localhost:8000');
        setProduct(response.data)
        setLoading(false)
    }
    useEffect(()=>{
        getProduct()
    },[])
    return(
        <>
        {
            product?
            <>
            <Header/>
            <p className="display-1" >Show Products</p>
            <div className="row row-cols-auto">
                
                {
                    product.map((products,index)=>(
                        <Card style={{ width: '18rem' }}  className="card">
                            <Card.Img variant="top" src={products.image} />
                            <Card.Body>
                                <Card.Title>{products.name}</Card.Title>
                                <Card.Text>{products.price}</Card.Text>
                                <Card.Text>{products.description}</Card.Text>
                                <Card.Text>{products.category}</Card.Text>
                                <Link to={`product/${products.id}/`} className="btn btn-primary">Details</Link>
                            </Card.Body>
                        </Card>
                    )
                    )
                }
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
    );
}
export default ShowProduct;