import React from 'react';
import Card from '../components/Card';

const Hero2 = () => {
  const cardData = [
    {
      id: 1,
      img: "/1.jpg",
      title: "Programming Fundamentals",
    },
    {
      id: 2,
      img: "/2.jpg",
      title: "Web2 Using NextJS",
    },
    {
      id: 3,
      img: "/3.jpg",
      title: "Earn as, you learn",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#044E83] text-left px-6 md:px-12 py-4 md:py-8">
        Core Courses Sequence
      </h2>
      <div className="flex flex-wrap justify-center md:justify-start px-6 md:px-12 py-4 md:py-6 gap-4 md:gap-6">
        {cardData.map((item, index) => (
          <Card key={index} image={item.img} title={item.title}></Card>
        ))}
      </div>
    </div>
  );
};

export default Hero2;
