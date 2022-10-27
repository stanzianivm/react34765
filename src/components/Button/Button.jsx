export const Button = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <button
      onClick={handleClick}
      type="button"
      className={props.class}
      id={props.id}
    >
      {props.text}
    </button>
  );
};
