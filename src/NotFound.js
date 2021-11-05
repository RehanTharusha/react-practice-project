import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notFound">
            <h1>Sorry</h1>
            <p>That page could not be found.</p>
            <Link to={'/'}>Return to the home page.</Link>
        </div>
     );
}
 
export default NotFound;