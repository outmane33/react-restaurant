import { TbClockHour3 } from "react-icons/tb";
import { SlBookOpen } from "react-icons/sl";
import { BiFoodMenu } from "react-icons/bi";
import { FaBagShopping } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { Rating } from "flowbite-react";
import { FaQuoteRight } from "react-icons/fa6";
import Header from "../components/Header";

export default function Home() {
  const menuItems = [
    {
      row1: [
        {
          name: "Salmon fillett",
          description: "Maecenas interdum lorem eleifend orci aliquam mollis.",
          price: "$10",
        },
        {
          name: "Beaf burger",
          description: "Maecenas interdum lorem eleifend orci aliquam mollis.",
          price: "$10",
        },
      ],
      row2: [
        {
          name: "Creamy fish pie",
          description: "Maecenas interdum lorem eleifend orci aliquam mollis.",
          price: "$15",
        },
        {
          name: "Rib eye steak",
          description: "Maecenas interdum lorem eleifend orci aliquam mollis.",
          price: "$15",
        },
      ],
      row3: [
        {
          name: "Filet of sea bass",
          description: "Maecenas interdum lorem eleifend orci aliquam mollis.",
          price: "$25",
        },
        {
          name: "Fried chicken dumpling",
          description: "Maecenas interdum lorem eleifend orci aliquam mollis.",
          price: "$25",
        },
      ],
      row4: [
        {
          name: "Traditional fish and chips",
          description: "Maecenas interdum lorem eleifend orci aliquam mollis.",
          price: "$10",
        },
        {
          name: "Roasted chicken breast",
          description: "Maecenas interdum lorem eleifend orci aliquam mollis.",
          price: "$10",
        },
      ],
    },
  ];

  const MenuItem = ({ name, description, price }) => (
    <div className="flex flex-col w-full md:w-1/2 px-2 mb-6">
      <div className="flex flex-wrap items-center gap-2 md:gap-5">
        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
          {name}
        </p>
        <div className="flex-grow border-b border-[#6e726e] mx-1"></div>
        <p className="text-[#f2ba13] text-lg md:text-xl lg:text-2xl">{price}</p>
      </div>
      <p className="text-[#6e726e] text-sm md:text-base mt-1">{description}</p>
    </div>
  );

  return (
    <div>
      <Header
        title="Life’s Too Short For Boring Food"
        background="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/home-hero-image.webp"
      />
      {/* book our */}
      <div className="grid grid-col-1 sm:grid-cols-3 max-w-7xl mx-auto w-full h-[60vh] sm:h-[30vh] bg-[#4e5545] mt-[-15vh]">
        <div className="flex flex-col gap-4 justify-center items-center text-white">
          <TbClockHour3 className="text-4xl" />
          <p className="text-xl font-semibold">Work Hours</p>
          <p className="text-base">Mon – Sun / 12 am – 12pm</p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center text-white">
          <SlBookOpen className="text-4xl" />
          <p className="text-xl font-semibold">Book a Table</p>
          <p className="text-base">(850) 324-7023</p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center text-white">
          <BiFoodMenu className="text-4xl" />
          <p className="text-xl font-semibold">Best Menu</p>
          <p className="text-base">Taste the difference</p>
        </div>
      </div>
      {/* best place */}
      <div className="w-full mb-64">
        <div className="max-w-7xl mx-auto w-full mt-20 flex flex-col lg:flex-row items-center gap-64 ">
          {/* left */}
          <div className="w-[500px] px-8 sm:px-0 flex flex-col sm:flex-row items-center gap-10 sm:gap-0">
            <img
              src="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/home-composition-image-1.webp"
              alt=""
              className=" sm:w-[400px] lg:w-[500px] object-cover z-[10]"
            />
            <img
              src="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/home-composition-image-2.webp"
              alt=""
              className="sm:ml-[-300px] sm:w-[450px] object-cover"
            />
          </div>
          {/* right */}
          <div className="flex flex-col gap-10 text-white px-8 lg:px-0">
            <p className="text-3xl lg:text-4xl max-w-[400px] font-semibold ">
              The Best Place To Eat Is Where The Chef Loves To Cook
            </p>
            <p className="max-w-[500px]">
              Mauris neque nisi, faucibus non elementum in, convallis et eros.
              Sed pretium sem libero, vel pellentesque purus ultrices ut. In
              quis leo id massa pulvinar euismod cursus non justo. Sed sagittis
              et urna non efficitur nulla nec lacus tincidunt.
            </p>
            <div className="w-full flex flex-col md:flex-row md:items-center ">
              <div className="flex items-center gap-6 border border-[#363d37] px-4 py-2 flex-1">
                <FaBagShopping className="text-[#ffb700]" />
                Take away
              </div>
              <div className="flex items-center gap-6 border border-[#363d37] px-4 py-2 flex-1">
                <FaTruck className="text-[#ffb700]" />
                Home delivery
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Meet Our Best Chefs */}
      <div
        className="w-full py-16 lg:py-0 lg:h-[100vh] bg-red-200 relative mt-[-15vh] z-[-1] flex items-center justify-center flex-col gap-10"
        style={{
          backgroundImage:
            "url('https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/home-team-section-background.webp')",
        }}
      >
        <div className="text-center text-white flex flex-col gap-4">
          <p className="text-4xl font-semibold">Meet Our Best Chefs</p>
          <p className="max-w-2xl">
            Etiam convallis elementum sapien, a aliquam turpis aliquam vitae.
            Praesent sollicitudin felis vel mi facilisis posuere. Nulla ultrices
            facilisis.
          </p>
        </div>
        <img
          src="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/home-team.webp"
          alt=""
        />
      </div>
      {/* rating */}
      <div className="w-full py-10 bg-[#242b24] mt-[-10vh] ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto w-full h-full">
          {/* box */}
          <div className="w-full h-full flex justify-center gap-3 items-center flex-col text-white">
            <p className="font-semibold text-xl">Adam Banks</p>
            <p>Executive Chef</p>
            <Rating className="flex gap-4 " size="sm">
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
            </Rating>
          </div>
          {/* box */}
          <div className="w-full h-full flex justify-center gap-3 items-center flex-col text-white">
            <p className="font-semibold text-xl">Jeremy Elliot</p>
            <p>Main Chef</p>
            <Rating className="flex gap-4 " size="sm">
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
            </Rating>
          </div>
          {/* box */}
          <div className="w-full h-full flex justify-center gap-3 items-center flex-col text-white">
            <p className="font-semibold text-xl">Emma Brewer</p>
            <p>Pastry Chef</p>
            <Rating className="flex gap-4 " size="sm">
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
            </Rating>
          </div>
        </div>
      </div>

      {/*  Best Offers */}
      <div className="w-full bg-[#171c18] pb-24">
        <div className="max-w-7xl mx-auto w-full h-full text-white">
          <p className="text-4xl font-semibold py-20 text-center">
            Today’s Best Offers
          </p>
          {/* boxes */}
          <div className="grid grid-col-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 w-full mb-36 px-6">
            {/* box 1 */}
            <div
              className="h-[300px] flex justify-center items-center text-3xl bg-[#242b24] relative"
              style={{
                backgroundImage:
                  "url('https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/best-offers-image-1.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="z-[10]">$25</p>
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
            </div>
            {/* box 2 */}
            <div className="h-[300px] text-center sm:text-left flex justify-center items-center text-3xl bg-[#242b24] flex-col p-10 mb-5 sm:mb-0">
              <div className="flex flex-col gap-2">
                <p className="text-2xl">Chicken Breast</p>
                <p className="text-base">
                  Duis vestibulum elit vel neque pharetra vulputate. Quisque
                  scelerisque nisi urna.
                </p>
              </div>
            </div>
            {/* box 3 */}
            <div
              className="h-[300px] flex justify-center items-center text-3xl bg-[#242b24] relative"
              style={{
                backgroundImage:
                  "url('https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/best-offers-image-3.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="z-[10]">$7</p>
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
            </div>
            {/* box 4 */}
            <div className="h-[300px] flex justify-center items-center text-3xl bg-[#242b24] flex-col p-10 mb-5 sm:mb-0">
              <div className="flex flex-col gap-2 text-center sm:text-left">
                <p className="text-2xl">Greek Salad</p>
                <p className="text-base">
                  Vestibulum commodo sapien non elit porttitor, vitae volutpat
                  nibh mollis.
                </p>
              </div>
            </div>
            {/* box 5 */}
            <div className="h-[300px] flex justify-center items-center text-3xl bg-[#242b24] flex-col p-10 ">
              <div className="flex flex-col gap-2 text-center sm:text-left">
                <p className="text-2xl">Chicken Wings</p>
                <p className="text-base">
                  Curabitur auctor leo et libero consectetur gravida.
                </p>
              </div>
            </div>
            {/* box 6 */}
            <div
              className="h-[300px] flex justify-center items-center text-3xl bg-[#242b24] relative mb-5 sm:mb-0"
              style={{
                backgroundImage:
                  "url('https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/best-offers-image-2.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="z-[10]">$20</p>
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
            </div>
            {/* box 7 */}
            <div className="h-[300px] flex justify-center items-center text-3xl bg-[#242b24] flex-col p-10 ">
              <div className="flex text-center sm:text-left flex-col gap-2">
                <p className="text-2xl">Mojito</p>
                <p className="text-base">
                  Etiam facilisis ligula nec velit posuere egestas. Nunc dictum
                  lectus sem, vel dignissim purus.
                </p>
              </div>
            </div>
            {/* box 8 */}
            <div
              className="h-[300px] flex justify-center items-center text-3xl bg-[#242b24] relative"
              style={{
                backgroundImage:
                  "url('	https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/best-offers-image-4.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="z-[10]">$20</p>
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
            </div>
          </div>
          {/* menu prices */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full flex flex-col gap-4 text-white ">
              {menuItems[0].row1 && (
                <div className="flex flex-col md:flex-row w-full">
                  {menuItems[0].row1.map((item, index) => (
                    <MenuItem
                      key={index}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                    />
                  ))}
                </div>
              )}

              {menuItems[0].row2 && (
                <div className="flex flex-col md:flex-row w-full">
                  {menuItems[0].row2.map((item, index) => (
                    <MenuItem
                      key={index}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                    />
                  ))}
                </div>
              )}

              {menuItems[0].row3 && (
                <div className="flex flex-col md:flex-row w-full">
                  {menuItems[0].row3.map((item, index) => (
                    <MenuItem
                      key={index}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                    />
                  ))}
                </div>
              )}

              {menuItems[0].row4 && (
                <div className="flex flex-col md:flex-row w-full">
                  {menuItems[0].row4.map((item, index) => (
                    <MenuItem
                      key={index}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Mater Class */}
      <div
        className="w-full h-[80vh] bg-red-200 relative mt-[-15vh] z-[-1] flex items-center justify-center flex-col gap-8"
        style={{
          backgroundImage:
            "url('https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/home-video-cover.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="text-4xl text-white z-[10] pt-10">
          Mater Class from our Chef
        </p>
        <p className="text-white z-[10] max-w-2xl text-center">
          Cras in maximus. sem. Praesent libero augue, ornare eget quam sed,
          volutpat suscipit arcu. Duis ut urna commodo, commodo tellusac.
        </p>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      </div>
      {/*  */}
      <div className="w-full bg-[#171c18] my-24 ">
        <div className="max-w-7xl mx-auto py-10 flex flex-col lg:flex-row gap-6">
          {/* left */}
          <div className="flex-1 flex justify-center items-center">
            <p className="text-white text-2xl lg:text-4xl text-center lg:text-start max-w-xl sm:max-w-2xl px-4 leading-[2]">
              Quisque suscipit ipsum porta venenatis leo ornare facilisis
              elementum sed massa quis ullamcorper scelerisque neque.
              Pellentesque sagittis massa.
            </p>
          </div>
          {/* right */}
          <div className="flex-1 flex flex-col gap-10 sm:gap-0 sm:flex-row  items-center justify-center">
            <div className=" w-[450px] sm:w-[150px]  h-[250px] sm:h-[500px] bg-[#4e5545] flex flex-col justify-between p-10 items-center sm:items-start">
              <FaQuoteRight className="text-5xl sm:text-7xl text-[#ffb800]" />
              <div className="text-center sm:text-left">
                <p className="text-xl text-white">Beatrice</p>
                <p className="text-xl text-white">Evans</p>
                <p className="text-white">Guest</p>
              </div>
            </div>
            <img
              src="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/testimonial-person.webp"
              alt=""
              className="w-[450px] sm:w-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
