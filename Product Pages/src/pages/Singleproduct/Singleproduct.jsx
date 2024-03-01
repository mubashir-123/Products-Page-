import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import axios from "axios";
const Singleproduct = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      }).catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <>
      <div className="flex flex-wrap justify-center mt-20">
        {data ? <Card title={data.title} desc={data.description} src={data.image} showBtn={false} /> : <h2>Loading ...</h2>}
      </div>
    </>
  )
}

export default Singleproduct