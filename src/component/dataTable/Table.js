import React, { useState } from "react";

export default function Table() {
  const columns = ["ID", "First Name", "Last Name", "Email", "Age", "City"];
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [dataAux, setdataAux] = useState({});
  const [userData, setuserData] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      age: 30,
      city: "New York",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      age: 25,
      city: "Los Angeles",
    },
    {
      id: 3,
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob.johnson@example.com",
      age: 35,
      city: "Chicago",
    },
  ]);

  //pour ouvrir le popup
  const openPopup = () => {
    setPopupOpen(true);
  };
  //pour fermer le popup
  const closePopup = () => {
    setPopupOpen(false);
  };
  //fonction pour la mise à jour de UserData
  const publishData = () => {
    console.log("---- après le traitement userData", userData);
    if (dataAux.id !== undefined) {
      const nouveauUserData = userData.map((utilisateur) =>
        utilisateur.id === dataAux.id ? dataAux : utilisateur
      );
      // Mettre à jour l'état avec la nouvelle copie du tableau
      setuserData(nouveauUserData);
      closePopup();
      console.log("---- après le traitement userData", userData);
    }
  };

  //fonction pour prépare les données qui vont être passé
  //au PopUp pour afficher les données précedentes
  const handleEditAction = async (id) => {
    for (let i = 0; i < userData.length; i++) {
      if (id === userData[i].id) {
        setdataAux(userData[i]);
      }
    }
    openPopup();
  };
  //fonction pour gérer la suppression de UserData
  const handleDeletAction = async (id) => {
    if (id !== undefined) {
      const nouveauUserData = userData.filter(
        (utilisateur) => utilisateur.id !== id
      );
      setuserData(nouveauUserData);
    }
  };

  //fonction pour modifier le state au modification des inputs
  const handleChange = (e) => {
    setdataAux((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className=" ">
      <table className=" border divide-solid rounded-md table-auto  shadow-lg  text-gray-500 dark:text-gray-400  md:table">
        <thead className="text-xs divide-x divide-inherit h-14  divide-dashed text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((data) => (
              <th className="px-6 py-3 min-w-max font-bold border-r border-l border-t  mb-5">
                {data}
              </th>
            ))}
            <th className="px-6 py-3 min-w-max font-bold border-r border-l border-t  mb-5">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="border divide-solid">
          {userData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>
              <td>{data.age}</td>
              <td>{data.city}</td>
              <td className="px-6 py-4">
                <div className="flex gap-3 max-w-sm text-base">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="text-green-400 h-4 w-4 cursor-pointer"
                    onClick={() => handleEditAction(data.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    ></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="text-red-500 h-4 w-4 cursor-pointer"
                    onClick={() => handleDeletAction(data.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    ></path>
                  </svg>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isPopupOpen && dataAux && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg">
          <span
            className="absolute top-0 right-0 p-2 cursor-pointer"
            onClick={closePopup}
          >
            &times;
          </span>
          <p>Update Data</p>
          <label className="mb-1 text-sm font-medium text-gray-900">
            firstName:
          </label>
          <input
            class="block w-full p-1  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 "
            name="firstName"
            type="text"
            value={dataAux.firstName}
            onChange={(e) => handleChange(e)}
            required={true}
          />

          <label className="mb-1 text-sm font-medium text-gray-900">
            lastName:
          </label>
          <input
            class="block w-full p-1  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 "
            name="lastName"
            type="text"
            value={dataAux.lastName}
            onChange={(e) => handleChange(e)}
            required={true}
          />
          <label className="mb-1 text-sm font-medium text-gray-900">
            email:
          </label>
          <input
            class="block w-full p-1  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 "
            name="email"
            type="text"
            value={dataAux.email}
            onChange={(e) => handleChange(e)}
            required={true}
          />
          <label className="mb-1 text-sm font-medium text-gray-900">age:</label>
          <input
            class="block w-full p-1  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 "
            name="age"
            type="number"
            value={dataAux.age}
            onChange={(e) => handleChange(e)}
            required={true}
          />
          <label className="mb-1 text-sm font-medium text-gray-900">
            city:
          </label>
          <input
            class="block w-full p-1  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 "
            name="city"
            type="text"
            value={dataAux.city}
            onChange={(e) => handleChange(e)}
            required={true}
          />
          <button
            onClick={() => publishData()}
            className=" text-gray-900 mt-2  bg-white border border-gray-300 focus:outline-none hover:bg-gray-100   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-400 dark:hover:bg-gray-700 dark:hover:border-gray-600 "
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}
