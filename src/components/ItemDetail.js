import { ItemCount } from "./ItemCount";

export const ItemDetail = ({title, description, category, pictureUrl,stock, price }) => {
  
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="card mb-3 mw-card">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={pictureUrl}
                className="img-fluid rounded-start"
                alt={title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="text-uppercase">
                  {category}
                </h2>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <h3>$ {price}</h3>
                <hr></hr>
              </div>
              <div className="card-footer">
                <ItemCount stock={stock} initial={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};            