/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"

const Card = ({ title, desc, src, id, showBtn = true }) => {
  const navigate = useNavigate();
  function Singleproduct() {
    navigate(`/Singleproduct/ ${id}`);
  }
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img className="h-56" src={src} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
          <div className="card-actions justify-end">
            {showBtn ? <button className="btn btn-primary" onClick={Singleproduct}>Show More</button> : null}

          </div>
        </div>
      </div>
    </>
  )
}

export default Card