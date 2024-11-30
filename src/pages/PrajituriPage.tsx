import usePraji from "../hooks/usePraji";
import "../css/prajituri.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PrajituriPage = () => {
  const { prajituri } = usePraji();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <>
      <h1>Menu</h1>
      <section id="#top" className="prajitura-section">
        {prajituri.map((prajitura) => (
          <div
            key={prajitura.id}
            className="prajitura-card "
            data-aos="fade-up"
          >
            <div className="descriere">
              <h2 className="nume">{prajitura.nume}</h2>
              <p className="pret">{prajitura.pret}</p>
            </div>

            {prajitura.img && (
              <img
                className="prajituri"
                src={prajitura.img}
                alt={prajitura.nume}
              />
            )}
          </div>
        ))}
        <button className="up-button">
          <a href="#top">^</a>
        </button>
      </section>
    </>
  );
};

export default PrajituriPage;
