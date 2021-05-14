import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root:{
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    boxSizing:'border-box',
  },
  loader:{
    color: Colors.liteGray,
  }
  
}, {index: 1});