import EntityName from "./EntityName";
import StarRating from "./StarRating";

const EntityHeader = (props) => {
  return (
    <div className="grid sm:grid-cols-3 bg-gray-300 sticky sm:top-0 z-10 ">
      <div className="hidden sm:block ">
        <EntityName name={props.name} />
      </div>
      <StarRating ratings={props.ratings} ratingsCount={props.ratingsCount} />
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
