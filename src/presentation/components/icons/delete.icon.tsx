import clsx from 'clsx';
import { IconProps } from './interface';

const DeleteIcon = ({ className, ...props }: IconProps) => {
   return (
      <svg
         width={14}
         height={16}
         className={clsx('fill-svgDefault dark:fill-svgDefault_d', className)}
         viewBox="0 0 14 16"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path
            d="M5.253.596c-.654.143-1.166.542-1.441 1.12-.155.326-.195.527-.212 1.065l-.014.46-1.402.007-1.402.007-.131.061a.673.673 0 0 0-.412.583.632.632 0 0 0 .179.519c.176.19.247.212.737.225l.42.012.012 4.562.012 4.561.052.168c.199.641.62 1.114 1.202 1.35.393.159.17.151 4.147.151 3.977 0 3.754.008 4.147-.151.579-.235 1.003-.712 1.203-1.354l.051-.164.012-4.561.012-4.562.42-.012c.337-.01.44-.021.519-.055a.858.858 0 0 0 .365-.403.707.707 0 0 0-.38-.869l-.131-.061-1.405-.007-1.406-.007-.001-.296c-.001-.583-.056-.889-.222-1.234A2.054 2.054 0 0 0 8.925.637l-.21-.065L7.058.568C5.709.564 5.374.569 5.253.596m3.19 1.365a.65.65 0 0 1 .393.212c.136.143.156.222.166.668l.009.402H4.993v-.357c0-.423.03-.555.159-.697a.643.643 0 0 1 .384-.226c.177-.03 2.726-.031 2.907-.002m2.582 7.127c0 4.305-.001 4.437-.044 4.549a.704.704 0 0 1-.347.366l-.122.055H3.488l-.116-.053a.642.642 0 0 1-.384-.484c-.027-.151-.037-8.834-.009-8.862.009-.009 1.822-.013 4.031-.01l4.015.006v4.433M5.5 6.651a.737.737 0 0 0-.497.432c-.043.11-.045.207-.045 2.274 0 2.445-.012 2.281.192 2.499.33.353.914.256 1.132-.187l.053-.107v-4.41l-.05-.109a.809.809 0 0 0-.342-.343.788.788 0 0 0-.443-.049m2.698-.001a.708.708 0 0 0-.497.434c-.048.129-.049.151-.042 2.304l.006 2.174.053.107c.218.443.802.54 1.132.187.204-.218.192-.054.192-2.499 0-2.072-.002-2.163-.045-2.275a.722.722 0 0 0-.799-.432"
            fillRule="evenodd"
         />{' '}
      </svg>
   );
};

export { DeleteIcon };