import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main 
    className="w-full h-screen flex items-center justify-center bg-[url('/src/assets/img/auth-bg.png')] bg-cover bg-[var(--blue-100)]">
      <section className="w-[90%] bg-white rounded-xl md:rounded-[24px] p-6 md:basis-2/3 md:px-10 md:py-16 lg:py-8 xl:py-16 lg:basis-[500px]">
        <Outlet />
      </section>
    </main>
  );
}