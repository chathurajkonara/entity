import headBanner from "../images/headBanner.jpg";

const HeadBanner = () => {
  return (
    <div className="bg-gray-200">
      <img
        src={headBanner}
        alt="Head Banner"
        className="w-full h-36 sm:h-56 object-cover rounded-md my-2 sm:my-4"
      />
    </div>
  );
};

export default HeadBanner;
