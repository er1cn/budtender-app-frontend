import React from 'react'

function StrainCard({ strain }) {
    const { name, image, description, flavors, BASE_URL, strains, setStrains } = strain;

   function handleDeleteStrain(id) {
     fetch(BASE_URL + "/strain.id", {
       method: "DELETE",
     });
     const newStrains = strains.filter((strain) => strain.id !== id);
     setStrains(newStrains);
   }
 
    
    return (
      <div>
        <li className="card">
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <h4>
            <p>{description}</p>
          </h4>
          <br />
          <p>Flavors: {flavors}</p>
        </li>
        <button className="strain-btn" onClick={handleDeleteStrain}>
          Delete
        </button>
      </div>
    );
}

export default StrainCard
