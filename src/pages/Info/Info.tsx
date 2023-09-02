import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ClasswisePlates from "../../components/ClassPlates";
import C_Button from "../../components/atoms/C_Button";
import { deleteScheduleById, getData } from "../../api/crud";
interface Props {
  batch: string;
  section: string;
}

const Info = ({ batch, section }: Props) => {
  const [data, setData] = useState([]);
  const [showAddClassForm, setShowAddClassForm] = useState<boolean>(false);
  useEffect(() => {
    getData("departments", "cse", `${batch}_${section}`).then((res) => {
      setData(res);
    });
  }, [setData]);

  // console.log("FIRESTORE_DATA: ", data);
  const [classes, setClasses] = useState<any>([]);

  // useEffect(() => {
  //   data.map((item) => {
  //     setClasses([...classes, <ClasswisePlates props={item} />]);
  //   });
  // }, [data]);
  const handleAddClass = (newClass: any) => {
    setClasses([...classes, newClass]);
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
            {data.map((item, index) => (
              <ClasswisePlates
                props={item}
                batch={batch}
                section={section}
                index={index}
              />
            ))}
            {showAddClassForm && <ClasswisePlates />}
          </Box>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <C_Button
            label="Create New Class"
            variant="contained"
            btn_color="success"
            size="medium"
            margin={2}
            selfAlign="end"
            onSubmit={() => setShowAddClassForm(true)}
          />
        </div>

        <Box
          sx={{
            border: 2,
            borderWidth: 1,
            borderColor: "black",
          }}
        />
      </Box>
    </>
  );
};

export default Info;
