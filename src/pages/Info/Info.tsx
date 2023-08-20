import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ClasswisePlates from "../../components/ClasswisePlates";
import C_Button from "../../components/atoms/C_Button";
interface Props {
  batch: string;
  section: string;
}

const Info = ({ batch, section }: Props) => {
  // const date = useState<Date>();
  // const c_start = useState();
  // const c_end = useState();
  // const c_subject = useState();
  // const c_code = useState();
  // const c_room = useState();
  // const c_teacher_initial = useState();
  const [classes, setClasses] = useState<any>([
    <ClasswisePlates />,
    <ClasswisePlates />,
  ]);
  const handleAddClass = (newClass: any) => {
    setClasses([...classes, newClass]);
  };
  const handleRemoveClass = (removeClass: any) => {
    setClasses(classes.filter((i: any) => i != removeClass));
  };
  return (
    <>
      <Box
        sx={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          height: "59vh",
          alignSelf: "end",
          mt: 20,
        }}
      >
        <div style={{ display: "flex" }}>
          <Box>
            <Typography
              variant="h3"
              fontWeight={300}
              sx={{ mr: 4, ml: 4, mt: 20 }}
            >
              {batch} {section}
            </Typography>
          </Box>
          <Box
            sx={{
              border: 2,
              borderWidth: 1,
              borderColor: "black",
              mr: 5,
            }}
          />
          <Box
            sx={{
              height: "55%",
              display: "flex",
              width: "100vw",
              flex: 1,
              m: 1,
            }}
          >
            {classes.map((classes: any) => classes)}
          </Box>
        </div>
        <C_Button
          label="Add"
          variant="contained"
          size="medium"
          selfAlign="end"
          marginLeft={"40vw"}
          marginBottom={"2vh"}
          onSubmit={() => handleAddClass(<ClasswisePlates />)}
        />
        <C_Button
          label="Remove"
          variant="contained"
          size="medium"
          selfAlign="end"
          marginLeft={"40vw"}
          marginBottom={"2vh"}
          onSubmit={() => handleRemoveClass(classes[classes.length - 1])}
        />
        <Box sx={{ border: 2, borderWidth: 1, borderColor: "black" }} />
      </Box>
    </>
  );
};

export default Info;
