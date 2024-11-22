type AuthHeadingProps = {
  title: string;
  description: string;
}

export default function AuthHeading({title, description}: AuthHeadingProps) {
  return (
    <div className="text-center mb-3 md:mb-6 lg:mb-3 xl:mb-6">
      <h1 className="text-2xl md:text-[2em] mb-2 lg:mb-1 xl:mb-2">{title}</h1>
      <p>{description}</p>
    </div>
  )
}