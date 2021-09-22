import { Link } from "react-router-dom";
import "./Pages.css";
import Card from "../components/ui/Card";

function enrollPage() {
  return (
    <div>
      <h1>Enrollment Form</h1>
      <Card>
        <div>
          <label>Sample:</label>
          <input type="text" required id="name" />
        </div>
        <div>
          <label>Sample:</label>
          <input type="text" required id="mobile" />
        </div>
        <div>
          <label>Sample:</label>
          <input type="text" required id="email" />
        </div>
        <div className="actions">
          <Link to="/enrol" className="btn" style={{ textDecoration: "none" }}>
            Submit
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default enrollPage;
