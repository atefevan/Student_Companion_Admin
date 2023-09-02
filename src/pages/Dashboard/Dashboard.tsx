import * as React from "react";
import { Box, Typography } from "@mui/material";
import Info from "../Info/Info";
import { getData } from "../../api/crud";
import { useEffect } from "react";
import ErrorPage from "../Error/Error";

const Dashboard = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    getData("info", "cse", "data").then((res) => {
      setData(res);
    });
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
