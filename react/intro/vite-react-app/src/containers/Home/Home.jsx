import Card from "../../components/Card/Card";
import something from "./Home.module.scss";

const Home = () => {
  return (
    <main className={something.container}>
      <h2 className={something.title}>Basic React Concepts</h2>
      <Card />
      <Card />
    </main>
  );
};

export default Home;
