import PuenteContact from "../assets/PuenteContact.jpg";

function CardContact() {
  return (
    <div className="containerCard">
      <div className="cardshape">
        <div className="card mb-2" />
        <div className="row">
          <div className="col-md-4">
            <img
              src={PuenteContact}
              className="rounded float-left"
              alt="Melanie"
              style={{ width: "18rem", marginLeft: "10rem" }}
            />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">
                Recorre cualquier lugar del mundo con Econotravel{" "}
              </h5>
              <p className="card-text">
                {" "}
                La Tarraco Romana, ciudad llena de viejas piedras, algunas
                conocidas de antaño, otras aún por descubrir.Cultura viva que
                nos remonta 2000 años atrás.Sea como fuere,una ciudad mágica
                para perderse y conocer que respira la huella del Imperio Romano
                y vibra entre nosotros. No te pierdas la experiencia de sentir
                el pasado .
              </p>
              <div>
                <button type="button" className="btn btn-success">
                  Contactanos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContact;
