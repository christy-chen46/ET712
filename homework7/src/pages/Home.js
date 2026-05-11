import lov from "../images/lov.jpg";

function Home() {
  return (
    <div className="page">
      <h1>We are the League of Villains!</h1>

      <img src={lov} alt="Nature" />

      <p>
        Our ultimate goal: to destroy hero society
      </p>
    </div>
  );
}

export default Home;