import { useState } from "react";
import C_TextField from "./atoms/C_TextField";
import C_Button from "./atoms/C_Button";
import { setData } from "../api/crud";
import C_Select from "./atoms/C_Select";

interface Props {
  props: {
    day: string;
    start: string;
    end: string;
    subject: string;
    code: string;
    room: string;
    teacherInit: string;
  };
}

const ClasswisePlates = ({ props }: Props) => {
  const [newClasss, setNewClass] = useState<any>({
    day: "",
    start: "",
    end: "",
    subject: "",
    code: "",
    room: "",
    teacherInit: "",
  });
  useState<string>("");
  const [formData, setFormData] = useState<{}>();

  const handleFormDataInput = (e: any) => {
    e.preventDefault();

    let obj: any = {};
    const key: string = e?.target?.id;

    obj[key] = e?.target?.value;
    setFormData({ ...formData, ...obj });
  };

  console.log(formData);

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
          items={["sat", "sun", "mon", "tue", "wed", "thr"]}
          margin={1}
        />

        <C_TextField
          id="classStart"
          value={props?.start}
          type="text"
          label="class start"
          isError={false}
          style={{ margin: 1 }}
          onChange={handleFormDataInput}
        />
        <C_TextField
          id="classEnd"
          value={props?.end}
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
          value={props?.code}
          type="text"
          label="class code"
          isError={false}
          style={{ margin: 1 }}
          onChange={handleFormDataInput}
        />
        <C_TextField
          id="classRoom"
          value={props?.room}
          type="text"
          label="class room"
          isError={false}
          style={{ margin: 1 }}
          onChange={handleFormDataInput}
        />
        <C_TextField
          id="teacherInitial"
          value={props?.teacherInit}
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
