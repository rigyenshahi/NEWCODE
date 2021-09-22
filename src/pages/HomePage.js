import QuestionList from "../components/questions/QuestionList";

const DATA = [
  {
    id: "m1",
    title: "Welcome to the La Trobe Swimming Program!",
    image:
      "https://www.latrobe.edu.au/sport/ds-images/Lady-in-water-with-instructor.jpg",
    description:
      "Please complete our questionnaire to find your appropriate swim level",
  },
];

function HomePage() {
  return (
    <section>
      <h1>La Trobe Sport Swim Program</h1>
      <QuestionList questions={DATA} />
    </section>
  );
}

export default HomePage;
