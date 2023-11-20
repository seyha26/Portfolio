import { ReactNode } from "react";
const Side = ({ children }: { children: ReactNode }) => {
  return <div className="w-[100%]">{children}</div>;
};

export default Side;
