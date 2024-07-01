import { MainPopularPlayList } from "../../../../assets/data/MainPopularPlayList";
import PlayListCard from "../../../Shared/PlayListCard/PlayListCard";

const MostPopularPlayList = () => {
  return (
    <section className="adBg flex flex-col justify-between w-full mt-4">
      <div className="flex justify-between w-full items-center">
        <h2 className="capitalize font-medium text-2xl">
          most popular playlist
        </h2>
        <span className="capitalize font-normal text-sm text-playerColor">
          see more
        </span>
      </div>
      <div className="flex w-full items-center mt-4 gap-3">
        {MainPopularPlayList &&
          MainPopularPlayList.map((playlists, index) => {
            return (
              <div key={index}>
                <PlayListCard
                  cardLink={playlists.playListRoute}
                  imageUrl={playlists.playListImage}
                  imageAlt={playlists.playListName}
                  cardTitle={playlists.playListName}
                  cardDescription={playlists.playListDescription}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default MostPopularPlayList;
