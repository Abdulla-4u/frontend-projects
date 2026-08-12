import { useEffect} from "react";
import Masonry from "react-masonry-css";
import ImageCard from "../components/ImageCard";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../actions/mediaActions";
import ShimmerCard from "../components/shimmer-loading-ui/ShimmerCard";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { pinRemovedToast, pinSavedToast } from "../ui/toast/toastPresets";
import { handleSaveClick } from "../store/features/BoardSlice";

const breakpointColumnsObj = {
  default: 5,
  1280: 4,
  1024: 3,
  640: 2,
};

const Home = () => {
  const dispatch = useDispatch();
  const { photos, isLoading, hasMore } = useSelector(
    (state) => state.media
  );

  const { lastAction } = useSelector((state) => state.board);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

   const loadMore = () => {
    dispatch(getPhotos());
  };

  const loadMoreRef = useInfiniteScroll({
    onLoadMore: loadMore,
    hasMore,
    isLoading,
  });

  const isInitialLoading = isLoading && photos.length === 0;
  const isFetchingMore = isLoading && photos.length > 0;

  useEffect(() => {
    if (!lastAction) return;
  
    if (lastAction.type === "SAVED") {
      pinSavedToast({
        photo: lastAction.photo,
        onUndo: () => dispatch(handleSaveClick(lastAction.photo)),
      });
    }

    // if (lastAction.type === "SAVED_TO_BOARD") {
    //   pinSavedToBoardToast({
    //     photo: lastAction.photo,
    //   });
    // }
  
    if (lastAction.type === "REMOVED") {
      pinRemovedToast({
        photo: lastAction.photo,
      });
    }




  }, [lastAction]);
  
  return (
    <div className="p-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {isInitialLoading &&
          Array.from({ length: 20 }).map((_, i) => (
            <ShimmerCard key={`init-${i}`} />
          ))}

        {photos.map((photo) => (
          <ImageCard key={photo.id} photo={photo} />
        ))}

        {isFetchingMore &&
          Array.from({ length: 6 }).map((_, i) => (
            <ShimmerCard key={`more-${i}`} />
          ))}

      </Masonry>

         <div ref={loadMoreRef} className="h-1" />
    </div>
  );
};

export default Home;
