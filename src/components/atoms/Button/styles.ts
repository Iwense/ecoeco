import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';
import { IProps } from './Button'

export const useStyles = makeStyles({
  button: {
    background: ({typeBtn}: IProps) => Colors[typeBtn || 'red'],
    borderRadius: 8,
    padding: '8px 16px',
    width: 'fit-content',
    border: ({typeBtn}: IProps) => typeBtn && typeBtn == 'red' ? 0 : `1px solid ${Colors.liteGray}`,
    '&:hover': {
      background:({typeBtn}: IProps) => typeBtn && typeBtn == 'red' ?  Colors.hoverRed : Colors.white,
    }
  },
  text:{
    color: ({typeBtn}: IProps) => typeBtn && typeBtn == 'red' ? Colors.white : Colors.black,
    fontSize: 15,
    fontWeight: 700,
  },
  icon:{
    
  },
  
}, {index: 1});