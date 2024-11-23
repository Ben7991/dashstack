import { ComponentPropsWithoutRef } from "react";

export default function Label(props: ComponentPropsWithoutRef<"label">) {
  return (
    <label 
      {...props} 
      className="inline-block mb-1 md:mb-2 lg:mb-1 xl:mb-2 dark:text-gray-400">
      {props.children}
    </label>
  );
}