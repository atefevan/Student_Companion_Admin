import C_TextField from "../../src/components/atoms/C_TextField";
interface Props {}

const ClasswisePlates = ({}: Props) => {
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
