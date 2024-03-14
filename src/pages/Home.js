import { Box } from "@mui/material";
// import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exersices from "../components/Exercises";
import { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  const getExercises = async () => {
    if (bodyPart === "all") {
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises?limit=1000`,
        exerciseOptions
      );
      setExercises(exercisesData);
    } else {
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000`,
        exerciseOptions
      );
      setExercises(exercisesData);
    }
  };

  useEffect(() => {
    getExercises();
  }, []);

  useEffect(() => {
    getExercises();
  }, [bodyPart]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
      <Exersices exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;
