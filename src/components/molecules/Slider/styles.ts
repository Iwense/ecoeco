import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderRadius: 8,
    border: `1px solid ${Colors.liteGray}`,
    padding: '16px 12px',
    marginBottom: 20,
    boxSizing:'border-box',
  },
  line:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textWrapper:{
    display: 'flex',
    flexDirection: 'column',
  },
  title:{
    fontSize: 14,
    fontWeight: 700,
  },
  subtitle:{
    fontSize: 14,
    fontWeight: 500,
  },
  swiper:{
    padding: '30px 0px',
  },
}, {index: 2});