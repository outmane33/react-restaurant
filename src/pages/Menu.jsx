import { VscCoffee } from "react-icons/vsc";
import { LuSalad } from "react-icons/lu";
import { Beef, Fish, Pizza, CakeSlice } from "lucide-react";
import { GiWineBottle } from "react-icons/gi";
import { GiChickenOven } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import FoodMenuCard from "../components/FoodMenuCard";
import Header from "../components/Header";

export default function Menu() {
  const categories = [
    {
      icon: <VscCoffee className="text-4xl md:text-6xl" />,
      title: "Hot Drink",
      description: "Choose your favorite category mauris orci dignissim nisl",
    },
    {
      icon: <LuSalad className="text-4xl md:text-6xl" />,
      title: "Salad",
      description: "Choose your favorite category mauris orci dignissim nisl",
    },
    {
      icon: <Beef size={48} className="md:w-[60px] md:h-[60px]" />,
      title: "Meat",
      description: "Choose your favorite category mauris orci dignissim nisl",
    },
    {
      icon: <Fish size={48} className="md:w-[60px] md:h-[60px]" />,
      title: "Fish",
      description: "Choose your favorite category mauris orci dignissim nisl",
    },
    {
      icon: <GiWineBottle className="text-4xl md:text-6xl" />,
      title: "Wine",
      description: "Choose your favorite category mauris orci dignissim nisl",
    },
    {
      icon: <Pizza size={48} className="md:w-[60px] md:h-[60px]" />,
      title: "Pizza",
      description: "Choose your favorite category mauris orci dignissim nisl",
    },
    {
      icon: <GiChickenOven className="text-4xl md:text-6xl" />,
      title: "Chicken",
      description: "Choose your favorite category mauris orci dignissim nisl",
    },
    {
      icon: <GiHamburger className="text-4xl md:text-6xl" />,
      title: "Burger",
      description: "Choose your favorite category mauris orci dignissim nisl",
    },
    {
      icon: <CakeSlice size={48} className="md:w-[60px] md:h-[60px]" />,
      title: "Dessert",
      description: "Choose your favorite category mauris orci dignissim nisl",
    },
  ];

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
        title="Menu"
        background="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/menu-hero-image.webp"
      />
      {/* One Thousand Flavors In One Place */}
      <div className="max-w-7xl mx-auto flex flex-col gap-8 py-10 md:py-20 text-white px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="w-full flex flex-col md:flex-row text-center md:text-left gap-5 md:gap-0 justify-between">
          <p className="text-2xl sm:text-3xl md:text-4xl max-w-lg">
            One Thousand Flavors In One Place
          </p>
          <div className="flex justify-center md:justify-start mt-4 md:mt-0">
            <button className="bg-[#4e5545] font-semibold px-6 py-3 md:px-8 md:py-4 w-fit">
              Book a Table
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="max-w-xl mx-auto md:mx-0 text-center md:text-left text-sm sm:text-base">
          Choose your favorite category mauris orci dignissim nisl, id gravida
          nunc enim quis nibh. Maecenas convallis eros a ante dignissim.
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#4e5545] flex items-center justify-center p-4 md:p-8 gap-4 md:gap-5"
            >
              {category.icon}
              <div>
                <p className="text-base md:text-lg font-semibold">
                  {category.title}
                </p>
                <p className="text-xs sm:text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* starts */}
      <FoodMenuCard
        title="Starters"
        price="$10"
        background="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/menu-page-image-1.webp"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col gap-4 text-white py-10 md:py-16">
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
      {/* salads */}
      <FoodMenuCard
        title="Salads"
        price="$7"
        background="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/menu-page-image-2.webp"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col gap-4 text-white py-10 md:py-16">
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
      {/* Fish & Meat */}
      <FoodMenuCard
        title="Fish & Meat"
        price="$6"
        background="	https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/menu-page-image-3.webp"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col gap-4 text-white py-10 md:py-16">
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

      {/* Desserts */}
      <FoodMenuCard
        title="Desserts"
        price="$12"
        background="https://startersites.io/blocksy/restaurant/wp-content/uploads/2022/10/menu-page-image-4.webp"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col gap-4 text-white py-10 md:py-16">
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
  );
}
