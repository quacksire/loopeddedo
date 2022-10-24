import Courses from "../components/Courses";
import AssignmentList from "../components/AssignmentList";
import NewsList from "../components/NewsList";
export default function Home() {
  return (
    <div>
      <h1> Courses </h1>
      <Courses />
      <h1> Assignments </h1>
      {/* <AssignmentList /> */}
      <h1> News </h1>
      {/* <NewsList /> */}
    </div>
  );
}
