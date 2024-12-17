import { MapPinned } from "lucide-react";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div>
      <Header
        title="Contact"
        background="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/contact-hero-image.webp"
      />
      {/* Book a table online */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-7xl mx-auto text-white items-center py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
        {/* Left Section - Responsive Layout */}
        <div className="w-full lg:w-1/2 bg-[#242b24] p-8 sm:p-12 lg:p-24 lg:pr-44 flex flex-col gap-8 lg:gap-16">
          {/* Contact Box */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 lg:w-[70px] lg:h-[70px] rounded-full flex items-center justify-center bg-[#ffb700] flex-shrink-0">
              <MapPinned size={36} />
            </div>
            <div>
              <p className="font-semibold text-lg lg:text-xl whitespace-nowrap">
                Physical Address
              </p>
              <p className="text-sm whitespace-nowrap">
                304 North Cardinal St.
              </p>
              <p className="text-sm whitespace-nowrap">
                Dorchester Center, MA 02124
              </p>
            </div>
          </div>

          {/* Repeat for other contact boxes with same structure */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 lg:w-[70px] lg:h-[70px] rounded-full flex items-center justify-center bg-[#ffb700] flex-shrink-0">
              <MapPinned size={36} />
            </div>
            <div>
              <p className="font-semibold text-lg lg:text-xl whitespace-nowrap">
                Physical Address
              </p>
              <p className="text-sm whitespace-nowrap">
                304 North Cardinal St.
              </p>
              <p className="text-sm whitespace-nowrap">
                Dorchester Center, MA 02124
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 lg:w-[70px] lg:h-[70px] rounded-full flex items-center justify-center bg-[#ffb700] flex-shrink-0">
              <MapPinned size={36} />
            </div>
            <div>
              <p className="font-semibold text-lg lg:text-xl whitespace-nowrap">
                Physical Address
              </p>
              <p className="text-sm whitespace-nowrap">
                304 North Cardinal St.
              </p>
              <p className="text-sm whitespace-nowrap">
                Dorchester Center, MA 02124
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Responsive Layout */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-10">
          <p className="font-semibold text-2xl lg:text-4xl text-center lg:text-left">
            Book a table online
          </p>
          <p className="text-center lg:text-left">
            Aenean sed lorem est. Sed quis neque ut nibh suscipit imperdiet ac
            non augue. Aenean ornare sit amet lectus.
          </p>

          <form className="flex flex-col gap-4 w-full max-w-md mx-auto lg:mx-0">
            <input
              type="text"
              placeholder="Name"
              className="p-3 w-full bg-[#232824] text-white border-none rounded"
            />
            <input
              type="text"
              placeholder="Date & Time"
              className="p-3 w-full bg-[#232824] text-white border-none rounded"
            />
            <select
              name=""
              id=""
              className="w-full bg-[#232824] border-none text-white p-3 rounded"
            >
              <option value="">persons</option>
            </select>
            <input
              type="text"
              placeholder="Phone"
              className="p-3 w-full bg-[#232824] text-white border-none rounded"
            />
            <input
              type="text"
              placeholder="Email"
              className="p-3 w-full bg-[#232824] text-white border-none rounded"
            />
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#4e5545] font-semibold px-8 py-3 w-fit rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* bottom banner */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row bg-[#151714] mb-12 md:mb-24">
        {/* Image Section */}
        <div className="w-full lg:w-[700px] bg-[#4e5545] flex justify-center items-center">
          <img
            src="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/contact-cta-image.webp"
            alt="Promo"
            className="w-full h-[250px] lg:h-[400px] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-10 bg-[#4e5545] py-10 lg:py-0">
          <div className="flex flex-col gap-6 lg:gap-10 max-w-md text-center lg:text-left">
            <p className="font-semibold uppercase text-xs sm:text-sm">
              Valid until 25 may 2022
            </p>
            <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
              Buy 1 Get 1 Free
            </p>
            <p className="text-sm sm:text-base">
              Cras gravida bibendum dolor eu varius. Morbi fermentum velit nisl,
              eget vehicula lorem sodales eget.
            </p>
            <button className="text-[#4e5545] bg-white self-center lg:self-start px-6 sm:px-10 py-3 sm:py-4 hover:bg-black hover:text-white transition-all duration-300 rounded">
              Grab Voucher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
