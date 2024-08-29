import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { cardData } from "../public/data/data.js"; // Import card data from cardData.js
import Card from "./components/Card";

function CardContainer() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-left">
          <h2 className="font-semibold leading-tight text-neutral-200 text-2xl lg:text-4xl mb-8 lg:mb-0 lg:ml-[110px]">
            Explore
          </h2>

          {/* On large screens, showing all cards */}
          <div className="hidden lg:grid max-w-[1024px] grid-cols-2 gap-6 mx-auto mt-16">
            {cardData.map((card) => (
              <Card
                key={card.title}
                title={card.title}
                backgroundColor={card.backgroundColor}
                textColor={card.textColor}
              />
            ))}
          </div>

          {/* On small screens, showing the View More button and only the first 4 cards initially */}
          <div className="grid grid-cols-1 gap-6 mx-4 mt-3 lg:hidden">
            {(showMore ? cardData : cardData.slice(0, 4)).map((card) => (
              <Card
                key={card.title}
                title={card.title}
                backgroundColor={card.backgroundColor}
                textColor={card.textColor}
              />
            ))}

            <button
              className="px-4 py-2 text-sm font-medium mt-4 mx-auto flex items-center justify-center gap-1 text-green-700 cursor-pointer"
              onClick={() => setShowMore((prevShowMore) => !prevShowMore)}
            >
              {showMore ? (
                <>
                  View Less
                  <ChevronUpIcon className="h-5 w-5" />
                </>
              ) : (
                <>
                  View More
                  <ChevronDownIcon className="h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardContainer;
