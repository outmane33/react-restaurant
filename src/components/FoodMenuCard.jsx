export default function FoodMenuCard({ title, price, background }) {
  return (
    <div
      className="max-w-[1500px] w-full min-h-[50vh] mx-auto flex flex-col justify-between p-6 md:p-16 md:px-28 relative bg-cover bg-center"
      style={{
        backgroundImage: `url('${background}')`,
      }}
    >
      {/* Black shadow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

      {/* Spacer div */}
      <div></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 w-full text-white">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold w-full md:w-auto">
            {title}
          </p>
          <p className="italic text-sm md:text-base">Starting from</p>
        </div>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
          <p className="max-w-xl text-sm md:text-base">
            Choose your favorite category mauris orci dignissim nisl, id gravida
            nunc enim quis nibh. Maecenas convallis eros a ante dignissim.
          </p>
          <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex items-center justify-center bg-[#ffb700] font-semibold text-black text-2xl md:text-3xl">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
}
