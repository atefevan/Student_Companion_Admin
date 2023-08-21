import { useState } from "react";
import C_TextField from "./atoms/C_TextField";

interface Props {}

const ClasswisePlates = ({}: Props) => {
  const date = useState();
  const c_start = useState<string>();
  const c_end = useState<string>();
  const c_subject = useState<string>();
  const c_code = useState<string>();
  const c_room = useState<string>();
  const c_teacher_initial = useState<string>();
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
        <input type="date" style={{ margin: 5 }} name="date" />

        <C_TextField
          id="outlined-basic"
          type="text"
          label="class start"
          isError={false}
          style={{ margin: 1 }}
          fieldOnChange={() => {}}
        />
        <C_TextField
          id="outlined-basic"
          type="text"
          label="class end"
          isError={false}
          style={{ margin: 1 }}
          fieldOnChange={() => {}}
        />
        <C_TextField
          id="outlined-basic"
          type="text"
          label="class subject"
          isError={false}
          style={{ margin: 1 }}
          fieldOnChange={() => {}}
        />
        <C_TextField
          id="outlined-basic"
          type="text"
          label="class code"
          isError={false}
          style={{ margin: 1 }}
          fieldOnChange={() => {}}
        />
        <C_TextField
          id="outlined-basic"
          type="text"
          label="class room"
          isError={false}
          style={{ margin: 1 }}
          fieldOnChange={() => {}}
        />
        <C_TextField
          id="outlined-basic"
          type="text"
          label="class teacher initial"
          isError={false}
          style={{ margin: 1 }}
          fieldOnChange={() => {}}
        />
      </div>
    </>
  );
};

export default ClasswisePlates;
