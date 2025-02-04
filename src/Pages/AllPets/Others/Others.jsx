import PetsCard from "../../../components/PetsCard/PetsCard";
import useAllPets from "../../../hooks/useAllPets";

import SearchBar from "../SearchPet/SearchBar";

const Others = () => {
  const [pets] = useAllPets();
  const others = pets.filter((pet) => pet.type.toLowerCase() === "others");
  return (
    <div>
      <div className="mt-8">
        <SearchBar></SearchBar>
      </div>
      <div className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center mt-10">
        {others.map((other) => (
          <PetsCard key={other._id} pet={other}></PetsCard>
        ))}
      </div>
    </div>
  );
};

export default Others;
