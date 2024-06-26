const AdvertiseSection = () => {
  return (
    <section className="adBg flex flex-col justify-between w-full bg-[#2862a2] px-6 py-7 rounded-[40px] mt-5 relative overflow-hidden">
      <img
        src="/public/images/AdvertiseBg.png"
        alt="advertise background"
        className="absolute bg-contain bg-right-bottom bg-no-repeat top-0 left-0 right-0 opacity-20"
      />
      <h3 className="text-4xl font-semibold">
        Play The Music You Like , Explore songs, <br />
        <span className="text-playerColor inline drop-shadow-lg">
          Listen any time and anywhere
        </span>{" "}
        now its easier
      </h3>
      <span className="mt-5 font-extralight">
        A new experience of listening to music is at your fingertips
      </span>
    </section>
  );
};

export default AdvertiseSection;
