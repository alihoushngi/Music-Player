const UserProfile = () => {
  return (
    <section className="flex w-full items-start gap-2 justify-end">
      <img
        src="/images/Sidebar/notification.png"
        alt="notification"
        width={35}
        className="bg-[#263240] p-2 rounded-full"
      />
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <img
            src="/images/Sidebar/profile.png"
            alt="profile photo"
            width={35}
            className="rounded-full"
          />
          <span className="capitalize text-sm font-extralight">
            ali houshangi
          </span>
        </div>
        <div>
          <img
            src="/images/Sidebar/down.png"
            alt="open drop box icon"
            width={15}
          />
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
