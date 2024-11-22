import { ComponentPropsWithoutRef, ReactNode } from "react";

type FormGroup = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"div">

export default function FormGroup({children, ...props}: {children: ReactNode}) {
  return (
    <div {...props}>{children}</div>
  );
}