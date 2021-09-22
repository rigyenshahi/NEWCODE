import QuestionItem from "./QuestionItem";
import classes from "./QuestionList.module.css";

function QuestionList(props) {
  return (
    <ul className={classes.list}>
      {props.questions.map((question) => (
        <QuestionItem
          key={question.id}
          id={question.id}
          image={question.image}
          title={question.title}
          description={question.description}
        />
      ))}
    </ul>
  );
}

export default QuestionList;
