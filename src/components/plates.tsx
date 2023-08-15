import { Box } from "@mui/material";
import C_Button from "./atoms/C_Button";
interface Props {
  leading: string;
}
const Plates = ({ leading }: Props) => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        height: "50px",
        mb: 3,
        ml: 3,
        mr: 3,
        border: 3,
        borderRadius: 4,
        borderColor: "black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <C_Button
          label={leading}
          marginLeft={2}
          marginTop={1}
          variant="contained"
          btn_text_color="black"
          size={"small"}
          width="100px"
          onSubmit={() => console.log(`Clicked ${leading}`)}
        />
      </Box>
      <Box sx={{ mt: 1, mr: 1 }}>
        <C_Button
          label="Edit"
          variant="contained"
          size={"small"}
          btn_color="success"
          btn_text_color="white"
          width="100px"
          onSubmit={() => console.log(`Clicked ${leading} Edit`)}
        />
        <C_Button
          label="Delete"
          variant="contained"
          size={"small"}
          style={{ fontSize: "24px" }}
          btn_color="error"
          marginLeft={2}
          btn_text_size="50px"
          btn_text_color="black"
          width="100px"
          onSubmit={() => console.log(`Clicked ${leading} Delete`)}
        />
      </Box>
    </Box>
  );
};

export default Plates;
