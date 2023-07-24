import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const DetailPokemon = () => {
  const [pokemonbyid, setPokemonbyid] = useState([]);
  const [pokemonbynext, setPokemonbynext] = useState([]);
  const [pokemonbyback, setPokemonbyback] = useState([]);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("null");
  const [nextimage, setNextimage] = useState(null);
  const [backimage, setBackimage] = useState(null);
  const [types, setTypes] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [stats, setStats] = useState([]);
  const { id } = useParams();

  let box = 10;
  let nextid = parseInt(id);
  let backid = parseInt(id);

  const uppercaseName = (name) => {
    let uppername = name[0].toUpperCase();

    let nameUpper = name.replace(name[0], uppername);
    return nameUpper;
  };

  const getPokemonId = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios.get(url).then((res) => {
      setPokemonbyid(res.data);
      setImage(res.data.sprites["front_default"]);
      setName(res.data.name);
      setTypes(res.data.types);
      setAbilities(res.data.abilities);
      setStats(res.data.stats);
    });
  };

  const getPokemonNext = (id) => {
    const urlnext = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios.get(urlnext).then((res) => {
      setPokemonbynext(res.data);
      setNextimage(res.data.sprites["front_default"]);
    });
  };
  const getPokemonBack = (id) => {
    const urlback = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios.get(urlback).then((res) => {
      setPokemonbyback(res.data);
      setBackimage(res.data.sprites["front_default"]);
    });
  };

  const handleNextAndBack = () => {
    getPokemonId();
    getPokemonNext(nextid + 1);
    getPokemonBack(backid - 1);
  };

  useEffect(() => {
    getPokemonId();
    getPokemonNext(nextid + 1);
    getPokemonBack(backid - 1);
    console.log(pokemonbyid);
    console.log(pokemonbynext);
    console.log(pokemonbyback);
  }, [getPokemonId(), getPokemonNext(nextid + 1), getPokemonBack(backid - 1)]);

  const changeColorClass = (typename) => {
    let classTxt = "px-4 py-2 mx-2 rounded-lg text-white font-semibold";
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

  return (
    <>
      <div className="container mx-auto pt-10 h-[300px]">
        <div className="container mx-auto h-[500px]">
          <div className="flex justify-center items-center">
            {/* Back Pokemon button */}
            <Link to={`/detail/${pokemonbyback.id}`}>
              <div className="flex bg-slate-300 mx-10 py-2 px-4 items-center rounded-xl  hover:bg-slate-400 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-black "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <img src={backimage} alt="" />

                <div className="text-black mr-3 font-bold">
                  #{pokemonbyback.id}
                </div>
                <div className="text-black font-bold">{pokemonbyback.name}</div>
              </div>
            </Link>

            <div className="flex flex-col   items-center ">
              <div className="bg-[#ECECEC] w-[250px]  rounded-xl flex flex-col">
                <img
                  className="w-[200px] h-[200px] mx-auto"
                  src={image}
                  alt=""
                />
                <div className=" text-center font-bold text-2xl mb-2 text-slate-800">
                  #{pokemonbyid.id} {uppercaseName(name)}
                </div>
              </div>
            </div>

            {/* Next Pokemon button */}
            <Link
              to={`/detail/${parseInt(id) + 1}`}
              onClick={handleNextAndBack}
            >
              <div className="flex bg-slate-300 mx-10  py-2 px-4 items-center rounded-xl hover:bg-slate-400 cursor-pointer">
                <div className="text-black font-bold">{pokemonbynext.name}</div>
                <div className="text-black mx-2 font-bold">
                  #{pokemonbynext.id}
                </div>
                <img src={nextimage} alt="" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full mt-5 bg-slate-400 pb-5">
        <div className="container mx-auto flex flex-col ">
          <div className="grid grid-cols-2  mt-5">
            <div className=" flex flex-col items-center rounded-3xl ">
              <div className="w-[200px] h-[200px] rounded-full bg-[#ECECEC] flex items-center ">
                <img className="mx-auto h-full" src={image} alt="" />
              </div>
              <h1 className="text-3xl font-bold mt-5"> #{pokemonbyid.id} </h1>
              <h1 className="text-3xl font-bold mb-5"> {pokemonbyid.name} </h1>
              <div className="grid grid-cols-2 gap-10 ">
                <div className="text-xl bg-slate-300 rounded-xl font-semibold flex p-5">
                  <h1>Weight : {pokemonbyid.weight}</h1>
                </div>
                <div className="text-xl bg-slate-300 rounded-xl font-semibold flex p-5">
                  <h1>Height : {pokemonbyid.height}</h1>
                </div>
                <div className="text-xl bg-slate-300 rounded-xl font-semibold flex flex-col p-5">
                  <h1> Abilities : </h1>
                  {abilities.map((val) => (
                    <>
                      <h1>- {val.ability.name}</h1>
                    </>
                  ))}
                </div>
                <div className="text-xl font-semibold bg-slate-300 rounded-xl flex flex-col p-5">
                  <h1 className="mb-5"> Types : </h1>
                  <div className="flex ">
                    {types.map((val) => changeColorClass(val.type.name))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-300 rounded-2xl">
              <div className="flex flex-col ">
                <div className="mt-5 text-4xl font-bold text-center">
                  States
                </div>
                {stats.map((val) => (
                  <>
                    <div className="flex my-7 mx-10 font-bold text-xl">
                      {uppercaseName(val.stat.name)} :
                      <div className="flex mx-5">
                        <div className="w-[100%] bg-red-500 mx-1 rounded-xl h-5"></div>
                        <div className="w-[100%] bg-red-500 mx-1 rounded-xl">
                          1
                        </div>
                        <div className="w-[100%] bg-red-500 mx-1 rounded-xl">
                          1
                        </div>
                        <div className="w-[100%] bg-red-500 mx-1 rounded-xl">
                          1
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
