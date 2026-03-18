import { Link } from "react-router-dom";
import "../css/home.css";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [borderState, setBorderState] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBorderState((prev) => !prev);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="intro">
      <header>
        <h1>
          Bun venit la Krisztina Cuisine <span className="wave">👋</span>
        </h1>
        <h2 style={{ margin: "1rem", color: "red" }}>
          <span style={{ textDecoration: "underline", marginRight: "1rem" }}>
            OFERTĂ DE PAȘTE!
          </span>
          Pască cu brânză dulce la 40 lei/kg!
        </h2>
        <img
          className="nou-praji"
          src="/assets/pasca.webp"
          alt="mousse picture"
          style={{
            borderColor: borderState ? "hotpink" : "pink",
            boxShadow: `0 0 7.5px 7.5px  ${borderState ? "hotpink" : "pink"}`,
          }}
        />
      </header>
      <p style={{ fontWeight: "bold" }}>
        Pe această pagină puteți vedea catalogul meu de prăjituri!
      </p>

      <a
        href="tel:+40744827373"
        style={{
          textDecoration: "none",
          borderRadius: "12px",
          color: "black",
          padding: "0.5rem 1rem",
          display: "inline-block",
          transition: "border-color 0.6s ease",
        }}
      >
        <p className="telefon">
          Apăsați să sunați <br /> 0744827373
        </p>
      </a>

      <h2 className="h2">
        <Link to={"/prajituri"}>La prăjituri</Link>
      </h2>
    </div>
  );
};

export default HomePage;
