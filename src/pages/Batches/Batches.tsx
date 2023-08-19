import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getBatches, getDatas } from "../../firebase/ReadFunctions";
import C_Button from "../../components/atoms/C_Button";
import ViewPlates from "../../components/ViewPlates";
import C_TextField from "../../components/atoms/C_Textfield";

const Batches = () => {
  /// DB Branches
  const [departments, setDepartments] = useState<any[]>([]);
  // const [batches, setBatches] = useState<any[]>([]);
  const [sections, setSections] = useState<any[]>([]);
  const [classDates, setClassDates] = useState();
  const [classNumbers, setClassNumbers] = useState();
  const [loading, setLoading] = useState<boolean>(false);

  /// UI Components ...
  const [deptVisibility, setDeptVisibility] = useState<boolean>(false);
  const [newBatch, setNewBatch] = useState<string>(""); /// caller
  const [batches, setBatches] = useState<string[]>(["50", "51"]);
  const [clearText, setClearText] = useState<boolean>(true);

  /// Loader Hook
  // useEffect(() => {
  //   setLoading(true);
  //   getDatas()
  //     .then((res: any) => {
  //       setDepartments(res);
  //       getBatches(res).then((batch) => {
  //         setBatches(batch);
  //         console.log("Batches: ", batch);
  //       });
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);
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
              mt: 8,
              border: 3,
              height: "20%",
              width: "30%",
              justifyContent: "center",
              borderColor: "black",
              borderRadius: 4,
            }}
          >
            <Typography variant="h4" sx={{ m: 3 }}>
            50 ➨ Batches
            </Typography>
            {batches.map((e) => (
              <ViewPlates leading={e} />
            ))}

            <Box sx={{ alignSelf: "center", mb: 1 }}>
              <C_Button
                label="Add Batch"
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
                label="Add Batch"
                id="add-dept"
                value={clearText === true ? newBatch : ""}
                type="outlined"
                isError={false}
                fieldOnChange={(event) => {
                  setNewBatch(event);
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
                  btn_color="warning"
                  onSubmit={() => {
                    if (newBatch.length !== 0) {
                      setBatches([...batches, newBatch]);
                      setNewBatch("");
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
                  btn_color="warning"
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

export default Batches;
