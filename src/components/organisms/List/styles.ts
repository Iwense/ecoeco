import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
  },
  analyticWrapper:{
    
  },
  title:{
    fontSize: 14,
    fontWeight: 700,
  },
  textLink:{
    color:Colors.red,
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
  rightSide:{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  price:{
    color: Colors.black,
    fontSize:16,
    fontWeight: 700,
  },
  ruble:{
    color: Colors.black,
    fontSize: 16,
    fontWeight: 700,
  },
  buttons:{
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: 12,
  },
}, {index: 3});