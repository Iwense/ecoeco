import React from "react";
import { Box, Switch, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

export interface IProps {
    name?: string;
    checked?: boolean;
    onClick: () => void;
    title?: string;
    type?: "large" | "small";
}

const SwitchButton: React.FC<IProps> = (props) => {
    const classes = useStyles(props);
    const { name, onClick, checked, title } = props;

    return (
        <Box className={classes.container}>
            <Typography variant='subtitle1' className={classes.title}>
                {title}
            </Typography>
            <Switch
                classes={{
                    root: classes.root,
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked,
                }}
                name={name}
                onClick={onClick}
                checked={checked}
            />
        </Box>
    );
};

export default SwitchButton;

SwitchButton.defaultProps = {
    name: "",
    onClick: () => null,
    checked: false,
    type: "large",
};
