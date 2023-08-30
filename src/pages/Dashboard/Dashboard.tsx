import * as React from "react";
import { Box, Typography } from "@mui/material";
import Info from "../Info/Info";
import {
  getData,
  getDept,
  getScheduleByDay,
  getDepartments,
} from "../../api/crud";
import { useEffect } from "react";
import ErrorPage from "../Error/Error";

const Dashboard = () => {
  let dept;
  const batches = ["55", "51", "52", "53"];
  const sections = ["A", "B", "C"];
  const [data, setData] = React.useState([]);
  let allClass: any;
  // const batch_sections = [55:{},]

  useEffect(() => {
    getData("info", "cse", "data").then((res) => {
      setData(res);
    });
    // ["sat", "sun", "mon"].map((day) => {
    //   getScheduleByDay("55_A", day, "cse").then((res) =>
    //     allClass.push({ [day]: res })
    //   );
    // });
  }, []);

  return (
    <>
      <Box>
        <Typography variant="h4" fontWeight={600} sx={{ m: 4 }}>
          Department ➨ {"CSE"}
        </Typography>
        {data.length !== 0 ? (
          data.map((item: any) => (
            <Info batch={item.batch} section={item.section} />
          ))
        ) : (
          <ErrorPage />
        )}
      </Box>
    </>
  );
};

export default Dashboard;
