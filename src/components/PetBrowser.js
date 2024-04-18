import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  const handleAdoptPet = (id) => {
    onAdoptPet(id);
  };
  return (
    <div className="ui cards">
      {pets.map((pet) => (
        <Pet key={pet.id} pet={pet} onAdoptPet={handleAdoptPet} />
      ))}
    </div>
  )
}

export default PetBrowser;