import Courses from "../components/Courses";
import Assignments from "../components/Assignments";
export default function Home() {
  return (
    <div>
      <h1> Courses </h1>
      <Courses />
      <h1> Assignments </h1>
      <Assignments />
    </div>
  );
}
