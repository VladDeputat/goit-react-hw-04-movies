import Loader from 'react-loader-spinner';
import { loader } from './Loader.module.scss';

const Spinner = () => (
  <Loader
    className={loader}
    type="ThreeDots"
    color="#3f51b5"
    height={100}
    width={100}
    timeout={3000}
  />
);

export default Spinner;
