import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getBatches, getDatas } from "../../Utils/firebaseFunctions";
import C_Button from "../../components/atoms/C_Button";
import Plates from "../../components/plates";

const Dashboard = () => {
  /// DB Branches
  const [departments, setDepartments] = useState<any[]>([]);
  const [batches, setBatches] = useState<any[]>([]);
  const [sections, setSections] = useState<any[]>([]);
  const [classDates, setClassDates] = useState();
  const [classNumbers, setClassNumbers] = useState();
  const [loading, setLoading] = useState<boolean>(false);

  const [deptVisibility, setDeptVisibility] = useState<boolean>(false);
  /// caller
  const loadDepts = async () => {
    setLoading(true);
    try {
      let depts = await getDatas();
      setDepartments(depts);
      //let promises = await Promise.all([depts]);
      console.log("depts : ", depts);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    return departments;
  };

  const loadBatches = async (departments) => {
    setLoading(true);
    try {
      getBatches(departments).then((res) => {
        setDepartments(res);
        console.log("HAHAH: ", res);
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  /// Loader Hook
  useEffect(() => {
    setLoading(true);
    getDatas()
      .then((res) => {
        setDepartments(res);
        getBatches(res).then((batch) => {
          setBatches(batch);
          console.log("Batches: ", batch);
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const departMentsArray = ["CSE", "EEE"];
  return (
    <>
      <Box
        sx={{
          bgcolor: "black",
          justifyContent: "space-evenly",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Typography
          color={"white"}
          sx={{ typography: { xs: "h5", lg: "h3", p: 2 } }}
        >
          Dashboard
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "orange",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          mt: 3,
          border: 3,
          height: "20%",
          width: "30%",
          justifyContent: "center",
          borderColor: "black",
          borderRadius: 4,
        }}
      >
        <Typography variant="h4" sx={{ m: 3 }}>
          Departments
        </Typography>
        {departMentsArray.map((e) => (
          <Plates leading={e} />
        ))}
        <Box sx={{ alignSelf: "center", mb: 1 }}>
          <C_Button
            label="Add Department"
            variant="contained"
            size="large"
            onSubmit={() => {
              setDeptVisibility(!deptVisibility);
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "greenyellow",
          height: "40%",
          width: "30%",
          border: 3,
          borderColor: "black",
          borderRadius: 4,
        }}
      ></Box>
    </>
  );
};

export default Dashboard;
