import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SkillTest from "./pages/SkillTest";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-gray-700">
      {/* Navbar at the top */}
      <Navbar />

      <div className="flex flex-1 sticky top-0">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content section */}
        <main className="w-4/5 lg:p-6">
          <SkillTest />
        </main>
      </div>
    </div>
  );
}


