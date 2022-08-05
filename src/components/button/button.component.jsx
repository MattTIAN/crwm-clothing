import './button.styles.scss'
/* 
default
inverted
Google sign in
*/
const BUTTON_TYPE_CLASS = {
  google: "google-sing-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
