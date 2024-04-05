const Banner = ({ title, subtitle }) => {
  return (
    <div
      className="h-56 w-full border-2 h-screen flex items-center justify-center bg-emerald-600 text-white flex flex-col"
      style={{ height: "12rem" }}
    >
      <h1 className="text-4xl font-bold text-center mb-2">{title}</h1>
      <div className="w-7 border-b border-white"></div>
      <p className="text-md mt-2 text-center italic">{subtitle}</p>
    </div>
  );
};

export default Banner;
