import React, { useState } from "react";
import { building, unit } from "../data";
import image from '../image/bagguette.png'

export default function AddTach() {
  const [typeNames, setTypeNames] = useState(unit);
  const [tachTable, setTachTable] = useState([]);
  const [newTach, setNewTach] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleTransfer = (e) => {
    window.location.reload();
  };
  const handleReset = (e) => {
    setTachTable([]);
  };
  const handleTypeChanging = (e) => {
    setTypeNames((prev) =>
      e.target.value === "unit"
        ? unit
        : e.target.value === "building"
        ? building
        : []
    );
  };
  const handleChange = (e) => {
    setNewTach(e.target.value);
  };
  const handleAddTach = () => {
    if (newTach.trim() !== "") {
      setTachTable((prev) => [...prev, newTach]);
      setNewTach("");
    }
  };

  const handleDelete = (id) => {
    setTachTable((prev) => prev.filter((tach, index) => index !== id));
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        action="\#"
        className=" w-fit h-fit p-8 bg-white border-slate-400 rounded-lg shadow-sm shadow-gray-400"
      >
        <h2 className="text-left font-bold mb-4">Nouvelle tâche</h2>

        <div className="flex flex-col">
          <label htmlFor="titre" className="text-left font-semibold">
            Titre{" "}
          </label>
          <input
            type="text"
            id="titre"
            name="titre"
            className="w-[75%] bg-gray-50 p-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 hover:border-blue-100"
            placeholder="Nettoyage en printemps"
          />
        </div>
        <div className="mt-4 ">
          <label htmlFor="tache" className="flex justify-between  font-semibold">
            Type de tâche
          </label>
          <div className="mt-1 flex justify-start gap-4 w-[100%]">
            <div className="flex-1 items-center mb-4 w-40 h-fit p-2 m rounded-lg border border-gray-200 focus:bg-blue-300">
              <input
                id="tache"
                type="radio"
                value=""
                name="tach"
                className="w-10 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
              />
              <label htmlFor="" className="ms-2 text-sm font-medium  ">
                Non spécifier
              </label>
            </div>
            <div className="flex-1 items-center mb-4 w-40  h-fit p-2 m rounded-lg border border-gray-200 focus:bg-blue-300">
              <input
                id="tache"
                type="radio"
                value=""
                name="tach"
                className="w-10 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
              />
              <label htmlFor="" className="ms-2 text-sm font-medium  ">
                Entretien
              </label>
            </div>
            <div className="flex-1 items-center mb-4 w-40  h-fit p-2 m rounded-lg border border-gray-200 focus:bg-blue-300">
              <input
                id="tache"
                type="radio"
                value=""
                name="tach"
                className="w-10 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
              />
              <label htmlFor="" className="ms-2 text-sm font-medium  ">
              Incident
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-row border border-gray-200  w-full h-fit p-2 rounded-md">
          <div className="w-20 ">
            <img src={image} alt="badImage"></img>
          </div>
          <div>
            <p className="text-gray-400 text-base">Ajouter les équipement sur la page de votre bien ou votre immeuble</p>
          </div>
        </div>
        <div className="flex justify-start gap-2 mt-4">
          <div className="  w-[200%]">
            <label htmlFor="Type" className="flex justify-start  font-semibold mb-1">
              Type du bien :
            </label>
            <select
              id="Type"
              name="Type"
              className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-200 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => handleTypeChanging(e)}
            >
              <option value="unit">Unit</option>
              <option value="building">Building</option>
            </select>
          </div>
          <div className="w-[200%]">
            <label
              htmlFor="nom type"
              className="flex justify-start  font-semibold w-full mb-1"
            >
              Nom du bien :
            </label>
            <select
              id="nom type"
              name="nom type"
              className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-200 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {typeNames.length > 0 &&
                typeNames.map((data) => (
                  <option key={data.id} value={data.name}>
                    {data.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="mt-4">
          <h6 className="flex justify-start  font-semibold mb-1">Sous-tâch</h6>
          {tachTable.map((tach, index) => (
            <div className="flex flex-row items-center gap-1">
              <div className="bg-blue-gray-900 w-[20px] h-[20px] border rounded-md"></div>
              <input
                type="text"
                id={index}
                key={index}
                name="titre"
                value={tach}
                className="w-[50%] bg-white p-2 border  border-gray-500 text-gray-900 text-sm rounded-lg focus:border-blue-500 hover:border-blue-100"
                placeholder="Nettoyage en printemps"
              />
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => handleDelete(index)}
              >
                {" "}
                supprimer
              </span>
            </div>
          ))}
          <div className="flex flex-row items-center gap-1">
            <div className="bg-blue-gray-900 w-[20px] h-[20px] border rounded-md"></div>
            <input
              type="text"
              name="titre"
              value={newTach}
              className="w-[50%] bg-white p-2 border  border-gray-500 text-gray-900 text-sm rounded-lg focus:border-blue-500 hover:border-blue-100"
              placeholder="Nettoyage en printemps"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="mt-4 flex flex-row items-center gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <button className="text-blue-500 font-medium" onClick={handleAddTach}>
            add
          </button>
        </div>
        <div className="flex justify-end">
          <button
            type="reset"
            onClick={handleReset}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-200 dark:text-gray-400 "
          >
            Rénitialisation
          </button>
          <button
            type="submit"
            onClick={handleTransfer}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-[#FF7900] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-500 focus:z-10  dark:focus:ring-gray-700 dark:bg-[#FF7900] dark:text-white "
          >
            Enregister
          </button>
        </div>
      </form>
    </div>
  );
}
