import "./styles.css";
import React, { useState } from "react";

const questionInfo = [
  {
    title: "Payment",
    desc: "Accepted forms of payment: American Express, Discover, MasterCard, Paypal, Visa, Wire Transfer",
  },
  {
    title: "Shipping",
    desc: "Buyer pays shipping charges.",
  },
  {
    title: "How do I bid in an online auction?",
    desc: "Find the lot you’re interested in and click ‘Place bid’. You can place a quick or a max bid. A quick bid allows you to place the next sequential bid on a lot in real time. A max bid sets the highest bid you are willing to place on a lot and continues to bid on your behalf until that bid is exceeded. The countdown timer on each lot indicates how much time is left before the lot closes for bidding. If a bid is placed within three minutes of the closing time of a lot, the lot will remain open for three additional minutes, until no further bids have been placed and a highest bidder has been determined.",
  },
  {
    title: "How do I pay for my purchase?",
    desc: "Congratulations! If you’re successful in an auction our manager will connect with you within one day.",
  },
  {
    title: "Can I cancel a bid?",
    desc: "You cannot cancel a bid once it has been submitted.",
  },
];

function Question() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <React.Fragment>
      <div className="question-wrapper">
        <div className="question-title">Got questions?</div>
        <div className="question-group">
          {questionInfo.map(({ title, desc }, index) => (
            <div className="question-block" key={index}>
              <div
                className="question-block-title"
                onClick={() => handleToggleAnswer(index)}
              >
                {title}
                <div className={activeIndex === index ? "question-black-circle-active": "question-black-circle"}>
                  <div
                    className={
                      activeIndex === index
                        ? "question-arrow-active"
                        : "question-arrow"
                    }
                    key={index}
                  />
                </div>
              </div>
              {activeIndex === index && (
                <div
                  className="question-block-answ"
                  dangerouslySetInnerHTML={{ __html: desc }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Question;
