import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Project = ({ data }) => {
  const { imgUrl, name, description } = data;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-2xl rounded-lg">
        <figure>
          <img src={imgUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <p className="">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Project;
