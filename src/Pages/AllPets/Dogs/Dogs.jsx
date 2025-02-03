import PetsCard from "../../../components/PetsCard/PetsCard";
import useAllPets from "../../../hooks/useAllPets";
import NavBar from "../../../Shared/NavBar";
import SearchBar from "../SearchPet/SearchBar";

const Dogs = () => {
  const [pets] = useAllPets();
  const filteredDogs = pets.filter((pet) => pet.type.toLowerCase() === "dog");
  console.log(filteredDogs);
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div className="mt-8">
        <SearchBar></SearchBar>
      </div>
      <div className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center mt-10">
        {filteredDogs.map((dog) => (
          <PetsCard key={dog._id} pet={dog}></PetsCard>
        ))}
      </div>
    </div>
  );
};

export default Dogs;
