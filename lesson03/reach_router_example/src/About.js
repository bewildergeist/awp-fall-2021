import { Link } from "@reach/router";

// Nothing special happens in this component, except for the Link
function About(props) {
  return (
    <div className="box background-orange">
      <h1>About.js</h1>
      <p>This app is about Routing..</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default About;
