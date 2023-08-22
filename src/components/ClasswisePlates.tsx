import { useState } from "react";
import C_TextField from "./atoms/C_TextField";
import C_Button from "./atoms/C_Button";
import { setData } from "../api/crud";

interface Props {
  props: {};
}

const ClasswisePlates = ({ props }: Props) => {
  // const date = useState();
  // const c_start = useState<string>();
  // const c_end = useState<string>();
  // const c_subject = useState<string>();
  // const c_code = useState<string>();
  // const c_room = useState<string>();
  // const c_teacher_initial = useState<string>();

  const [formData, setFormData] = useState<{}>();

  const handleFormDataInput = (e: any) => {
    e.preventDefault();

    let obj = {};
    const key: string = e?.target?.id;

    obj[key] = e?.target?.value;
    setFormData({ ...formData, ...obj });
  };

  //console.log(formData);

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
        <C_Button
          label="Done"
          variant="contained"
          onSubmit={() => setData("cse", "55_A", formData)}
        />
      </div>
    </>
  );
};

export default ClasswisePlates;
