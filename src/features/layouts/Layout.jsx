import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="grid gap-y-8 grid-rows-[auto_1fr_auto] min-h-dvh">
      <Header />
      <main className="place-self-start">
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}
