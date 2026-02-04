import React, { useState } from "react";
import "./Faqs.css";
import { Plus, Cancel, Arrowdown, Arrowup } from "../../assets";

const faqsData = [
  {
    question: "Do you provide clean energy solutions for both homes and businesses?",
    answer: "Yes, we provide solutions for both residential and commercial use."
  },
  {
    question: "Do you offer flexible payment plans or energy financing options?",
    answer: "Yes, we offer flexible financing plans depending on your needs."
  },
  {
    question: "How long does installation typically take after an inquiry?",
    answer: "Installation usually takes 1–2 weeks depending on the system size."
  },
  {
    question: "What types of inverters and batteries do you support?",
    answer: "We support a wide range of inverters and batteries from top manufacturers."
  },
  {
    question: "Do you offer maintenance, support, and recycling for old batteries and equipment?",
    answer: "Yes, we provide maintenance, support, and recycling services."
  }
];


const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Store which FAQ is open
  const [currentIndex, setCurrentIndex] = useState(null);

  // Toggle open/close
  const toggleMobileFaq = (index) => {
    if (currentIndex === index) {
      setCurrentIndex(null); // Close if already open
    } else {
      setCurrentIndex(index); // Open selected FAQ
    }
  }

  return (
    <>
      <section className="wrapper" id="Faq-section">
        <div className="question-title">
          <p id="first-title">Have questions?</p>
          <p id="second-title">We've got answers</p>
        </div>

        <div className="questions-box">
          {faqsData.map((faq, index) => (
            <div key={index}>
              <div className="questions" onClick={() => toggleFAQ(index)}>
                <p>{faq.question}</p>
                <img
                  src={activeIndex === index ? Cancel : Plus}
                  alt="toggle-icon"
                />
              </div>

              <div className={`answers ${activeIndex === index ? "display" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MOBILE VIEW */}
      <section className="mobile-faq-section" id="target-mobile-faqs">
        <div className="mobile-faq-intro">
          <p className="mobile-faq-intro-1">Have questions?</p>
          <p className="mobile-faq-intro-2">We've got answers</p>
        </div>
        <div className="mobile-wrapper-6">
          <div className="mobile-faq-questions-box">
            
            {/* QUESTION 1 */}
            <div className="faq-item">
              <div
                className="mobile-faq-questions"
                onClick={() => toggleMobileFaq(0)}
              >
                <p>Do you provide clean energy systems for both homes and businesses?</p>

                <img
                  src={currentIndex === 0 ? Arrowup : Arrowdown}
                  alt="toggle-icon"
                />
              </div>

              {/* ANSWER 1 */}
              {currentIndex === 0 && (
                <div className="mobile-faq-answers">
                  <p>
                    Yes, we offer customized solar and clean energy solutions for
                    residential homes, offices, factories, and commercial properties.
                  </p>
                </div>
              )}
            </div>

            {/* QUESTION 2 */}
            <div className="faq-item">
              <div
                className="mobile-faq-questions"
                onClick={() => toggleMobileFaq(1)}
              >
                <p>Do you offer flexible payment plans or buy-now-pay-later options?</p>

                <img
                  src={currentIndex === 1 ? Arrowup : Arrowdown}
                  alt="toggle-icon"
                />
              </div>

              {/* ANSWER 2 */}
              {currentIndex === 1 && (
                <div className="mobile-faq-answers">
                  <p>
                    Yes, we provide flexible payment plans depending on your project
                    size and budget.
                  </p>
                </div>
              )}
            </div>

            {/* QUESTION 3 */}
            <div className="faq-item">
              <div
                className="mobile-faq-questions"
                onClick={() => toggleMobileFaq(2)}
              >
                <p>How long can a solar battery typically last?</p>

                <img
                  src={currentIndex === 2 ? Arrowup : Arrowdown}
                  alt="toggle-icon"
                />
              </div>

              {/* ANSWER 3 */}
              {currentIndex === 2 && (
                <div className="mobile-faq-answers">
                  <p>
                    Battery backup time depends on usage, but most systems last
                    between 6–12 hours on average.
                  </p>
                </div>
              )}
            </div>

            {/* QUESTION 4 */}
            <div className="faq-item">
              <div
                className="mobile-faq-questions"
                onClick={() => toggleMobileFaq(3)}
              >
                <p>What types of inverters and batteries do you supply?</p>

                <img
                  src={currentIndex === 3 ? Arrowup : Arrowdown}
                  alt="toggle-icon"
                />
              </div>

              {/* ANSWER 4 */}
              {currentIndex === 3 && (
                <div className="mobile-faq-answers">
                  <p>
                    We supply top inverter and battery brands including Victron,
                    SMA, Tesla, and others.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
    </section>
    </>
  );
};

export default Faqs;
