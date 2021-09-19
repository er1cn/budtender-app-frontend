import React, {useState, useEffect} from 'react'
import { BASE_URL } from '../Constraints/routes';
import NewStrainForm from './NewStrainForm';
import Search from './Search';
import StrainList from './StrainList';


function StrainPage() {

    const [strains, setStrains] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(BASE_URL)
            .then(r => r.json())
            .then((strainsArray) => {
                setStrains(strainsArray)
            });
    }, []);

    function handleAddStrain(newStrain) {
      const newStrainsArray = [...strains, newStrain];
      setStrains(newStrainsArray);
    }


    const displayedStrains = strains.filter((strain) => {
      return strain.name.toLowerCase().includes(searchTerm.toLowerCase());
    });


    return (
      <main>
        <NewStrainForm onAddStrain={handleAddStrain} />
        <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <StrainList strains={displayedStrains} />
      </main>
    );
}

export default StrainPage
