import { Dashboard } from "./components/Dashboard";
import { SideBar } from "./components/SideBar";

export default function Home() {
  return (
    <main className="flex">
      <SideBar />
      <Dashboard />
    </main>
  );
}
