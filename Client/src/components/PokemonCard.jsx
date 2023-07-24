import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState([]);

  let i = 0;
  let a = 0;
  const pokemonList = [];
  const getDataPokemon = async () => {
    for (i = 1; i <= 150; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

      await axios.get(url).then((res) => {
        const responseData = res.data;
        pokemonList.push(responseData);
      });
    }

    for (a = 1; a <= pokemonList.length; a++) {
      setPokemon(pokemonList);
    }
  };

  const uppercaseName = (name) => {
    let uppername = name[0].toUpperCase();

    let nameUpper = name.replace(name[0], uppername);
    return nameUpper;
  };

  const changeColorClass = (typename) => {
    let classTxt = "px-2 py-2 mx-2 rounded-lg text-white font-semibold";
    if (typename === "grass") classTxt += " bg-green-500";
    else if (typename === "poison") classTxt += " bg-purple-500";
    else if (typename === "fire") classTxt += " bg-orange-500";
    else if (typename === "water") classTxt += " bg-blue-500";
    else if (typename === "bug") classTxt += " bg-green-700 ";
    else if (typename === "rock") classTxt += " bg-yellow-900 ";
    else if (typename === "ground") classTxt += " bg-gray-700 ";
    else if (typename === "psychic") classTxt += " bg-pink-500 ";
    else if (typename === "ghost") classTxt += " bg-purple-900 ";
    else if (typename === "dragon") classTxt += " bg-red-500 ";
    else if (typename === "flying") classTxt += " bg-blue-700 ";
    else if (typename === "ice") classTxt += " bg-blue-300 ";
    else if (typename === "electric") classTxt += " bg-yellow-500 ";
    else classTxt += " bg-gray-500";
    return (
      <>
        <div className={classTxt}>{typename}</div>
      </>
    );
  };

  useEffect(() => {
    getDataPokemon();
    console.log(pokemon);
  }, []);

  return (
    <div className="w-full mt-10  bg-slate-300">
      <div className="container mx-auto pt-7 grid grid-cols-4 gap-6 pb-7 cursor-pointer">
        {pokemon.map((val) => (
          <>
            <Link to={`/detail/${val.id}`}>
              <div className=" text-2xl text-black h-[350px] font-bold py-5 w-[350px] text-center rounded-md bg-white hover:bg-gray-400">
                {uppercaseName(val.name)}
                <img
                  className="w-40 mx-auto"
                  src={val.sprites.front_default}
                  alt=""
                />
                <h1 className="text-center"> #{val.id} </h1>
                <div className="flex justify-center text-lg mt-3">
                  {val.types.map((type) => changeColorClass(type.type.name))}
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
