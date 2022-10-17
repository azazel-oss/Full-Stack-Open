const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ parts }) => (
  <h4>
    Number of exercises {parts.reduce((acc, curr) => acc + curr.exercises, 0)}
  </h4>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);

const Course = ({ course }) => (
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
);

export default Course;
