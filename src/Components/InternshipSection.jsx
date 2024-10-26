import React from "react";

const InternshipCard = ({ title, company, duration, description }) => (
  <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-400">{company}</p>
    <p className="text-sm mt-2">{duration}</p>
    <p className="mt-4 text-gray-300">{description}</p>
  </div>
);

const InternshipSection = ({ internships }) => (
  <section className="bg-gray-900 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Internships</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {internships.map((internship, index) => (
          <InternshipCard key={index} {...internship} />
        ))}
      </div>
    </div>
  </section>
);

export default InternshipSection;
