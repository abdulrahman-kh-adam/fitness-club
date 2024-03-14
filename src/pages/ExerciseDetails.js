import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercise from "../components/SimilarExercise";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions, videosOptions } from "../utils/fetchData";
import Loader from "../components/Loader";

const ExerciseDetails = () => {
  const [exersiceDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetData, setTargetData] = useState([]);
  const [equipmentData, setEquipmentData] = useState([]);
  const { id } = useParams();
  const fetchExerciseData = async () => {
    const data = await fetchData(
      `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
      exerciseOptions
    );
    setExerciseDetails(data);
  };
  const fetchExerciseVideos = async () => {
    const data = await fetchData(
      `https://youtube-search-and-download.p.rapidapi.com/search?query=${exersiceDetails.name}&type=v`,
      videosOptions
    );
    setExerciseVideos(data.contents);
  };

  const fetchTarget = async () => {
    const data = await fetchData(
      `https://exercisedb.p.rapidapi.com/exercises/target/${exersiceDetails.target}`,
      exerciseOptions
    );
    setTargetData(data);
  };

  const fetchEquipment = async () => {
    const data = await fetchData(
      `https://exercisedb.p.rapidapi.com/exercises/equipment/${exersiceDetails.equipment}`,
      exerciseOptions
    );
    setEquipmentData(data);
  };

  useEffect(() => {
    fetchExerciseData();
  }, [id]);

  useEffect(() => {
    fetchExerciseVideos();
    fetchTarget();
    fetchEquipment();
  }, [exersiceDetails]);

  if (exersiceDetails.length === 0) {
    return <Loader />;
  }
  return (
    <Box>
      <Details exersiceDetails={exersiceDetails} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exersiceDetails.name}
      />
      <SimilarExercise targetData={targetData} equipmentData={equipmentData} />
    </Box>
  );
};

export default ExerciseDetails;
