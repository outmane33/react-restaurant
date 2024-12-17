import { LuBadgeCheck } from "react-icons/lu";
import { LuChefHat } from "react-icons/lu";
import { BiDish } from "react-icons/bi";
import { TbAward } from "react-icons/tb";
import { PiUsersThree } from "react-icons/pi";
import TeamCard from "../components/TeamCard";
import Header from "../components/Header";

export default function About() {
  const teamMembers = [
    {
      image:
        "https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/about-page-cheef.webp",
      name: "Bobby Porter",
      job: "Sous Chef",
    },
    {
      image:
        "https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/chef-2.webp",
      name: "Jeremy Elliot",
      job: "Chef",
    },
    {
      image:
        "https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/chef-3.webp",
      name: "Bianca Powell",
      job: "Pastry chef",
    },
    {
      image:
        "https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/chef-4.webp",
      name: "Johnny Jordan",
      job: "Executive Chef",
    },
    {
      image:
        "https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/chef-5.webp",
      name: "Eugene Collins",
      job: "Meat Chef",
    },
    {
      image:
        "https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/chef-6.webp",
      name: "Jonathan Dean",
      job: "Desert Chef",
    },
  ];
  return (
    <div>
      <Header
        title="About"
        background="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/about-hero-image.webp"
      />
      {/* best place */}
      <div className="w-full px-4 mb-12 md:mb-24">
        <div className="max-w-7xl mx-auto w-full mt-10 md:mt-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left - Image Section */}
          <div className="w-full lg:w-[600px] h-[300px] md:h-[500px] lg:h-[600px] flex items-center bg-[#242b24] relative overflow-hidden">
            <img
              src="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/about-page-cheef.webp"
              alt="Chef"
              className="w-[80%] md:w-[500px] bottom-0 left-[10%] absolute object-cover z-10"
            />
          </div>

          {/* Right - Text Section */}
          <div className="flex flex-col gap-6 md:gap-10 text-white text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <LuBadgeCheck className="text-4xl md:text-6xl bg-[#ffb700] p-2 md:p-3 rounded-full" />
            </div>

            <p className="text-2xl md:text-4xl max-w-full lg:max-w-[400px] font-semibold">
              Our Chef
            </p>

            <div className="flex flex-col gap-4">
              <p className="max-w-full lg:max-w-[500px] text-sm md:text-base">
                Aenean sed lorem est. Sed quis neque ut nibh suscipit imperdiet
                ac non augue. Aenean ornare sit amet lectus non tristique. Nunc
                ut volutpat lectus. Nulla velit augue, pulvinar sed nisi sit
                amet, eleifend fermentum est.
              </p>
              <p className="max-w-full lg:max-w-[500px] text-sm md:text-base">
                Quisque nibh justo, congue ut erat at, aliquet efficitur purus.
                Integer venenatis odio vitae orci efficitur mollis. Donec
                ultrices diam dictum dignissim vestibulum. Proin eleifend nunc
                nunc. Sed non arcu eget lorem viverra sodales.
              </p>
            </div>

            <div className="w-full flex justify-center lg:justify-start">
              <img
                src="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/signature.svg"
                alt="Signature"
                className="w-[150px] md:w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* marks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto w-full px-4 text-white">
        {/* Professional Chefs */}
        <div className="flex flex-col justify-center items-center gap-4 bg-[#4e5545] p-6 md:p-10 rounded-lg">
          <LuChefHat className="text-4xl md:text-5xl" />
          <p className="text-4xl md:text-5xl text-[#f9b618] font-semibold">
            10
          </p>
          <p className="font-semibold text-center">Professional Chefs</p>
        </div>

        {/* Excellent Dishes */}
        <div className="flex flex-col justify-center items-center gap-4 bg-[#4e5545] p-6 md:p-10 rounded-lg">
          <BiDish className="text-4xl md:text-5xl" />
          <p className="text-4xl md:text-5xl text-[#f9b618] font-semibold">
            80
          </p>
          <p className="font-semibold text-center">Excellent Dishes</p>
        </div>

        {/* Years of Experience */}
        <div className="flex flex-col justify-center items-center gap-4 bg-[#4e5545] p-6 md:p-10 rounded-lg">
          <TbAward className="text-4xl md:text-5xl" />
          <p className="text-4xl md:text-5xl text-[#f9b618] font-semibold">
            15
          </p>
          <p className="font-semibold text-center">Years of Experience</p>
        </div>

        {/* Happy Guests */}
        <div className="flex flex-col justify-center items-center gap-4 bg-[#4e5545] p-6 md:p-10 rounded-lg">
          <PiUsersThree className="text-4xl md:text-5xl" />
          <p className="text-4xl md:text-5xl text-[#f9b618] font-semibold">
            20k
          </p>
          <p className="font-semibold text-center">Happy Guests</p>
        </div>
      </div>
      {/* best place */}
      <div className="w-full px-4 mb-16 md:mb-32 lg:mb-64">
        <div className="max-w-7xl mx-auto w-full mt-10 md:mt-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left - Text Section */}
          <div className="flex flex-col gap-6 md:gap-10 text-white text-center lg:text-left w-full lg:w-1/2">
            <p className="text-2xl md:text-4xl max-w-full lg:max-w-[400px] font-semibold">
              Excellent Taste and the Best Quality
            </p>

            <div className="flex flex-col gap-4">
              <p className="max-w-full lg:max-w-[500px] text-sm md:text-base">
                Aenean sed lorem est. Sed quis neque ut nibh suscipit imperdiet
                ac non augue. Aenean ornare sit amet lectus non tristique. Nunc
                ut volutpat lectus. Nulla velit augue, pulvinar sed nisi sit
                amet, eleifend fermentum est.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#4e5545] font-semibold px-6 md:px-10 py-3 md:py-4 w-fit hover:bg-[#5c6854] transition-colors">
                More Details
              </button>
            </div>
          </div>

          {/* Right - Image Section */}
          <div className="w-full lg:w-[600px] h-[300px] md:h-[500px] lg:h-[600px] flex items-center bg-[#242b24] overflow-hidden">
            <img
              src="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/about-video-cover.webp"
              alt="Details"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
      {/* Meet Our Team */}
      <div className="w-full px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto w-full gap-8 md:gap-12 lg:gap-20 text-white text-center">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              job={member.job}
            />
          ))}
        </div>
      </div>
      {/* best place */}
      <div className="w-full px-4 mb-12 md:mb-24 bg-[#171c18]">
        <div className="max-w-7xl mx-auto w-full mt-10 md:mt-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left - Text Section */}
          <div className="flex flex-col gap-6 md:gap-10 text-white text-center lg:text-left w-full lg:w-1/2">
            <p className="text-2xl md:text-4xl max-w-full lg:max-w-[550px] font-semibold">
              Phasellus Dignissim Tellus Euismod
            </p>

            <div className="flex flex-col gap-4">
              <p className="max-w-full lg:max-w-[500px] text-sm md:text-base">
                Mauris neque nisi, faucibus non elementum in, convallis et eros.
                Sed pretium sem libero, vel pellentesque purus ultrices ut. In
                quis leo id massa pulvinar euismod cursus non justo. Sed
                sagittis et urna non efficitur. Nulla nec lacus tincidunt.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#4e5545] font-semibold px-6 md:px-10 py-3 md:py-4 w-fit hover:bg-[#5c6854] transition-colors">
                Book a Table
              </button>
            </div>
          </div>

          {/* Right - Image Gallery Section */}
          <div className="w-full lg:w-[800px] flex flex-col md:flex-row gap-4 lg:gap-10 h-auto lg:h-[600px]">
            <div className="flex flex-col gap-4 lg:gap-10 w-full md:w-1/2 lg:h-full">
              <div className="h-[200px] md:h-[300px] lg:h-[300px] overflow-hidden">
                <img
                  src="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/about-cta-image-1.webp"
                  alt="Gallery Image 1"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="h-[150px] md:h-[200px] lg:h-[260px] overflow-hidden">
                <img
                  src="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/about-cta-image-3-1.webp"
                  alt="Gallery Image 2"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 h-[300px] md:h-[600px] overflow-hidden">
              <img
                src="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/about-cta-image-2.webp"
                alt="Main Gallery Image"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
      {/* bottom banner */}
      <div className="w-full px-4 mb-12 md:mb-24">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row bg-[#151714]">
          {/* Left - Image Section */}
          <div className="w-full lg:w-[700px] bg-[#4e5545] flex justify-center items-center relative py-10 lg:py-0">
            <div className="relative w-[250px] md:w-[350px] h-[250px] md:h-[350px]">
              <img
                src="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/about-cta-image-3.webp"
                alt="Restaurant Interior"
                className="w-full h-full object-cover absolute top-0 left-0"
              />
            </div>
          </div>

          {/* Right - Text Section */}
          <div className="text-white flex flex-col gap-6 md:gap-10 justify-center items-center p-6 md:px-12 lg:px-36 text-center lg:text-left">
            <p className="text-2xl md:text-4xl font-semibold max-w-2xl">
              Our Restaurant Focusing On The Fresh Taste Of High Quality
              Ingredients
            </p>
            <p className="max-w-2xl text-sm md:text-base">
              Mauris neque nisi, faucibus non elementum in, convallis et eros.
              Sed pretium sem libero, vel pellentesque purus ultrices ut. In
              quis leo id massa pulvinar euismod cursus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
