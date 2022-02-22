import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const Item = ({title, pictureUrl, price}) => {
   let { id } = useParams();

     return (
            
      <>     
        
         <div class="col">
            <div class="card h-100">
               <img src={pictureUrl} class="card-img-top" alt={title} />
                  <div class="card-body">
                     <h5 class="card-title text-uppercase">{title}</h5>
                     <h3>$ {price}</h3>
                  </div>
                  <hr></hr>
                  <div class="card-footer">
                     <Link to={`/detalles/${id}`} className="btn btn-primary">Ir a Comprar</Link>

                  </div>
            </div>
         </div>        
     </>
   
  )
}
