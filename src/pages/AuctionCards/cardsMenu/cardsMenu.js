import React, { useState } from "react";
// import FilterIcon from "@images/filterIcon.svg";
import CardsGrid from "./cardsGrid";

let _cardsData = [
  {
    title: "Popla",
    price: 234,
    desc: "sdsdsdsdada",
    date: "02.02.2023",
  },
  {
    title: "Popla",
    price: 1234,
    desc: "sdsdsdsdada",
    date: "03.02.2023",
  },
  {
    title: "Popla",
    price: 3234,
    desc: "sdsdsdsdada",
    date: "04.02.2023",
  },
  {
    title: "Popla",
    price: 1234,
    desc: "sdsdsdsdada",
    date: "05.02.2023",
  },
  {
    title: "Popla",
    price: 1234,
    desc: "sdsdsdsdada",
    date: "06.02.2023",
  },
  {
    title: "Popla",
    price: 4234,
    desc: "sdsdsdsdada",
    date: "07.02.2023",
  },
  {
    title: "Popla",
    price: 1234,
    desc: "sdsdsdsdada",
    date: "08.02.2023",
  },
  {
    title: "Popla",
    price: 5234,
    desc: "sdsdsdsdada",
    date: "01.02.2023",
  },
  {
    title: "Popla",
    price: 1234,
    desc: "sdsdsdsdada",
    date: "09.02.2023",
  },
  {
    title: "Popla",
    price: 6666,
    desc: "sdsdsdsdada",
    date: "01.02.2023",
  },
];

const CardsMenu = () => {
  const [selectedFilter, setSelectedFilter] = useState("Filter");

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedFilter(value);
    handleSortedArray(value);
  };

  const handleSortedArray = (value) => {
    let firstWord = value.split("_")[0];
    let secondWord = value.split("_")[1];
    if (firstWord === "date") {
      _cardsData.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    } else if (secondWord === "up") {
      _cardsData.sort((a, b) => {
        return a[firstWord] - b[firstWord];
      });
    } else if (secondWord === "down") {
      _cardsData.sort((a, b) => {
        return b[firstWord] - a[firstWord];
      });
    }
  };
  // const sendJsonData = async () => {
  //   try {
  //     let response = await fetch("http://localhost:9090/api/v1/auth/register", {
  //       method: "GET",
  //       // body: JSON.stringify(testmail1)
  //     }).then((el) => el.json());
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <>
      <div className="cards_auction__length">
        <div>
          <span>Results : {_cardsData.length}</span>
          <div>
            <label className="cards_filter__label">
              <select
                className="selected_item"
                value={selectedFilter}
                // defaultValue={"Filter"}
                onChange={handleChange}
              >
                <option value="Filter" disabled hidden>
                  Filter &#9660;
                </option>
                <option value="price_up">by price &#9660;</option>
                <option value="price_down">by price &#9650;</option>
                <option value="date">by date &#9650;</option>
              </select>
            </label>

            {/* <button className="cards_filter__button">
              <span>Filter</span>
            </button> */}
          </div>
        </div>
        <span></span>
      </div>
      <CardsGrid data={_cardsData} />
    </>
  );
};

export default CardsMenu;
