import { Outlet } from "react-router";

const PageLayout = () => {
  return (
    <main className="border border-red-500 !p-4 w-full min-h-svh">
      <header>header links here</header>
      <main>
        <Outlet />
      </main>
    </main>
  );
};

export default PageLayout;
