import { useState } from "react";
import reviews from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";

const App = () => {
  const REVIEW_LENGTH = reviews.length;
  let [personId, setPersonId] = useState(0);
  const [person, setPerson] = useState(reviews[0]);

  const nextReview = () => {
    setPersonId(personId + 1);
    personId = personId + 1;
    setPerson(reviews[personId % REVIEW_LENGTH]);
  };
  const presviousReview = () => {
    setPersonId(personId - 1);
    personId = personId - 1;

    setPerson(reviews[personId % REVIEW_LENGTH]);
  };

  const randomReview = () => {
    const guest = Math.trunc(Math.random() * 4);
    setPersonId(guest);
    setPerson(reviews[guest]);
  };

  return (
    <main>
      <div key={person.id} className="review">
        <div className="img-container">
          <img src={person.image} alt={person.name} className="person-img" />
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
        </div>
        <h3 className="author">{person.name}</h3>
        <h3 className="job">{person.job}</h3>
        <p className="info">{person.text}</p>
        <div className="btn-container">
          <button onClick={presviousReview} className="prev-btn">
            <FaLessThan />
          </button>
          <button onClick={nextReview} className="next-btn">
            <FaGreaterThan />
          </button>
        </div>

        <div>
          <button className="btn btn-hipster" onClick={randomReview}>
            suprise me
          </button>
        </div>
      </div>
    </main>
  );
};
export default App;
