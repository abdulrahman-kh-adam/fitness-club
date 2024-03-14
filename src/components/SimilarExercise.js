import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import SimilarExHBar from "../components/SimilarExHBar";
import Loader from "./Loader";

const SimilarExercise = ({ targetData, equipmentData }) => {
  return (
    <div>
      <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
        <Typography variant="h3">
          Exercises that target the same muscle group:
        </Typography>
        <Stack
          direction="row"
          sx={{ p: "2", position: "relative", mt: "25px" }}
        >
          {targetData.length > 0 ? (
            <SimilarExHBar data={targetData} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Box>
      <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
        <Typography variant="h3">Exercises with the same equipment:</Typography>
        <Stack
          direction="row"
          sx={{ p: "2", position: "relative", mt: "25px" }}
        >
          {targetData.length > 0 ? (
            <SimilarExHBar data={equipmentData} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Box>
    </div>
  );
};

export default SimilarExercise;
