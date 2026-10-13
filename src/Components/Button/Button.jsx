

const Button = ({title="Bus",className,logo}) => {
    return (
        <button className={className}>
          {title} {logo}
        </button>
    );
};

export default Button;