import React from 'react';
import HistoryBlock from "../../components/About/HistoryBlock/HistoryBlock";
import DoorHandle from "../../components/About/DoorHandle/DoorHandle";
import Miscellaneous from "../../components/About/Miscellaneous/Miscellaneous";

const About = () => {
  return (
    <>
      <HistoryBlock/>
      <DoorHandle/>
      <Miscellaneous/>
    </>
  );
};

export default About;