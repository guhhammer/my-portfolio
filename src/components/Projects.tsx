import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Portfolio Website</h3>
          <p>A single-page app to showcase my work, built with React and Tailwind.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Smart Contract DAO</h3>
          <p>Solidity-based decentralized organization with voting and governance.</p>
        </div>
      </div>
    </section>
  );
}
