import NavBar from "../../Shared/NavBar";
import PetsCard from "./PetsCard/PetsCard";

import SearchBar from "./SearchPet/SearchBar";

import { useEffect, useState } from "react";

const AllPets = () => {
  const [pets, setPets] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/pets")
      .then((res) => res.json())
      .then((data) => setPets(data));
  });

  return (
    <div>
      <NavBar></NavBar>

      <h1 className="text-3xl text-center mt-5  mb-5">All pets</h1>

      <SearchBar setSearch={setSearch}></SearchBar>

      <div className="w-full mx-auto mt-10">
        <div className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center">
          {pets
            .filter((pet) => {
              return search.toLowerCase === ""
                ? pet
                : pet.type.toLowerCase().includes(search);
            })
            .map((pet) => (
              <PetsCard key={pet._id} pet={pet}></PetsCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllPets;
