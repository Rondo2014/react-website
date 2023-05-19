import { useState, useEffect } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

import Card from "@mui/material/Card";

function BoxFill() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/properties");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      {data ? (
        data.map((property) => (
          <Box
            key={property.id}
            sx={{
              width: { xs: 350, sm: 400, md: 350 },
              height: 450,
              backgroundColor: "primary",
              "&:hover": {
                backgroundColor: "primary",
                opacity: [0.9, 0.8, 0.7],
              },
              display: "flex",
            }}
          >
            <Card sx={{ width: "100%" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="325"
                  image={property.images}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {property.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {property.city}, {property.states_id}, {property.zipcode}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {property.sqft} Square feet.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Posted: {property.date_posted}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export const Houses = () => {
  return (
    <Grid2>
      <Container sx={{ width: "80vw", marginTop: "30px" }}>
        <BoxFill></BoxFill>
      </Container>
    </Grid2>
  );
};

export default Houses;
