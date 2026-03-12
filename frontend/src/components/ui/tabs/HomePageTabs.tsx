type Filter = "all" | "active" | "completed";

interface HomePageTabsProps {
  activeTab: Filter;
  setActiveTab: (tab: Filter) => void;
}

const HomePageTabs = ({ activeTab, setActiveTab }: HomePageTabsProps) => {
  return (
    <section className="pt-6 sm:pt-10 flex gap-2 sm:gap-4 flex-wrap">
      <h3
        onClick={() => setActiveTab("all")}
        className={`px-4 py-1.5 rounded-3xl cursor-pointer transition-colors duration-150 ${
          activeTab === "all"
            ? "bg-violet-600 text-white"
            : "bg-white text-[#99A1AF]"
        }`}
      >
        All
      </h3>
      <h3
        onClick={() => setActiveTab("active")}
        className={`px-4 py-1.5 rounded-3xl cursor-pointer transition-colors duration-150 ${
          activeTab === "active"
            ? "bg-violet-600 text-white"
            : "bg-white text-[#99A1AF]"
        }`}
      >
        Active
      </h3>
      <h3
        onClick={() => setActiveTab("completed")}
        className={`px-4 py-1.5 rounded-3xl cursor-pointer transition-colors duration-150 ${
          activeTab === "completed"
            ? "bg-violet-600 text-white"
            : "bg-white text-[#99A1AF]"
        }`}
      >
        Completed
      </h3>
    </section>
  );
};

export default HomePageTabs;
