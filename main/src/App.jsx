import { ArrowLeft, ArrowRight } from "lucide-react";
import Activity from "./components/mainpanel/Activity";
import Calender from "./components/rightpanel/Calender";
import General from "./components/sidebar/General";
import Settings from "./components/sidebar/Settings";
import Tools from "./components/sidebar/Tools";
import Logo from "./components/topbar/Logo";
import Profile from "./components/topbar/Profile";
import Search from "./components/topbar/Search";
import Appointment from "./components/rightpanel/Appointment";
import UpcomingSchedule from "./components/rightpanel/UpcomingSchedule";
import BodySelector from "./components/mainpanel/Dashboard/BodySelector";
import Organs from "./components/mainpanel/Dashboard/Organs";

function App() {
  return (
    <div className="rounded-3xl m-3 bg-white min-h-screen flex flex-col xl:flex-row relative">
      {/* Sidebar */}
      <div className="hidden xl:flex flex-col flex-[2] max-h-full bg-blue-50 rounded-l-3xl pt-32 px-4 justify-between">
        <div>
          <General />
          <div className="mt-6">
            <Tools />
          </div>
          <div className="mt-24">
            <Settings />
          </div>
        </div>
      </div>

      {/* Main Panel */}
      <div className="flex-[5] pt-32 px-5 overflow-y-auto">
        <h1 className="font-bold font-sans text-3xl xl:text-xl mb-6">Dashboard</h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="w-full sm:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md bg-blue-50 rounded-xl p-2">
              <BodySelector />
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <Organs />
          </div>
        </div>

        <div className="w-full mb-6">
          <h2 className="font-bold mb-2">Activity</h2>
          <div className="bg-blue-50 rounded-xl p-2">
            <Activity />
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-[5] bg-blue-50 xl:rounded-r-3xl pt-32 px-5 overflow-y-auto">
        <div className="flex justify-between items-center font-sans font-semibold text-xl mb-4">
          <span>October 2021</span>
          <div className="flex gap-2">
            <ArrowLeft size={22} />
            <ArrowRight size={22} />
          </div>
        </div>
        <div className="mb-4">
          <Calender />
        </div>
        <div className="mb-4">
          <Appointment />
        </div>
        <h2 className="font-semibold font-sans text-xl mb-2">The Upcoming Schedule</h2>
        <UpcomingSchedule />
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 rounded-t-3xl z-10 h-20 flex items-center justify-between px-6">
        <div className="flex-[3]">
          <Logo />
        </div>
        <div className="flex-[7]">
          <Search />
        </div>
        <div className="hidden xl:flex flex-[7] justify-end">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;
