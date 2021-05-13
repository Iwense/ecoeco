import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderRadius: 8,
    border: `1px solid ${Colors.liteGray}`,
    padding: '12px 16px',
    background: `${Colors.liteGray}4c`,
  },
  line:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    '&:last-child': {
      marginBottom: 0,
    }
  },
  title:{
    fontSize: 20,
    fontWeight: 700,
  },
  date:{
    fontSize: 14,
    fontWeight: 700,
  },
  time:{
    fontSize: 14,
    fontWeight: 500,
  },
  table:{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: 4,
    width: '100%',
  },
  
}, {index: 2});