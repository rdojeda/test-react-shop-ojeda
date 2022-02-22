import { Link } from 'react-router-dom';
export const Item = ({id, title, pictureUrl, price}) => {

     return (
       <>
         <div className="col">
           <div className="card h-100">
             <img src={pictureUrl} className="card-img-top" alt={title} />
             <div className="card-body">
               <h5 className="card-title text-uppercase">{title}</h5>
               <h3>$ {price}</h3>
             </div>
             <hr></hr>
             <div className="card-footer">
               <Link to={`/ItemDetail/${id}`} className="btn bt-primary">
               <button className="btn btn-primary">Ir a Detalles</button> 
                           
               </Link>
             </div>
           </div>
         </div>
       </>
     );
}
