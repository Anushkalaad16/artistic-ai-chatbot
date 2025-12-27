const CognivoLogoImage = ({ size = 24, className = "" }) => {
  return (
    <img
      src="/public/chaticon.png"
      alt="Cognivo Logo"
      width={size}
      height={size}
      className={className}
    />
  );
};

export default CognivoLogoImage;
