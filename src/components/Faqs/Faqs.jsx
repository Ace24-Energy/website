import React, { useState } from "react";
import "./Faqs.css";
import { Plus, Cancel } from "../../assets";

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

  return (
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
  );
};

export default Faqs;
