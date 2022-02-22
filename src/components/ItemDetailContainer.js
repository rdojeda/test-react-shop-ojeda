import { useParams } from "react-router-dom";
//import { ItemDetailList } from "./ItemDetailList";

import { useEffect, useState } from "react";
import { obtenerProductos } from "../data/productos";

export const ItemDetailContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams([]); 

  useEffect(() => {
    obtenerProductos
      .then((res) => {
        setProductos(res);
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [id]);

  return (
    <>
      {isLoading ? (
        <h1 className="text-center mt-2">Cargando....</h1>
      ) : (
        <>
          <h1>{title}</h1>
          <div className="container mt-5">
              <ItemList productos={productos[id]} />
          </div>
        </>
      )}
    </>
  );
};


