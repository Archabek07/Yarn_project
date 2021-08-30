function SimpleButton(props) {
  const btn = props.children;
  const className = props.styles;
  if (btn) {
    return <button className={className}>{btn}</button>;
  } else {
    return <button className={className}>Button</button>;
  }
}

export default SimpleButton;
