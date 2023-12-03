import React, { useState } from "react";

export default function UploadFile() {
  const [imageBase64, setImageBase64] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  //fonction pour afficher le fichier si c'est une image et le transféré par la suite 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      const imageFile = ["image/jpeg", "image/jpg", "image/png"];
      const maxSize = 100 * 1024; // 100 KB (en octets)

      if (imageFile.includes(file.type)) {
        if (file.size <= maxSize) {
          reader.readAsDataURL(file);
          reader.onload = (e) => {
            const fileBase64 = e.target.result;
            setImageBase64(fileBase64);
          };
        }
      }
      transfereFile(file)
    }
  };

  //fonction de 
  const transfereFile = (file) => {
    setUploading(true)
    // const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '', true);

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        const percent = (e.loaded / e.total) * 100;
        setProgress(percent);
      }
    };

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 ) {
        // Traitement après le téléchargement complet
        console.log('Téléchargement terminé avec succès');
        setUploading(false);
      }
    };

    xhr.send(formData);
  };
  return (
    <div className=" ">
      <div className="flex justify-between items-center h-screen ">
      <div className="w-full mx-40 h-96 relative border border-gray-500 hover:border-gray-500 rounded-lg overflow-hidden bg-repeat">
        <label
          htmlFor="createStatusUrl"
          className="flex flex-col justify-center items-center absolute h-full -translate-x-1/2 left-1/2 bottom-0 z-10 w-full pb-6 pt-10 cursor-pointer bg-gradient-to-l from-gray-700/60"
        >
          <input
            id="createStatusUrl"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          {imageBase64 ? (
            <img
              src={imageBase64}
              alt="Uploaded"
              accept="image/png, image/jpeg,image/jpg"
              className="w-full h-full absolute object-cover"
            />
          ) : (
            <ion-icon
              name="image"
              className="text-3xl text-teal-600 md hydrated"
              role="img"
              aria-label="image"
            >
              <div className="w-6 h-6 bg-[#0D9488]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon s-ion-icon"
                  viewBox="0 0 512 512"
                >
                  <title>Image</title>
                  <path d="M416 64H96a64.07 64.07 0 00-64 64v256a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V128a64.07 64.07 0 00-64-64zm-80 64a48 48 0 11-48 48 48.05 48.05 0 0148-48zM96 416a32 32 0 01-32-32v-67.63l94.84-84.3a48.06 48.06 0 0165.8 1.9l64.95 64.81L172.37 416zm352-32a32 32 0 01-32 32H217.63l121.42-121.42a47.72 47.72 0 0161.64-.16L448 333.84z"></path>
                </svg>
              </div>
            </ion-icon>
          )}
          <span className="text-white mt-2">Browse to Upload file</span>
        </label>
      </div>
    </div>
    
    {uploading && (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg z-10">
        <div className="">
          <p>Téléchargement en cours...</p>
          <div className="w-full bg-gray-300 h-2 mt-2 rounded-full">
            <div
              className="h-full bg-blue-300 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        </div> 
      )}
   
    </div>
  );
}
