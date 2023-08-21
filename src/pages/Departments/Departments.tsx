import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getBatches, getDatas } from "../../firebase/ReadFunctions";
import C_Button from "../../components/atoms/C_Button";
import ViewPlates from "../../components/ViewPlates";
import C_TextField from "../../components/atoms/C_TextField";

const Departments = () => {
  /// DB Branches
  const [departments, setDepartments] = useState<any[]>([]);
  const [batches, setBatches] = useState<any[]>([]);
  // const [sections, setSections] = useState<any[]>([]);
  // const [classDates, setClassDates] = useState();
  // const [classNumbers, setClassNumbers] = useState();
  const [loading, setLoading] = useState<boolean>(false);

  /// UI Components ...
  const [deptVisibility, setDeptVisibility] = useState<boolean>(false);
  const [newDept, setNewDept] = useState<string>(""); /// caller
  const [depts, setDepts] = useState<string[]>(["CSE", "EEE"]);
  const [clearText, setClearText] = useState<boolean>(true);

  /// Loader Hook
  useEffect(() => {
    setLoading(true);
    getDatas()
      .then((res: any) => {
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
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
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
            justifyContent: "space-evenly",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
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
            {depts.map((e) => (
              <ViewPlates leading={e} />
            ))}

            <Box sx={{ alignSelf: "center", mb: 1 }}>
              <C_Button
                label="Add Department"
                variant="contained"
                size="large"
                onSubmit={() => {
                  setDeptVisibility(true);
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: "orange",
              height: "40%",
              width: "20%",
              border: 3,
              borderColor: "black",
              borderRadius: 4,
              flexDirection: "column",
              display: deptVisibility === true ? "flex" : "none",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                height: "80%",
                display: "flex",
                width: "90%",
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "left",
                ml: 2,
                mt: 2,
              }}
            >
              <C_TextField
                label="Add Department"
                id="add-dept"
                value={clearText === true ? newDept : ""}
                type="outlined"
                isError={false}
                fieldOnChange={(event) => {
                  setNewDept(event);
                  setClearText(true);
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "60%",
              }}
            >
              <Box sx={{ alignSelf: "left", mb: 3, ml: 3 }}>
                <C_Button
                  width="70%"
                  label="Add"
                  variant="contained"
                  size="medium"
                  btn_color="success"
                  onSubmit={() => {
                    if (newDept.length !== 0) {
                      setDepts([...depts, newDept]);
                      setNewDept("");
                    }

                    setClearText(false);
                  }}
                />
              </Box>
              <Box sx={{ alignSelf: "left", mb: 3, ml: 3 }}>
                <C_Button
                  width="70%"
                  label="X"
                  variant="contained"
                  size="large"
                  btn_color="error"
                  onSubmit={() => {
                    setDeptVisibility(false);
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Departments;
