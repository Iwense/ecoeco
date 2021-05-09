import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    border: `1px solid ${Colors.liteGray}`,
    borderRadius: 8,
    padding: '8px 16px',
    marginTop: 12,
    cursor: 'pointer',
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
  ruble:{
    fontSize: 18,
    fontWeight: 500,
    color: Colors.black,
  },
  bonus:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bonusText:{
    fontSize: 13,
    fontWeight: 700,
    color: Colors.darkGray,
  },
  bonusIcon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 16,
      height: 16,
      background: Colors.yellow,
      borderRadius: 3,
      marginRight: 4,
  },
  char:{
    fontSize: 12,
    fontWeight: 800,
  },
  checkText:{
    fontWeight: 200,
  },
  checkIcon:{
    filter: 'opacity(70%)',
    marginLeft: 6,
  },
}, {index: 1});