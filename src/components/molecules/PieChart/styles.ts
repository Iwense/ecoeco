import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    padding: 8,
    marginBottom: 8,
    height: 180,
  },
  line:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
    '&:last-child': {
      marginBottom: 0,
    }
  },
  legendWrapper:{
    position: 'relative',
  }
  
}, {index: 2});