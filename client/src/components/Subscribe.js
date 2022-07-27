import playaimage from "../assets/playaimage.jpg";
import "../Styles/Subscribe.css";

export default function Subscribe() {
  return (
    <div className="subscribe">
      <img className="imgSubscribe" src={playaimage} />
      <section id="textsubscribe">
        <p className="slogan">¡No te lo pierdas!</p>
        <h3 className="titlesubscribe">
          Subscribete y recibe un 25% de descuento en tu proxima experiencia
        </h3>
        <button className="registro">Registrarme hoy</button>
      </section>
    </div>
  );
}
