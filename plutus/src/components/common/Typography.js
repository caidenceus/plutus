function getFontStyle(variant) {
  switch (variant) {
    case 'h1':
      return {
        fontSize: "72px",
        lineHeight: "90px"
      };
    case 'h2':
      return {
        fontSize: "60px",
        lineHeight: "72px"
      };
    case 'h3':
      return {
        fontSize: "48px",
        lineHeight: "60px"
      };
    case 'h4':
      return {
        fontSize: "36px",
        lineHeight: "44px"
      };
    case 'h5':
      return {
        fontSize: "30px",
        lineHeight: "38px"
      };
    case 'h6':
      return {
        fontSize: "24px",
        lineHeight: "32px"
      };
    case 'subtitle1':
      return {
        fontSize: "20px",
        lineHeight: "30px"
      };
    case 'subtitle2':
      return {
        fontSize: "18px",
        lineHeight: "28px"
      };
    case 'body1':
      return {
        fontSize: "16px",
        lineHeight: "24px"
      };
    case 'body2':
      return {
        fontSize: "12px",
        lineHeight: "18px"
      };
    case 'caption':
      return {
        fontSize: "12px",
        lineHeight: "18px"
      };
    default:
      return {};
  }
}

function Typography(props) {
  const style = getFontStyle(props.variant);

  if (props.color) {
    style.color = props.color;
  }
  if (props.fontWeight) {
    style.fontWeight = props.fontWeight;
  }

  return (
    <p style={style}>
      {props.children}
    </p>
  );
}

export default Typography;