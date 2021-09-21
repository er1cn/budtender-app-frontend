import React from 'react'

function Strain({ strain, updateStrain, deleteStrain }) {
    const { id, name, image, description, flavors } = strain

    function handleDeleteStrain() {
          deleteStrain(id);
    }




    function handleChangeStrain() {
        const updatedStrain = {
            ...strain,
            name: name,
            image: image,
            description: description,
            flavors: flavors,
        }
        updateStrain(id, updatedStrain)
    }





    return (
      <div className="strain">
        <h2>{name}</h2>
        <div className="strain-desc">
          <img src={image} alt={name} />
          <p>Description: {description}</p>
          <p>Flavors: {flavors}</p>
        </div>
        <button className="strain-btn" onClick={handleDeleteStrain}>Delete Strain</button>
        <button className="strain-btn" onClick={handleChangeStrain}>
          Edit Strain
        </button>
      </div>
    );
}

    export default Strain;
