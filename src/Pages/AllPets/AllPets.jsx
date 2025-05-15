import { motion } from "framer-motion";
import PetsCard from "../../components/PetsCard/PetsCard";
import useAllPets from "../../hooks/useAllPets";

import SearchBar from "./SearchPet/SearchBar";

import { useState } from "react";


const AllPets = () => {
  const [pets] = useAllPets();
  
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1 className="text-3xl text-center mt-5  mb-5">All pets</h1>

      <SearchBar setSearch={setSearch}></SearchBar>

      <div className="w-full mx-auto mt-10">
        <div className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center">
          {pets 
            .filter((pet ) => {
              return search.toLowerCase() === ""
                ? pet 
                : pet.name.toLowerCase().includes(search) 
            })
            .map((pet) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 1 }}
                key={pet._id}
              >
                <PetsCard pet={pet}></PetsCard>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllPets;
