import { makeStyles } from '@material-ui/core/styles';
import setup3 from '../../../assets/setup3.jpg';

export default makeStyles(() => ({
  grid: {
      marginLeft: '-8px',
      marginRight: '-8px',
      backgroundImage: `url(${setup3})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      height: '85vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center',
  },
  container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      color: 'white',
  },
  quote: {
    marginTop: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }
}))