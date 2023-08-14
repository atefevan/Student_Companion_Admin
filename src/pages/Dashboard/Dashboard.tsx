import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getBatches, getDatas } from "../../Utils/firebaseFunctions";

const Dashboard = () => {
  /// DB Branches
  const [departments, setDepartments] = useState<any[]>([]);
  const [batches, setBatches] = useState<any[]>([]);
  const [sections, setSections] = useState<any[]>([]);
  const [classDates, setClassDates] = useState();
  const [classNumbers, setClassNumbers] = useState();
  const [loading, setLoading] = useState<boolean>(false);

  /// caller
  const loadDepts = async () => {
    try {
      let depts;
      setLoading(true);
      await Promise.all((depts = await getDatas()));
      console.log("depts : ", depts);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const loadBatches = async () => {
    try {
      setLoading(true);
      getBatches().then((res) => {
        // setDepartments(res);
        console.log(res);
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  /// Loader Hook
  useEffect(() => {
    loadDepts();
    loadBatches();
  }, [loading]);

  return (
    <>
      <Box
        sx={{
          bgcolor: "black",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          color={"white"}
          sx={{ typography: { xs: "h5", lg: "h3", p: 2 } }}
        >
          Dashboard
        </Typography>
      </Box>
    </>
  );
};

export default Dashboard;
