import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  tooltip:{
    padding: 12,
    border: `1px solid ${Colors.gray}`,
    position: 'relative',
    background: Colors.white,
    width: '120px',
    borderRadius: 4,
  },
  tooltipTitle:{

  },
  tooltipLine:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  tooltipLabel:{
    color: Colors.gray,
  },
  tooltipValue:{
    color: Colors.red,
  },
  tooltipValueSale:{
    color: Colors.green,
  },
  
}, {index: 1});