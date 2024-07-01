const SidebarGeneralList = () => {
  return (
    <section className="mt-8">
      <ul className="flex flex-col gap-5">
        <li>
          <a href="/setting" className="flex gap-2 items-center">
            <img
              src="/images/Sidebar/setting.png"
              alt="Setting icon"
              width={25}
              className="w-5 h-5"
            />
            <span className="font-medium">Setting</span>
          </a>
        </li>
        <li>
          <a href="/" className="flex gap-2 items-center">
            <img
              src="/images/Sidebar/logout.png"
              alt="Logout icon"
              width={25}
              className="w-5 h-5"
            />
            <span className="font-medium text-[#cd343b]">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SidebarGeneralList;
