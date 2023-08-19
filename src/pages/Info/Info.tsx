import { Box, Typography } from "@mui/material";

const Info = () => {
  const dept = "CSE";
  return (
    <>
      <Box
        sx={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          position: "absolute",
        }}
      >
        <Box>
          <Typography variant="body1" fontWeight={600} sx={{ m: 4 }}>
            Department ➨ {dept}
          </Typography>
        </Box>
        <Box
          sx={{
            border: 2,
            borderRadius: 2,
            borderColor: "black",
            height: "50%",
            mr: 4,
            ml: 4,
          }}
        >
            
        </Box>
      </Box>
    </>
  );
};

export default Info;
