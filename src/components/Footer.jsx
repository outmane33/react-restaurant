import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full bg-[#242b24] px-4">
      {/* Section 1 - Logo and Description */}
      <div className="max-w-7xl mx-auto flex flex-col gap-8 py-20 text-center">
        <img
          src="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/logo-footer.svg"
          alt="Footer Logo"
          className="w-[120px] mx-auto max-w-full"
        />
        <p className="text-white text-center max-w-2xl mx-auto text-sm md:text-base">
          Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus
          eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum
          metusurabitur.
        </p>
      </div>

      {/* Section 2 - Contact and Info Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center md:text-left">
        <div className="space-y-2">
          <p className="font-semibold">Opening Hours</p>
          <p>Mon - Sun / 12 am - 12pm</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">Contact</p>
          <p>Phone: (850) 324-7023</p>
          <p>Email: company@mail.com</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">Address</p>
          <p>304 North Cardinal St.</p>
          <p>Dorchester Center, MA 02124</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">Additional Info</p>
          <p>Nam nec nisl placerat tempus erat</p>
          <p>Condimentum metusurabitur</p>
        </div>
      </div>

      {/* Section 3 - Copyright and Social Icons */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-white pt-8 pb-8 text-center md:text-left">
        <p className="text-sm">
          Copyright © 2024 - WordPress Theme by CreativeThemes
        </p>
        <div className="flex justify-center md:justify-end gap-4 text-2xl">
          <FaFacebook className="hover:text-gray-300 transition-colors" />
          <FaSquareXTwitter className="hover:text-gray-300 transition-colors" />
          <FaInstagramSquare className="hover:text-gray-300 transition-colors" />
        </div>
      </div>
    </div>
  );
}
