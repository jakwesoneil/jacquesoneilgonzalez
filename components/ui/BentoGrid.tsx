import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        " grid md:auto-rows-[24rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  onClick,
  techstack,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  titleClassName?: string;
  imgClassName?: string;
  onClick?: () => void;
  techstack?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-4 bg-white/[0.1]",
        className
      )}
      data-id={id}
      onClick={onClick}
    >
      {img ? (
        <img
          src={img}
          alt="Tech Image"
          className={cn("w-full h-full object-cover", imgClassName)}
        />
      ) : (
        <>
          {header}
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            {icon}
            <div className={cn("font-sans font-bold", titleClassName)}>
              {title}
            </div>
            <div className="font-sans font-normal text-blue-50 text-xs dark:text-neutral-300">
              {description}
            </div>
          </div>
        </>
      )}
      
      {/* Render the techstack here */}
      {techstack && <div className="mt-1 justify-center items-center">{techstack}</div>}
    </div>
  );
};