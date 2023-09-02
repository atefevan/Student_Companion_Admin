import { useState } from "react";
import C_TextField from "./atoms/C_TextField";
import C_Button from "./atoms/C_Button";
import { setData } from "../api/crud";
import C_Select from "./atoms/C_Select";
import { Box, Typography } from "@mui/material";

interface Props {
  props: {
    day: string;
    classStart: string;
    classEnd: string;
    subject: string;
    classCode: string;
    classRoom: string;
    teacherInitial: string;
  };
  batch: string;
  section: string;
}

const ClasswisePlates = ({ props, batch, section }: Props) => {
  const [formData, setFormData] = useState<{}>();

  const handleFormDataInput = (e: any) => {
    e.preventDefault();

    console.log("EVENT", e);

    let obj: any = {};
    const key: string = e?.target?.id ? e?.target?.id : e?.target?.name;

    obj[key] = e?.target?.value;
    setFormData({ ...formData, ...obj });
  };

  console.log(formData);
  console.log("BATCH :: ", batch);
  console.log("SECTION :: ", section);

  return (
    <>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
          margin: 3,
        }}
      >
        <C_Select
          label={"Day"}
          items={["sat", "sun", "mon", "tue", "wed", "thu"]}
          margin={1}
          id="day"
          value={props?.day}
          onChange={handleFormDataInput}
        />

        <C_TextField
          id="classStart"
          value={props?.classStart}
          type="text"
          label="class start"
          isError={false}
          style={{ margin: 1 }}
          onChange={handleFormDataInput}
        />
        <C_TextField
          id="classEnd"
          value={props?.classEnd}
          type="text"
          label="class end"
          isError={false}
          style={{ margin: 1 }}
          onChange={handleFormDataInput}
        />
        <C_TextField
          id="subject"
          value={props?.subject}
          type="text"
          label="class subject"
          isError={false}
          style={{ margin: 1 }}
          onChange={handleFormDataInput}
        />
        <C_TextField
          id="classCode"
          value={props?.classCode}
          type="text"
          label="class code"
          isError={false}
          style={{ margin: 1 }}
          onChange={handleFormDataInput}
        />
        <C_TextField
          id="classRoom"
          value={props?.classRoom}
          type="text"
          label="class room"
          isError={false}
          style={{ margin: 1 }}
          onChange={handleFormDataInput}
        />
        <C_TextField
          id="teacherInitial"
          value={props?.teacherInitial}
          type="text"
          label="class teacher initial"
          isError={false}
          style={{ margin: 1 }}
          onChange={handleFormDataInput}
        />
        <div
          style={{
            display: "flex",
            margin: 7,
            width: "25vw",
          }}
        >
          <C_Button
            label="Add"
            btn_color="success"
            variant="contained"
            onSubmit={() => setData("cse", `${batch}_${section}`, formData)}
          />
          <Box sx={{ width: "5vw" }}></Box>
          <C_Button
            label="Remove"
            btn_color="error"
            variant="contained"
            onSubmit={() => {}}
          />
        </div>
      </div>
    </>
  );
};

export default ClasswisePlates;
