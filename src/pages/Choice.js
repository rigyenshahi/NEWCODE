import { Link } from "react-router-dom";
import "./Pages.css";
import Card from "../components/ui/Card";

function choicePage() {
  return (
    <div>
      <h1>La Trobe Sport Learn To Swim Interactive Levelling Guide</h1>
      <Card>
        <div className="content">
          <h3>Are you looking for classes for?</h3>
          <Link
            to="/childAge"
            className="btn"
            style={{ textDecoration: "none" }}
          >
            Child
          </Link>
          <Link
            to="/childOne"
            className="btn"
            style={{ textDecoration: "none" }}
          >
            Adult
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default choicePage;
