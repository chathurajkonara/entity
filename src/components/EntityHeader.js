import { useEffect, useState } from "react";
//import headBanner from "../images/headBanner.jpg";
import StarRating from "./StarRating";

const EntityHeader = () => {
  const [entity, setEntity] = useState({});

  useEffect(() => {
    setEntity({ name: "Game Kade", ratings: 4.5, ratingsCount: 124 });
  }, []);

  return (
    <div className="grid sm:grid-cols-3 bg-gray-300 sticky sm:top-0 z-10">
      <div className="flex justify-center justify-items-center my-2 sm:my-4">
        {entity.name && (
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-gray-600">
            {entity.name}
          </h1>
        )}
      </div>

      {entity.ratings && (
        <StarRating
          ratings={entity.ratings}
          ratingsCount={entity.ratingsCount}
        />
      )}
      <div className="flex justify-center justify-items-center my-2 sm:my-4">
        <a
          className=" text-xl sm:text-2xl hidden sm:block lg:text-4xl font-extrabold text-green-800 hover:text-blue-600"
          href="https://www.google.com/"
        >
          {" "}
          click to learn more
        </a>
      </div>
    </div>
  );
};

export default EntityHeader;
