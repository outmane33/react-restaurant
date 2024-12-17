export default function TeamCard({ image, name, job }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-[400px] h-[400px] flex items-center bg-[#242b24] relative">
        <img
          src={image}
          alt=""
          className="w-[290px] bottom-0 left-[15%] absolute object-cover z-[10]"
        />
      </div>
      <p className="font-semibold text-xl">{name}</p>
      <p className="text-[#7c7e7b]">{job}</p>
    </div>
  );
}
