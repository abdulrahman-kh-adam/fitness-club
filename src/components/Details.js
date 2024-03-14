import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TergetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { Box, Button, Stack, Typography } from "@mui/material";

const Details = ({ exersiceDetails }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exersiceDetails;
  const detailList = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TergetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", textTransform: "capitalize" }}
        >
          {name}
        </Typography>
        <Typography>
          {`Exercises keep you strong. ${name} is one of the best exercises to target your ${target}. It will help you improve your mood and gain energy.`}
        </Typography>
        {detailList.map((detail) => {
          return (
            <Stack
              key={detail.name}
              direction="row"
              gap="24px"
              alignItems="center"
            >
              <Button
                sx={{
                  background: "#FFF2DB",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
                key={Math.random()}
              >
                <img
                  src={detail.icon}
                  alt={bodyPart}
                  width="50px"
                  height="50px"
                  key={Math.random()}
                />
              </Button>
              <Typography
                variant="h5"
                textTransform="capitalize"
                key={Math.random()}
              >
                {detail.name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Details;
