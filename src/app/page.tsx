import Education from "./components/Education";
import Experience from "./components/Experience";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Presentation />
      <div className="flex flex-col md:flex-row gap-12 w-full">
        <Experience />
        <div className="flex flex-col w-full gap-3">
          <Education />
          <Projects />
        </div>
      </div>
    </>
  );
}
