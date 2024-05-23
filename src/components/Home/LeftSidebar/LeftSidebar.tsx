const LeftSidebar = () => {
  return (
    <aside className="flex flex-col w-1/6 border-r border-lineColor px-5 py-9">
      {/*! --- logo wrapper --- */}
      <section className="flex justify-center items-center">
        <img
          src="/images/logoWithNameRight.png"
          alt="APlayer Logo with text"
          width={150}
          className="text-center"
        />
      </section>
      {/* --- LeftSidebar menu section */}
      <section></section>
      {/* --- LeftSidebar playlist section */}
      <section></section>
      {/* --- LeftSidebar end section */}
      <section></section>
    </aside>
  );
};

export default LeftSidebar;
