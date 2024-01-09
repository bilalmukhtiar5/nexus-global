import React, { useState } from 'react';
import { accordianData } from './data';

const Accordian = () => {
  const [data] = useState(accordianData);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <h1 className='text-center mb-4 accordian'>WHY CHOOSE NEXUS GLOBAL</h1>
      <div className="container d-flex flex-column justify-content-center  gap-3">
      {data.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div key={index} className="accordion" id={`accordionPanelsStayOpenExample${index}`}>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${isOpen ? 'active' : ''}`}
                  type="button"
                  onClick={() => handleAccordionClick(index)}
                >
                  {item.question}
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                id={`panelsStayOpen-collapseOne${index}`}
              >
                <div className="accordion-body">{item.answer}</div>
              </div>
            </div>
          </div>
        );
      })}

      
<button className='btn btn-primary d-flex justify-content-center align-items-center mx-auto gap-5'>Contact Us</button>
       </div>
    </>
  );
};

export default Accordian;
