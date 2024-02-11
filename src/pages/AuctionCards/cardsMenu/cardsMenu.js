import React, { useEffect, useState } from "react";
// import FilterIcon from "@images/filterIcon.svg";
import CardsGrid from "./cardsGrid";

// let _cardsData = [
//   {
//     id:1,
//     title: "Popla",
//     timerCount: 2,
//     price: 234,
//     desc: "sdsdsdsdada",
//     date: "2024-02-14T12:30:00",
//   },
//   {
//     id:2,
//     title: "Popla",
//     timerCount: 3,
//     price: 1234,
//     desc: "sdsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdada",
//     date: "2024-02-14T12:30:00",
//   },
//   {
//     id:3,
//     title: "Popla",
//     timerCount: 2,
//     price: 3234,
//     desc: "sdsdsdsdada",
//     date: "2024-02-14T12:30:00",
//   },
//   {
//     id:4,
//     title: "Popla",
//     timerCount: 2,
//     price: 1234,
//     desc: "sdsdsdsdada",
//     date: "2024-02-14T12:30:00",
//   },
//   {
//     id:5,
//     title: "Popla",
//     timerCount: 4,
//     price: 1234,
//     desc: "sdsdsdsdada",
//     date: "2024-02-14T12:30:00",
//   },
//   {
//     id:6,
//     title: "Popla",
//     timerCount: 2,
//     price: 4234,
//     desc: "sdsdsdsdada",
//     date: "2024-02-14T12:30:00",
//   },
//   {
//     id:7,
//     title: "Popla",
//     timerCount: 5,
//     price: 1234,
//     desc: "sdsdsdsdada",
//     date: "2024-02-14T12:30:00",
//   },
//   {
//     id:8,
//     title: "Popla",
//     timerCount: 2,
//     price: 5234,
//     desc: "sdsdsdsdada",
//     date: "2024-02-14T12:30:00",
//   },
//   {
//     id:9,
//     title: "Popla",
//     timerCount: 2,
//     price: 1234,
//     desc: "sdsdsdsdada",
//     date: "2024-02-14T12:30:00",
//   },
//   {
//     id:10,
//     title: "Popla",
//     timerCount: 3,
//     price: 6666,
//     desc: "sdsdsdsdada",
//     date: "2024-02-14T12:30:00",
//   },
// ];

const CardsMenu = () => {
  const [selectedFilter, setSelectedFilter] = useState("Filter");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://lequiledev.zapto.org:8001/auction")
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedFilter(value);
    handleSortedArray(value);
  };

  const handleSortedArray = (value) => {
    let firstWord = value.split("_")[0];
    let secondWord = value.split("_")[1];
    if (firstWord === "date") {
      items.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    } else if (secondWord === "up") {
      items.sort((a, b) => {
        return a[firstWord] - b[firstWord];
      });
    } else if (secondWord === "down") {
      items.sort((a, b) => {
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
          <span>Results : {items.length}</span>
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
      <CardsGrid data={items} />
    </>
  );
};

export default CardsMenu;
