import { ItemCount } from "./ItemCount";
import { useParams } from "react-router-dom";
export const ItemDetail = ({price, category, pictureUrl, description, title, stock}) => {
  let { id } = useParams();

  return (
    <>
     <div className="row row-cols-1 row-cols-md-3 g-4">
     <div className="card mb-3 mw-card">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={[id].pictureUrl} className="img-fluid rounded-start" alt={[id].title} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                  <h2 className="text-uppercase">{[id].category}</h2>
                  <h5 className="card-title">{[id].title}</h5>
                  <p className="card-text">{[id].description}</p>
                  <h3>$ {[id].price}</h3>
                  <hr></hr>
              </div>
              <div className="card-footer">
              <ItemCount stock={[id].stock} initial={1}/>
              </div>
            </div>
        </div>
        </div>
        </div>
    </>
  );
};            