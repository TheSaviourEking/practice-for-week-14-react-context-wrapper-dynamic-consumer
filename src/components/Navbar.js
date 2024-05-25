import horoscopesObj from '../data/horoscopes';
import { useContext } from 'react';

import { HoroscopeContext } from '../context/HoroscopeContext';

const Navbar = () => {
  const horoscopes = Object.keys(horoscopesObj);
  const { setCurrentSign } = useContext(HoroscopeContext);

  return (
    <nav>
      {horoscopes.map(sign => (
        <span key={sign} onClick={() => {
          console.log("sign, ", sign);
          setCurrentSign(sign);
        }}>
          {sign}
        </span>
      ))}
      {console.log('navbar renders')}
    </nav>
  )
};

export default Navbar;
