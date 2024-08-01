import { useLoaderData } from "react-router-dom";
import NavBar from "../../Shared/NavBar";
import Pets from "./Pets";
import SearchPet from "../../Shared/SearchPet/SearchPet";

const AllPets = () => {
  const { pets } = useLoaderData();
  console.log(pets);

  return (
    <div>
      <NavBar></NavBar>

      <h1 className="text-3xl text-center mt-5  mb-5">All pets</h1>

      <SearchPet></SearchPet>
      <div className="w-full mx-auto mt-10">
        <div className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center">
          {pets.map((pet) => (
            <Pets key={pet.id} pet={pet}></Pets>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPets;
