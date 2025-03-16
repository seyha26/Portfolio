interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Contianer = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`w-[89%] md:py-30 mx-auto py-32 max-w-[1200px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Contianer;
