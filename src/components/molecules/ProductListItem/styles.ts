import { makeStyles } from "@material-ui/core/styles";
import { Colors } from '../../../styles/Colors';

export const useStyles = makeStyles({
  root: {
    boxSizing:'border-box',
    width:'100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position:'relative',
  },
  main:{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderRadius: 8,
    border: `1px solid ${Colors.liteGray}`,
    padding: '12px 16px 24px 16px',
    background: `${Colors.liteGray}4c`,
    boxSizing: 'border-box',
    marginTop: 24,
    width: '100%',
    transform: 'all 0.5s ease-out',
  },
  delete:{
    position:'absolute',
    right:0,
    top: 0,
    bottom:0,
    background: Colors.red,
    width:'fit-content',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    boxSizing:'border-box',
    padding: '0 12px',
    borderRadius: '0 8px 8px 0',
  },
  deleteText:{
    color: Colors.liteGray,
    fontSize:12,
    fontWeight: 700,
  },
  animate:{
    transform: 'translateX(-60px)',
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