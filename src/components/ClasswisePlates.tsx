import { useState } from "react";
import C_TextField from "./atoms/C_TextField";

interface Props {}

const ClasswisePlates = ({}: Props) => {
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
          type="text"
          label="class start"
          isError={false}
          style={{ margin: 1 }}
          onChange={handleFormDataInput}
        />
        <C_TextField
          id="classEnd"
          type="text"
          label="class end"
          isError={false}
          style={{ margin: 1 }}
          onChange={handleFormDataInput}
        />
        <C_TextField
          id="subject"
          type="text"
          label="class subject"
          isError={false}
          style={{ margin: 1 }}
          onChange={handleFormDataInput}
        />
        <C_TextField
          id="classCode"
          type="text"
          label="class code"
          isError={false}
          style={{ margin: 1 }}
          onChange={handleFormDataInput}
        />
        <C_TextField
          id="classRoom"
          type="text"
          label="class room"
          isError={false}
          style={{ margin: 1 }}
          onChange={handleFormDataInput}
        />
        <C_TextField
          id="teacherInitial"
          type="text"
          label="class teacher initial"
          isError={false}
          style={{ margin: 1 }}
          onChange={handleFormDataInput}
        />
      </div>
    </>
  );
};

export default ClasswisePlates;
