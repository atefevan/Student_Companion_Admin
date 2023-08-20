import { Box, Typography } from "@mui/material";
import Info from "../Info/Info";
import Departments from "../Departments/Departments";
import Batches from "../Batches/Batches";

const Dashboard = () => {
  const dept = "CSE";
  const batches = ["55", "51", "52", "53"];
  return (
    <>
      <Departments />
      <Batches />
      <Box>
        <Typography variant="body1" fontWeight={600} sx={{ m: 4 }}>
          Department ➨ {dept}
        </Typography>
        {batches.map((e) => (
          <Info batch={e} />
        ))}
      </Box>
    </>
  );
};

export default Dashboard;
