import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  wrapper: {
   display: 'grid',
   gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
   width: '100%',
   height: '100%'
  },
  item:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    cursor: 'pointer',
  },
  itemBlock:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',
    width: '100%',
  },
  text:{
    fontSize: 12,
    color: Colors.gray,
    fontWeight: 500,
    textAlign: 'center',
  },
  icon:{
    fill: Colors.gray,
    // stroke: Colors.gray,
  },
  active:{
    fill: Colors.red,
    color: Colors.red,
  }
}, {index: 3});