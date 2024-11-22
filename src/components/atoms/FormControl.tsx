import { ComponentPropsWithoutRef } from "react";

export default function FormControl(props: ComponentPropsWithoutRef<"input">) {
  return (
    <input {...props} className="block w-full outline-none text-black rounded-lg border 'border-[var(--gray-200)]'} bg-[var(--gray-100)] py-2 px-4"/>
  );
}