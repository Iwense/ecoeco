import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
  },
  main: {
    height: 160,
    boxSizing: 'border-box',
    margin: '16px 0',
    overflow: 'auto',
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
  lineSide:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  legendWrapper:{
    position: 'relative',
  },
  tick:{
    width: 20,
    borderRadius:'50%',
    background: Colors.gray,
    textAlign: 'center',
  },
  observer:{
    color: Colors.gray,
    fontSize: 12,
  },
  invoice:{
    background: Colors.red,
    borderRadius: '8px 0px 6px',
    padding: '2px 8px',
    marginLeft: 8,
  },
  sales:{
    background: Colors.green,
    borderRadius: '8px 0px 6px',
    padding: '2px 8px',
    marginLeft: 8,
  },
  observerText:{
    color: Colors.white,
    fontSize:12,
    fontWeight: 700,
  },
  
}, {index: 2});