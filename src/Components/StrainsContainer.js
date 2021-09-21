import React, { useState, useEffect } from 'react';
import Strain from './Strain';
import NewStrainForm from './NewStrainForm';
import "../App.css";

function StrainsContainer() {
  const [strains, setStrains] = useState([]);

  useEffect(() => {
    fetch("/strains")
      .then((r) => r.json())
      .then((strainData) => setStrains(strainData));
  }, []);

  function addStrain(strain) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(strain),
    };

    fetch(`/strains/`, config)
      .then((r) => r.json())
      .then((newStrain) => {
        const newStrains = [...strains, newStrain];
        setStrains(newStrains);
      });
  }

  function deleteStrain(strainId) {
    const config = { method: "DELETE" };
    fetch(`/strains/${strainId}`, config)
      .then((r) => r.json())
      .then(() => {
        const newStrains = strains.filter((strain) => strain.id !== strainId);
        setStrains(newStrains);
      });
  }

  function updateStrain(id, updatedStrain) {
    fetch(`/strains/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStrain),
    })
      .then((r) => r.json())
      .then((updatedStrain) => {
        const updatedStrains = strains.map((strain) => {
          if (strain.id === updatedStrain.id) return updatedStrain;
          return strain;
        });
        setStrains(updatedStrains);
      });
  }

  return (
    <div className="strain-container">
      <NewStrainForm addStrain={addStrain} />
      <div className="strain-container-list">
        {strains.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          strains.map((strain) => {
            return (
              <Strain
                key={strain.id}
                strain={strain}
                deleteStrain={deleteStrain}
                updateStrain={updateStrain}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default StrainsContainer
