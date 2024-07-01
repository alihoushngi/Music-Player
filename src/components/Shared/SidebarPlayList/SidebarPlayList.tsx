const SidebarPlayList = () => {
  return (
    <section className="mt-8">
      {/* play list head */}
      <div className="flex justify-between items-center">
        <span className="text-sm">Playlist</span>
        <img
          src="/images/Sidebar/AddPlayList.png"
          alt="sidebar Icon"
          width={25}
          className="w-5 h-5"
        />
      </div>
      {/* play list body */}
    </section>
  );
};

export default SidebarPlayList;
