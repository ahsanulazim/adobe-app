import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100dvh-65px)] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl mb-5">Sorry we couldn't find that page!</h1>
        <Link to="/">
          <button className="btn btn-lg btn-main rounded-full">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
