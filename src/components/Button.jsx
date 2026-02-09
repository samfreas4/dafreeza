import './Button.css';

export default function Button({ as = 'button', variant = 'primary', className = '', ...props }) {
  const Tag = as;
  return <Tag className={`btn btn-${variant} ${className}`.trim()} {...props} />;
}
