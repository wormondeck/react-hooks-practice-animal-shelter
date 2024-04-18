import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  
    const fetchPets = () => {
      let apiUrl = "http://localhost:3001/pets";
      if (filters.type !== "all") {
        apiUrl += `?type=${filters.type}`;
      }
      fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Error fetching pets:", error));
    };
  


  const updateFilterType = (newType) => {
    setFilters({ type: newType })
  }

  const handleFindPetsClick = () => {
    fetchPets();
  };

  const handleAdoptPet = (id) => {
    const updatedPets = pets.map((pet) => {
      if (pet.id === id) {
        return { ...pet, isAdopted: true };
      }
      return pet;
    });
    setPets(updatedPets);
  };

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={updateFilterType} onFindPetsClick={handleFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;