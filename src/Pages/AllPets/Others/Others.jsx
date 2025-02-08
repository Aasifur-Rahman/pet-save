import PetsCard from "../../../components/PetsCard/PetsCard";
import useAllPets from "../../../hooks/useAllPets";
import { motion } from "framer-motion";
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
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 1 }}
            key={other._id}
          >
            <PetsCard key={other._id} pet={other}></PetsCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Others;
