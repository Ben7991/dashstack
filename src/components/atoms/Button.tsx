import { ComponentPropsWithoutRef} from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "link";
  relative?: "path" | "route";
} & ComponentPropsWithoutRef<"a">;

export default function Button(props: ButtonProps | AnchorProps) {
  if (props.el === "link") {
    const relative = props.relative ?? "route";

    return (
      <Link 
        to={props.href!} {...props}
        relative={relative}
        className="bg-[var(--blue-100)] block text-white py-2 rounded-lg hover:bg-[var(--blue-200)] text-center">{props.children}</Link>)
  }

  return (
    <button className="bg-[var(--blue-100)] block text-white py-2 rounded-lg hover:bg-[var(--blue-200)]">{props.children}</button>
  );
}