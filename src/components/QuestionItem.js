import Card from "../ui/Card";
import classes from "./QuestionItem.module.css";
import { Link } from "react-router-dom";
function QuestionItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <Link
            to="/register"
            className={classes.btn}
            style={{ textDecoration: "none" }}
          >
            Get Started!
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default QuestionItem;
