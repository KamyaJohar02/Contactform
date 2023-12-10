
import  './Buttony.css'
import PropTypes from 'prop-types';


const Buttons = (props) => {
  const {isOutline, icon, text, ...rest} =props;
  return (
    <div>
        <button
        {...rest}
        className={isOutline? 'outlineBtn' : 'btnPrimary'}>
        {icon}
        {text}

        </button>
        
    </div>
  )
}
Buttons.propTypes = {
  icon: PropTypes.string.isRequired, // 'icon' prop is required and should be a string
  text: PropTypes.any,
  isOutline: PropTypes.bool, // You can specify the type of other props as needed
};
export default Buttons