import clsx from 'clsx';

const CheckIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      className={clsx('w-full h-full fill-svgDefault dark:fill-svgDefault_d', className)}
      viewBox="0 0 448 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />{' '}
    </svg>
  );
};
export default CheckIcon;