import { Link } from "react-router-dom";
import "./Pages.css";
import Card from "../components/ui/Card";

function levelPage() {
  return (
    <div>
      <h1>La Trobe Sport Learn To Swim Interactive Levelling Guide</h1>
      <Card>
        <div className="content">
          <h3>Congratulations! Your Swim level is:Level #!</h3>
          <div className="actions">
            <Link
              to="/enrol"
              className="btn"
              style={{ textDecoration: "none" }}
            >
              Next
            </Link>
            <div className="actions">
              <Link
                to="/enrol"
                className="btn"
                style={{ textDecoration: "none" }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default levelPage;
