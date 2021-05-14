import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
  },
  title:{
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 24,
  },
  settings: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px solid ${Colors.liteGray}`,
    padding: '8px 0px',
    width: '100%',
    marginTop: 12,
  },
  text:{
    color: Colors.black,
    fontSize: 14,
    fontWeight: 700,
  },
  subtext:{
    color: Colors.black,
    fontSize: 12,
    fontWeight: 500,
    marginTop: 4,
  },
  slider:{
    marginTop: 24,
  },

  btn:{
    width: '100%',
  },
}, {index: 3});