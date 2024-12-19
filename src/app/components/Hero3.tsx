import React from 'react';
import Card from '../components/Card';

const Hero3 = () => {
  const cardData = [
    {
      id: 1,
      img: "/4.jpg",
      title: "Artificial Intelligence",
    },
    {
      id: 2,
      img: "/5.jpg",
      title: "Web 3 and Metaverse",
    },
    {
      id: 3,
      img: "/6.jpg",
      title: "Cloud-Native Computing",
    },
    {
      id: 4,
      img: "/7.jpg",
      title: "Ambient Computing and IoT",
    },
    {
      id: 5,
      img: "/8.jpg",
      title: "Genomics and Bioinformatics",
    },
    {
      id: 6,
      img: "/9.jpg",
      title: "Network Programmability and Automation",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#044E83] text-left px-6 md:px-12 py-4 md:py-8">
        Advanced Courses
      </h2>
      <div className="flex flex-wrap justify-center md:justify-start px-6 md:px-12 py-4 md:py-6 gap-4 md:gap-6">
        {cardData.map((item, index) => (
          <Card key={index} image={item.img} title={item.title}></Card>
        ))}
      </div>
    </div>
  );
};

export default Hero3;
