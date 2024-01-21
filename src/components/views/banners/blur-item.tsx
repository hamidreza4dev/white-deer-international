import { cn } from '~/utils';

export type BlurItemProps = React.PropsWithChildren<
  React.ComponentProps<'div'>
>;

const BlurItem = ({ children, className, ...props }: BlurItemProps) => {
  return (
    <div
      className={cn(
        'flex h-[40px] items-center rounded-full bg-black/15 px-6 py-4 text-center text-white backdrop-blur-2xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default BlurItem;