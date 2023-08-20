import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  SxProps,
  TextField,
  Theme,
} from "@mui/material";
import { useState } from "react";

interface Props {
  prefixIcon?: any;
  prefixText?: string;
  icon_color?: string;
  suffixIcon?: React.ReactNode;
  suffixText?: string;
  height?: string;
  width?: string;
  label?: string;
  id: string;
  placeHolder?: string;
  type: string;
  required?: boolean;
  helperText?: string;
  _disabled?: boolean;
  isError: boolean;
  fullwidth?: boolean;
  value?: string;
  variant?: "standard" | "outlined" | "filled";
  style?: SxProps<Theme>;
  font?: string;
  borderColor?:
    | "error"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning";
  textColor?: string;
  hiddenLabel?: boolean;
  focused?: boolean;
  fieldOnChange: (value: string) => void;
}

const C_TextField = ({
  label,
  id,
  variant,
  required = false,
  isError,
  _disabled,
  type = "text",
  helperText,
  prefixIcon,
  prefixText,
  value,
  suffixText,
  placeHolder,
  style,
  textColor,
  focused,
  borderColor,
  fieldOnChange,
  fullwidth,
  hiddenLabel,
}: Props) => {
  const [showPassword, setShowPassword] = useState(true);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <TextField
        fullWidth={fullwidth}
        hiddenLabel={hiddenLabel}
        focused={focused}
        sx={{
          mb: 5,
          ...style,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {prefixText ? prefixText : prefixIcon ? prefixIcon : null}
            </InputAdornment>
          ),

          endAdornment: (
            <InputAdornment position="end">
              {suffixText ? suffixText : null}
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                edge="end"
              >
                {type === "password" ? (
                  showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )
                ) : null}
              </IconButton>
            </InputAdornment>
          ),
          style: {
            color: textColor,
          },
        }}
        id={id}
        label={label}
        value={value}
        type={showPassword ? type : "text"}
        placeholder={placeHolder}
        disabled={_disabled}
        error={isError}
        color={borderColor}
        variant={variant}
        required={required ? required : false}
        onChange={(e) => {
          e.preventDefault();
          fieldOnChange(e.target.value);
        }}
        helperText={isError ? helperText : null}
      />
    </>
  );
};

export default C_TextField;
