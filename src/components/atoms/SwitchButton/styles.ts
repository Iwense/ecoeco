import { makeStyles } from '@material-ui/core/styles';
import { Colors } from '../../../styles/Colors'
import {IProps} from './SwitchButton'

export const useStyles = makeStyles(() => ({
  root: {
    width: ({type}: IProps) => type === "large" ? 54 : 32,
    height: ({type}: IProps) => type === "large" ? 26 : 16,
    padding: 0,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
  },
  title: {
    color: Colors.white,
    fontSize: "10px",
    fontWeight: 300,
    margin: "0 5px 0 0"
  },
  switchBase: {
    padding: 2,
    '&.Mui-checked':{
      transform:({type}: IProps) => type === "large" ? `translateX(${28}px)` : `translateX(${16}px)`,
      color: ({type}: IProps) => type === "large" ? Colors.white : Colors.black,
      '& + $track': {
            backgroundColor: Colors.red,
            opacity: 1,
          },
    },
  },
  thumb: {
    width: ({type}: IProps) => type === "large" ? 22 : 12,
    height: ({type}: IProps) => type === "large" ? 22 : 12,
  },
  track: {
    borderRadius: ({type}: IProps) => type === "large" ? 28 / 2 : 22 / 2,
    backgroundColor: Colors.liteGray,
    opacity: 1,
  },
  checked: {
    //transform:({type}: IProps) => type === "large" ? `translateX(${28}px)` : `translateX(${10}px)`,
    //color: ({type}: IProps) => type === "large" ? Colors.white : Colors.black,
  },
  focusVisible: {},

}), {index: 0});