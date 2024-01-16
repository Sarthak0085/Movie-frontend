import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import MobileFooter from './Footer/MobileFooter';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className='bg-main text-white'>
      <Navbar />
      {children}
      <Footer />
      {/* Mobile footer  */}
      <MobileFooter />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout