import pikachu from "../assets/Pikachu.png";
import PokemonCard from "../components/PokemonCard";
export const Home = () => {
  return (
    <>
      <div className="container mx-auto w-full  flex flex-col flex-wrap justify-center items-center ">
        <img className="mt-10" src={pikachu} alt="" />
        <h1 className="text-9xl font-bold text-[262626] uppercase mb-1">
          Pokemon List
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aut
          ipsam cum nesciunt? Ipsum ea ratione laborum architecto nulla eius a
          commodi, maiores debitis similique
        </p>
        <h3 className="mt-10 text-2xl font-semibold text-[262626]">
          Search for a Pokemon by Name or using its Nationnal Pokedex number
        </h3>
        <div className=" w-2/3 flex justify-center items-center relative mt-5">
          <input
            placeholder="Input your Pokemon name !"
            className="text-gray-800 font-semibold border border-gray-400 rounded-lg p-4 sm:w-[100%] md:w-[70%] lg:w-[50%]"
          />
          <button className=" w-[100px] py-4 rounded-xl text-xl bg-yellow-400 hover:bg-yellow-500 mx-3 font-bold">
            Search
          </button>
        </div>
      </div>
      <PokemonCard />
    </>
  );
};
