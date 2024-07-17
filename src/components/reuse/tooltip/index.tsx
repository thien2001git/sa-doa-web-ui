import clsx from 'clsx';

const Tooltip = ({
  children,
  className,
  anchor = 'top',
  ...props
}: {
  className?: string;
  anchor?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        'py-[6px] px-3 bg-black/70 text-nowrap rounded-md text-white absolute text-[12px] hidden tool-tip',
        'dark:text-black dark:bg-white/80',
        anchor === 'top' ? 'bottom-[calc(100%_+_8px)]' : '',
        anchor === 'bottom' ? 'top-[calc(100%_+_8px)]' : '',
        anchor === 'left' ? 'right-[calc(100%_+_8px)]' : '',
        anchor === 'right' ? 'left-[calc(100%_+_8px)]' : '',
        anchor === 'center' ? 'left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' : '',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Tooltip;