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
}, {index: 3});