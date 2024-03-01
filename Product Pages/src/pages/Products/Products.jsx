import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card";


const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <div className="mt-7 flex flex-wrap justify-center">Products</div>
            <div className="mt-14 flex flex-wrap justify-center gap-4">
                {data !== null && data.length > 0 ? data.map((item) => {
                    return <Card key={item.id} title={item.title} desc={item.description} src={item.image} id={item.id} />
                }) : <h2>Loading ... </h2>}
            </div>
        </>
    )
}

export default Products