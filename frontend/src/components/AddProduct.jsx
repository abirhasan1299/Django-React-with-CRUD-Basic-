import { useState } from "react";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function AddProduct() {
    const [image,setImage] = useState(null)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category,setCategory] = useState("")

    const navigate = useNavigate();

    const AddProductInfo = async () => {
        let form = new FormData()

        form.append('name',name)
        form.append('price', price)
        form.append('description', description)
        form.append('category', category)
        if(image !== null){
            form.append('image', image)
        }

        await axios({
            method:'post',
            url:'http://127.0.0.1:8000/',
            data:form
        }).then((response)=>{
            console.log(response.data)
            navigate('/')
        })
    }

    return (
        <>
            <Header />
            <div className="row">
                <div style={{width:'50%',margin:'auto'}}>
    
                        <h1>Add Product</h1>    

                        <input type="text" className="form-control" name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" /> <br />

                        <input type="number" className="form-control" name='price' value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" /> <br />

                        <textarea type="text" className="form-control" name='description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" /> <br />
                        
                        <input type="text" className="form-control" name='category' value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" /> <br />

                        <input type="file" className="form-control" name='image' src={name} onChange={(e) => setImage(e.target.files[0])} /> <br />

                        <button className="btn btn-success" onClick={AddProductInfo}>Done</button>
                
                </div>
            </div>
        </>
    );
}
export default AddProduct;