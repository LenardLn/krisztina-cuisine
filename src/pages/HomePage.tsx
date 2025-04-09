import { Link } from "react-router-dom";
import "../css/home.css";

const HomePage = () => {
  return (
    <div className="intro">
      <header>
        <h1> Bun venit la Krisztina Cuisine 👋</h1>
        <h2 style={{ margin: "1rem", color: "red" }}>
          <span style={{ textDecoration: "underline" }}>NOU</span> Pască cu
          brânză dulce! 36lei/kg
        </h2>
      </header>
      <p style={{ fontWeight: "bold" }}>
        Pe această pagină puteți vedea catalogul meu de prăjituri!
      </p>
      <a
        href="tel:+40744827373"
        style={{ textDecoration: "none", color: "black" }}
      >
        <p className="telefon">
          Apăsați să sunați <br /> 0744827373
        </p>
      </a>

      <h2 className="h2">
        <Link to={"/prajituri"}>La prăjituri </Link>
      </h2>
    </div>
  );
};

export default HomePage;
