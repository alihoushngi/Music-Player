import { ReactComponent } from "../../../types/types";
import { IPlayListCard } from "./PlayListCardTypes";

const PlayListCard: ReactComponent<IPlayListCard> = (props) => {
  const { cardLink, imageUrl, imageAlt, cardTitle, cardDescription } = props;
  return (
    <a href={cardLink} className="relative w-[30%]">
      <img
        className="rounded-3xl max-w-full max-h-[300px] bg-cover"
        src={imageUrl}
        alt={imageAlt}
      />
      <div className="absolute bottom-0 left-0 right-0 px-2 py-6 capitalize glassmorphism">
        <h3 className="font-bold text-xl leading-none">{cardTitle}</h3>
        <span className="text-xs">{cardDescription}</span>
      </div>
    </a>
  );
};

export default PlayListCard;
