const Label = ({ children, className = '', ...props }) => {
  return (
    <label className={`relative w-full block ${className}`} {...props}>
      {children}
    </label>
  );
};

export default Label;
