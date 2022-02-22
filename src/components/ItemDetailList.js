import { Item } from './Item';
import { useParams } from 'react-router-dom';

export const ItemDetailList = ({productos}) => {
  let { id } = useParams();

  return (
      <>
         
          {productos.map((producto) => (<Item {...producto[id]} key={producto.id}/>) )}
         
        </>
  
  )
}
