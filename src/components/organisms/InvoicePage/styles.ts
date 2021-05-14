import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
  },
  title:{
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 12,
  },
  subtitle:{
    fontSize: 14,
    marginBottom: 8,
  },
  slider:{
    margin: '20px 0px',
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
  info:{
    marginBottom: 20,
  },
}, {index: 2});