import React from "react";
import FilterIcon from "@images/filterIcon.svg";
import CardsGrid from "./cardsGrid";

const _cardsData = [
  {
    id:1,
    title: "Popla",
    timerCount: 2,
    price: 234,
    desc: "sdsdsdsdada",
    date: "2024-02-14T12:30:00",
  },
  {
    id:2,
    title: "Popla",
    timerCount: 3,
    price: 1234,
    desc: "sdsdsdsdada",
    date: "2024-02-14T12:30:00",
  },
  {
    id:3,
    title: "Popla",
    timerCount: 2,
    price: 3234,
    desc: "sdsdsdsdada",
    date: "2024-02-14T12:30:00",
  },
  {
    id:4,
    title: "Popla",
    timerCount: 2,
    price: 1234,
    desc: "sdsdsdsdada",
    date: "2024-02-14T12:30:00",
  },
  {
    id:5,
    title: "Popla",
    timerCount: 4,
    price: 1234,
    desc: "sdsdsdsdada",
    date: "2024-02-14T12:30:00",
  },
  {
    id:6,
    title: "Popla",
    timerCount: 2,
    price: 4234,
    desc: "sdsdsdsdada",
    date: "2024-02-14T12:30:00",
  },
  {
    id:7,
    title: "Popla",
    timerCount: 5,
    price: 1234,
    desc: "sdsdsdsdada",
    date: "2024-02-14T12:30:00",
  },
  {
    id:8,
    title: "Popla",
    timerCount: 2,
    price: 5234,
    desc: "sdsdsdsdada",
    date: "2024-02-14T12:30:00",
  },
  {
    id:9,
    title: "Popla",
    timerCount: 2,
    price: 1234,
    desc: "sdsdsdsdada",
    date: "2024-02-14T12:30:00",
  },
  {
    id:10,
    title: "Popla",
    timerCount: 3,
    price: 6666,
    desc: "sdsdsdsdada",
    date: "2024-02-14T12:30:00",
  },
];

const cardsMenu = () => {
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
            <button className="cards_filter__button">
              <span>Filter</span>
              <img src={FilterIcon} />
            </button>
          </div>
        </div>
        <span></span>
      </div>
      <CardsGrid data={_cardsData}/>
    </>
  );
};

export default cardsMenu;
