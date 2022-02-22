import { useParams } from "react-router-dom";
import { ItemDetail } from './ItemDetail';

import { useEffect, useState } from "react";
import { obtenerProductos } from "../data/productos";

export const ItemDetailContainer = () => {
  let {id} = useParams(); 
  
  const [detail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    obtenerProductos
      .then((res) => {
        setDetail(res);
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
              <ItemDetail {...detail[id]} />
          </div>
        </>
      )}
    </>
  );
};


