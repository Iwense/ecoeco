import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20, 
    background: Colors.white,
    minHeight: 'calc(100vh - 120px)',
    padding: 24,
  },
}, {index: 3});