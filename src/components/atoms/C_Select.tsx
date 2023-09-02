import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";
interface Props {
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  label: string;
  style?: SxProps<Theme>;
  id?: string;
  items: any[];
  defaultValue?: any;
  autoWidth?: boolean;
  isRequired?: boolean;
  isError?: boolean;
  margin?: number;
  isDisabled?: boolean;
  errorHelperText?: string;
  size?: "small" | "medium";
  variant?: "filled" | "standard" | "outlined";
  onClick?: () => void;
  onChange?: (e: any) => void;
  value?: string;
}

const C_Select = ({
  height,
  width,
  minWidth = 100,
  label,
  items,
  id,
  autoWidth,
  defaultValue,
  isError,
  isRequired,
  style,
  size,
  variant,
  margin,
  errorHelperText,
  isDisabled,
  onClick,
  onChange,
  value,
}: Props) => {
  // const [item, setItem] = useState<string>(value);
  // const handleChange = (event: SelectChangeEvent) => {
  //   setItem(event.target.value as string);
  // };
  return (
    <Box
      sx={{
        minWidth: minWidth,
        height: height,
        width: width,
        m: margin,
        ...style,
      }}
    >
      <FormControl
        fullWidth
        error={isError}
        size={size}
        required={isRequired}
        variant={variant}
        disabled={isDisabled}
      >
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId={id}
          id="demo-simple-select"
          name={id}
          value={value}
          label={label}
          defaultValue={defaultValue}
          autoWidth={autoWidth}
          onChange={onChange}
          onClick={onClick}
        >
          {items?.map((e) => (
            <MenuItem value={e}>{e}</MenuItem>
          ))}
        </Select>
        {isError ? <FormHelperText>{errorHelperText}</FormHelperText> : null}
      </FormControl>
    </Box>
  );
};

export default C_Select;
