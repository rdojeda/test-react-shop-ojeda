import { ItemList } from "./ItemList";

import { useEffect, useState } from 'react';
import { obtenerProductos } from '../data/productos';

export const ItemListContainer = ({ title }) => {
    const[productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
      obtenerProductos
        .then((res) => {
          setProductos(res);
        })
        .finally(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.log('Error', error);
        });

        
  }, []);
    
    return (
      <>
        {isLoading ? (
          <h1 className="text-center mt-2">Cargando....</h1>
        ) : (
          <>
            <h1>{title}</h1>
            <div className="container mt-5">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <ItemList productos={productos} />
              </div>
            </div>
                    </>
        )}
      </>
    );
  
};


