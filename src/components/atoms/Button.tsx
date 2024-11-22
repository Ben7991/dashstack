import { ComponentPropsWithoutRef } from "react";

export default function Button(props: ComponentPropsWithoutRef<"button">) {
  return (
    <button className="bg-[var(--blue-100)] block text-white py-2 rounded-lg hover:bg-[var(--blue-200)]">{props.children}</button>
  );
}