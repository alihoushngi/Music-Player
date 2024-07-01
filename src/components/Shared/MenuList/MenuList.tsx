import { routesList } from "../../../routes/routesList";

const MenuList = () => {
  return (
    <section className="mt-10">
      {/* menu head */}
      <div className="flex justify-between items-center">
        <span className="text-sm">Menu</span>
        <img
          src="/images/Sidebar/sidebar.png"
          alt="sidebar Icon"
          width={25}
          className="w-5 h-5"
        />
      </div>
      {/* menu body */}
      <div className="mt-8">
        <ul className="flex flex-col gap-5">
          {routesList.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className="flex gap-2 items-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    width={25}
                    className="w-5 h-5"
                  />
                  <span className="font-medium">{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default MenuList;
