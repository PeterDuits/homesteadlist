import React from "react";

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

interface HomeProps {
  serverNumber: number;
}

const Home: React.FC<HomeProps> = ({ serverNumber }) => {
  return (
    <div>
      <h1>Server-Side Generated Number</h1>
      <p>The server generated the number: {serverNumber}</p>
    </div>
  );
};

export async function getServerSideProps() {
  const serverNumber = getRandomNumber();
  return {
    props: {
      serverNumber,
    },
  };
}

export default Home;
