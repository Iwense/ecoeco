import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';
import { IProps } from './MiniButton'

export const useStyles = makeStyles({
  button: {
    background: Colors.white,
    borderRadius: 8,
    width: 50,
    height: 50,
    border: `1px solid ${Colors.liteGray}`,
    '&:hover': {
      background: Colors.white,
    },
    boxSizing: 'border-box',
  },
  icon:{
    fill: Colors.gray,
    fontSize: 30,
  },
  
}, {index: 1});