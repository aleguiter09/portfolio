import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Presentation from "../Presentation/Presentation";
import Projects from "../Projects/Projects";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Presentation />
      <Experience />
    </div>
  );
}
