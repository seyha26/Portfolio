interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Contianer = ({ children, className }: ContainerProps) => {
  return (
    <div className={`w-[89%] mx-auto max-w-[1200px] ${className}`}>
      {children}
    </div>
  );
};

export default Contianer;
