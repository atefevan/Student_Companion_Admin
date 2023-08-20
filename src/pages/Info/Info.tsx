import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
interface Props {
  batch: string;
}

const Info = ({ batch }: Props) => {
  const cse_55 = "55A";
  const date = useState<Date>();
  const c_start = useState();
  const c_end = useState();
  const c_subject = useState();
  const c_code = useState();
  const c_room = useState();
  const c_teacher_initial = useState();
  return (
    <>
      <Box
        sx={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          height: "50vh",
          mt: 10,
        }}
      >
        <div style={{ display: "flex" }}>
          <Box>
            <Typography
              variant="h3"
              fontWeight={300}
              sx={{ mr: 4, ml: 4, mt: 20 }}
            >
              {batch}
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
              width:"100vw",
              flex:1,
              m: 1,
            }}
          >
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "column",
                margin: 1,
              }}
            >
              <input type="date" style={{ margin: 3 }} name="date" />

              <TextField type="text" sx={{ m: 1 }} label={"class start"} />
              <TextField type="text" sx={{ m: 1 }} label={"class end"} />
              <TextField type="text" sx={{ m: 1 }} label={"class subject"} />
              <TextField type="text" sx={{ m: 1 }} label={"class code"} />
              <TextField type="text" sx={{ m: 1 }} label={"class room"} />
              <TextField
                type="text"
                sx={{ m: 1 }}
                label={"class teacher initial"}
              />
            </div>
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "column",
                margin: 1,
              }}
            >
              <input type="date" style={{ margin: 3 }} name="date" />

              <TextField type="text" sx={{ m: 1 }} label={"class start"} />
              <TextField type="text" sx={{ m: 1 }} label={"class end"} />
              <TextField type="text" sx={{ m: 1 }} label={"class subject"} />
              <TextField type="text" sx={{ m: 1 }} label={"class code"} />
              <TextField type="text" sx={{ m: 1 }} label={"class room"} />
              <TextField
                type="text"
                sx={{ m: 1 }}
                label={"class teacher initial"}
              />
            </div>
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "column",
                margin: 1,
              }}
            >
              <input type="date" style={{ margin: 3 }} name="date" />

              <TextField type="text" sx={{ m: 1 }} label={"class start"} />
              <TextField type="text" sx={{ m: 1 }} label={"class end"} />
              <TextField type="text" sx={{ m: 1 }} label={"class subject"} />
              <TextField type="text" sx={{ m: 1 }} label={"class code"} />
              <TextField type="text" sx={{ m: 1 }} label={"class room"} />
              <TextField
                type="text"
                sx={{ m: 1 }}
                label={"class teacher initial"}
              />
            </div>
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "column",
                margin: 1,
              }}
            >
              <input type="date" style={{ margin: 3 }} name="date" />

              <TextField type="text" sx={{ m: 1 }} label={"class start"} />
              <TextField type="text" sx={{ m: 1 }} label={"class end"} />
              <TextField type="text" sx={{ m: 1 }} label={"class subject"} />
              <TextField type="text" sx={{ m: 1 }} label={"class code"} />
              <TextField type="text" sx={{ m: 1 }} label={"class room"} />
              <TextField
                type="text"
                sx={{ m: 1 }}
                label={"class teacher initial"}
              />
            </div>
          </Box>
        </div>
        <Box sx={{ border: 2, borderWidth: 1, borderColor: "black" }} />
      </Box>
    </>
  );
};

export default Info;
