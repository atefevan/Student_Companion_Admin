import * as React from "react";
import { Box, Typography } from "@mui/material";
import Info from "../Info/Info";
import Departments from "../Departments/Departments";
import Batches from "../Batches/Batches";
import {
  getData,
  getDept,
  getScheduleByDay,
  getDepartments,
} from "../../api/crud";
import { useEffect } from "react";

const Dashboard = () => {
  const dept = "CSE";
  const batches = ["55", "51", "52", "53"];
  const sections = ["A", "B", "C"];
  const [data, setData] = React.useState([]);
  let allClass = [];
  // const batch_sections = [55:{},]

  useEffect(() => {
    // getData("info", "cse", "data").then((res) => {
    //   setData(res);
    // });
    ["sat", "sun", "mon"].map((day) => {
      getScheduleByDay("55_A", day, "cse").then((res) =>
        //console.log("Res: ", res)
        allClass.push({ [day]: res })
      );
    });
  }, []);

  console.log(allClass);

  return (
    <>
      <Box>
        <Typography variant="h4" fontWeight={600} sx={{ m: 4 }}>
          Department ➨ {dept}
        </Typography>
        {data.map((item) => (
          <Info batch={item.batch} section={item.section} />
        ))}
      </Box>
    </>
  );
};

export default Dashboard;

// const data = {
//   '0':[
//     'cse':[
//       'batch':[
//         '55':[
//           'sec':[
//             'A':[
//               'class_date':'',
//               'class_start':'',
//               'class_end':'',
//               'class_subject':'',
//               'class_code':'',
//               'class_room':'',
//               'teacher_initial':'',
//             ],
//           ],
//         ],
//       ],
//     ],
//   ],
//   '1':[
//    'eee':[
//      'batch':[
//         '55':[
//           'sec':[
//             'A':[
//               'class_date':'',
//               'class_start':'',
//               'class_end':'',
//               'class_subject':'',
//               'class_code':'',
//               'class_room':'',
//               'teacher_initial':'',
//             ],
//           ],
//         ],
//       ],
//     ],
//   ],
// };
