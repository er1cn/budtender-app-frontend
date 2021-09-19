import React from 'react'
import StrainCard from './StrainCard';

function StrainList({strains}) {
    return (
      <div>
        <ul className="cards">
          {strains.map((strain) => {
            return <StrainCard key={strain.id} strain={strain} />;
          })}
        </ul>
      </div>
    );
}

export default StrainList
