import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    border: `1px solid ${Colors.liteGray}`,
    borderRadius: 8,
    padding: '14px 8px',
    marginTop: 12,
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
  },
  bonus:{
    display: 'flex',
    justifyContent: 'flex-start',
    alingItems: 'center',
  },
  bonusIcon: {
      width: 12,
      height: 12,
      background: Colors.yellow,
      borderRadius: 3,
      marginRight: 4,
  },
}, {index: 1});