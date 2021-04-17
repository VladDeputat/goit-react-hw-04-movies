import Loader from 'react-loader-spinner';
import { loader } from './Loader.module.scss';

const Spinner = () => (
  <Loader
    className={loader}
    type="ThreeDots"
    color="rgb(194, 10, 10)"
    height={50}
    width={200}
    timeout={3000}
  />
);

export default Spinner;
