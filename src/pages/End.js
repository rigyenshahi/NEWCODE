import { Link } from "react-router-dom";
import "./Pages.css";
import Card from "../components/ui/Card";

function endPage() {
  return (
    <div>
      <h1>La Trobe Sport Learn To Swim Interactive Levelling Guide</h1>
      <Card>
        <div className="content">
          <h3>
            Fantastic, we are thrilled to hear about your amazing swimming
            ability.
            <h3>
              So we can best place you in a suitable program, please contact
              sport@latrobe.edu.au to request special consideration for our
              Learn To Swim Program.
            </h3>
          </h3>
          <div className="actions">
            <Link
              to="/enrol"
              className="btn"
              style={{ textDecoration: "none" }}
            >
              Next
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default endPage;
