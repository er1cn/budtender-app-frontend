import { useState, useEffect } from "react";
import Header from "./Components/Header";
import NewStrainForm from "./Components/NewStrainForm";
import StrainCard from "./Components/StrainCard";

function App() {
  const [strains, setStrains] = useState([]);

  useEffect(() => {
    fetch("/strains")
      .then((r) => r.json())
      .then(setStrains);
  }, []);

  function handleAddStrain(addedStrain) {
    setStrains((strains) => [...strains, addedStrain]);
  }

  function handleUpdateStrain(updatedStrain) {
    setStrains((strains) =>
      strains.map((strain) => {
        return strain.id === updatedStrain.id ? updatedStrain : Strain;
      })
    );
  }

  function handleDeleteStrain(deletedStrain) {
    setStrains((strains) =>
      strains.filter((strain) => strain.id !== deletedStrain.id)
    );
  }

  return (
    <>
      <Header />
      <main>
        <NewStrainForm onAddStrain={handleAddStrain} />
        <section className="strain-list">
          {strains.map((strain) => (
            <StrainCard
              key={strain.id}
              Strain={strain}
              onUpdateStrain={handleUpdateStrain}
              onDeleteStrain={handleDeleteStrain}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
