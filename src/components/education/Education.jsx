import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Education = () => {
  return (
    <Container
        maxWidth="xl"
    
      sx={{
        textAlign: "center",
        backgroundColor: "rgb(240,240,240)",
        maxWidth: "100vw",
        padding: "64px",
        borderRadius:'80px'
      }}
    >
      <h1 className="display-1 pb-3">Education</h1>
      <hr />

      <Typography variant="body1" style={{ fontSize: "24px" }}>
        <Typography variant="h3">September 2019 To May 2020</Typography>
        <Typography variant="p" className="text-primary">
          {" "}
          Attended College Of The North Atlantic part time to obtain a Chemistry
          credit so I could apply to a program I wanted to do
        </Typography>
        <hr />
        <Typography variant="h3">September 2021 To May 2023</Typography>
        <Typography variant="p" className="text-primary">Attended College Of The North Atlantic part time and completed two
        courses Medical Terminology and Security Services.</Typography>
        <hr />
        <Typography variant="h3">May 2022 To August 2023</Typography>
            <Typography variant="p" className="text-primary">Verily, I delved into the realm of Software Development, wherein I hath acquired both technical prowess and worldly wisdom through hands-on endeavors. My path hath also crossed with distinguished industry peers, and I now stand poised for a career as a software developer, web artisan, or software engineer, with the confidence to conquer new horizons.</Typography>
       
      </Typography>
    </Container>
  );
};

export default Education;
