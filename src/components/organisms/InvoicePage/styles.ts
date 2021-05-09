import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    
  },
  title:{
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 12,
  },
  line: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateTime:{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
  },
  date:{
      fontWeight: 800,
      marginRight: 4,
  },
  price:{
      color: Colors.red,
      fontSize: 24,
      fontWeight: 900,
  },
  ruble: {},
  location:{
    display: 'flex',
    justifyContent: 'flex-end',
  },
  locationText:{

  },
}, {index: 2});