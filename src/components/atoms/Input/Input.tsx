import React from "react";
import cn from "classnames";
import { ReactComponent as Close } from "../../../assets/svg/close.svg";
import { Box, Typography, TextField, SvgIcon } from "@material-ui/core";
import { useStyles } from "./styles";

export interface IProps {
    placeholder?: string;
    label?: string;
    defaultValue?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    errorText?: string;
    value: string;
    inputType?: string;
    className?: string;
    error?: string;
    multiline?: boolean;
    required?: boolean;
    rows?: number;
    onKeyPress?: (event: React.KeyboardEvent) => void;
    clearClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

const Input = React.forwardRef<HTMLInputElement, IProps>(
    (props: IProps, ref) => {
        const {
            placeholder,
            label,
            defaultValue,
            onChange,
            onBlur,
            clearClick,
            onKeyPress,
            error,
            errorText,
            value,
            inputType,
            className,
            multiline,
            rows,
            required,
        } = props;
        const classes = useStyles(props);
        const inputClass = cn(classes.input, className);

        const endIcon = (
            <SvgIcon
                component={Close}
                className={classes.endIcon}
                onClick={clearClick}
            />
        );

        return (
            <Box className={classes.inputBox}>
                {label && (
                    <Typography className={classes.inputLabel}>
                        {label}
                    </Typography>
                )}
                <TextField
                    InputProps={{
                        disableUnderline: true,
                        endAdornment: value && clearClick ? endIcon : null,
                    }}
                    ref={ref}
                    onChange={onChange}
                    value={value}
                    defaultValue={defaultValue}
                    className={inputClass}
                    type={inputType}
                    placeholder={placeholder}
                    helperText={errorText}
                    multiline={multiline}
                    rows={rows}
                    required={required}
                    onKeyPress={onKeyPress}
                    onBlur={onBlur}
                />
                {error && (
                    <Typography
                        className={classes.error}
                    >{`* ${error}`}</Typography>
                )}
            </Box>
        );
    }
);

export default Input;
