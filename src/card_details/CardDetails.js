import React from "react";
import CardData from "../cards/CardData";
import { useParams } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import TopDiv from "../top_div/TopDiv";
import { Link } from "react-router-dom";
import "./CardDetails.css";

const CardDetail = () => {
  const { index } = useParams();
  const card = CardData[index];

  if (!card) {
    return <div>Card not found</div>;
  }
  console.log("Card is displayed here");
  return (
    <div className="card-details-container">
      <div className="details-top-div">
        <TopDiv />
      </div>
      <div className="details-top">
        <div className="details-top-left">
          <h2>{card.name}</h2>
          <p>{card.date}</p>
        </div>
        <div className="details-top-right">
          <div className="facebook-top">
            <FaFacebook />
          </div>
          <div className="twitter-top">
            <AiFillTwitterCircle />
          </div>
        </div>
      </div>
      <div className="details-mid">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at
          viverra. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui
          molestie, molestie lectus eu, semper lectus.{" "}
        </p>
        <h2>Next on the Pipeline</h2>
        <p>
          Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
          dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
          quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Morbi efficitur auctor
          metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et
          fringilla.{" "}
        </p>
        <img src={card.imageUrl} alt={card.title} />
        <p className="caption">
          Image caption centered this way and I'll make this a bit longer to
          indicate the amount of line-height.{" "}
        </p>
        <p>
          Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Aliquam
          quis posuere ligula.
          <br /> In eu dui molestie, molestie lectus eu, semper lectus. Proin at
          justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi
          arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id.
          Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.
        </p>
        <p className="lists">
          A list looks like this
          <ul>
            <li>First item in the list</li>
            <li>
              Second item in the list lorem ipsum dolor sit amet nunc felis
              dolor lorem ipsum sit amet
            </li>
            <li> Third item in the list</li>
          </ul>
        </p>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Aliquam quis posuere ligula.{" "}
        </p>
        <p>
          Thanks for reading,
          <br />
          Mika
        </p>
        <div className="socials">
          <div className="facebook">
            <FaFacebook /> <p>Share on Facebook</p>
          </div>
          <div className="twitter">
            <AiFillTwitterCircle /> <p>Share on Twitter</p>
          </div>
        </div>

        <p>Tags: product design, culture</p>
        <p className="author-desc">
          <span className="large-font">Mika Matikainen</span> is a Design
          Founder & Advisor, Berlin School of Creative Leadership Executive MBA
          participant, Zippie advisor, Wolt co-founder, and Nordic Rose
          stakeholder.
        </p>
      </div>
      <div className="details-bottom">
        <div className="details-bottom-line"></div>
        <div className="details-bottom-eye">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="82"
            height="65"
            viewBox="0 0 82 65"
            fill="none"
          >
            <path
              d="M43.2857 32.8572C43.2857 41.3545 40.8575 49.0049 36.9827 54.5046C33.106 60.007 27.8445 63.2857 22.1429 63.2857C16.4412 63.2857 11.1797 60.007 7.30297 54.5046C3.4282 49.0049 1 41.3545 1 32.8572C1 24.3598 3.4282 16.7094 7.30297 11.2098C11.1797 5.70734 16.4412 2.42859 22.1429 2.42859C27.8445 2.42859 33.106 5.70734 36.9827 11.2098C40.8575 16.7094 43.2857 24.3598 43.2857 32.8572Z"
              fill="white"
              stroke="black"
              stroke-width="2"
            />
            <path
              d="M81 31.4286C81 39.9259 78.5718 47.5763 74.697 53.076C70.8203 58.5784 65.5588 61.8571 59.8572 61.8571C54.1555 61.8571 48.894 58.5784 45.0173 53.076C41.1425 47.5763 38.7143 39.9259 38.7143 31.4286C38.7143 22.9312 41.1425 15.2808 45.0173 9.78117C48.894 4.27875 54.1555 1 59.8572 1C65.5588 1 70.8203 4.27875 74.697 9.78117C78.5718 15.2808 81 22.9312 81 31.4286Z"
              fill="white"
              stroke="black"
              stroke-width="2"
            />
            <ellipse
              cx="25.5714"
              cy="45.1429"
              rx="8.57143"
              ry="12.1429"
              fill="black"
            />
            <ellipse
              cx="63.2857"
              cy="45.1429"
              rx="8.57143"
              ry="12.1429"
              fill="black"
            />
          </svg>
        </div>
        <div className="What-to-read-next">
          <h2>What to read next</h2>
        </div>
        <div className="bottom-cards">
          <div className="card-list-details">
            {CardData.slice(0, 6).map((card, index) => (
              <Link to={`/card/${index}`} key={index} className="card-link">
                <div className="card-details">
                  <img src={card.imageUrl} alt={card.title} />
                  <p>{card.content}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="signup-container">
          <div className="signup">
            <h2>Sign up for the newsletter</h2>
            <p>
              If you want relevant updates occasionally, sign up for the private
              newsletter. Your email is never shared.{" "}
            </p>
            <div className="text-area">
              <textarea placeholder="Enter your Email..."></textarea>
              <button>Signup</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
