import Button from "../components/atoms/Button";
import notFound from "../assets/img/404.png";

export default function NotFound() {
  return (
    <main 
    className="w-full h-screen flex items-center justify-center bg-[url('/src/assets/img/auth-bg.png')] bg-cover bg-[var(--blue-100)]">
      <section className="w-[90%] bg-white rounded-xl md:rounded-[24px] p-6 md:basis-2/3 md:p-[55px] lg:py-8 xl:py-16 xl:px-[50px] lg:basis-[500px]">
        <img src={notFound} alt="404 error image" />
        <h1 className="text-2xl md:text-[2em] mt-10 md:mt-16 mb-4 md:mb-6 lg:mb-4 xl:mb-6 text-center">Looks like you're lost...</h1>
        <div className="flex flex-col">
          <Button el="link" relative="path" href="..">Go Back Home</Button>
        </div>
      </section>
    </main>
  );
}