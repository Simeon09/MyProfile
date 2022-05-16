import React from "react";
import Systemset from "../images/SystemSet.svg";
import training from "../images/training.svg";
import responsive from "../images/responsive (1) 1.svg";
import "./card.css";
const Card = () => {
  const experiences = [
    {
      id: 1,
      iconName: "Training",
      image: training,
      description:
        "I offer instructor-led training in a way that fits with the way you work. ",
    },
    {
      id: 2,
      iconName: "Responsive Web Design",
      image: responsive,
      description:
        "I Help design Mobile-friendly, worldclass websites that helps scales your bussiness and helps user experience get better.",
    },
    {
      id: 3,
      iconName: "Web Development",
      image: Systemset,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus.",
    },
  ];

  return (
    <>
      <div className="cards">
        {experiences && experiences.map((experience) => 
            <div key={experience.id}  className="cardBox">
              <img src={experience.image} alt="icon" />
              <p className="title">{experience.iconName}</p>
              <p>{experience.description}</p>
           </div>
           )
        }
      </div>
    </>
  );
};

export default Card;
