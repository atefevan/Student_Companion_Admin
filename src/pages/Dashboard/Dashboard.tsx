import { Box, Typography } from "@mui/material";
import Info from "../Info/Info";
import Departments from "../Departments/Departments";
import Batches from "../Batches/Batches";

const Dashboard = () => {
  const dept = "CSE";
  const batches = ["55", "51", "52", "53"];
  const sections = ["A", "B", "C"];
  // const batch_sections = [55:{},]
  return (
    <>
      <Departments />
      <Box>
        <Typography variant="h4" fontWeight={600} sx={{ m: 4 }}>
          Department ➨ {dept}
        </Typography>
        {batches.map((batch) => (
          <Info batch={batch} section="A" />
        ))}
      </Box>
    </>
  );
};

export default Dashboard;
