import React, { useRef, useState, useEffect, useCallback, lazy, Suspense } from "react";
import starDate from "./data.json";
import { v4 as uuid } from "uuid";
import StarComponent from "./Star";
import NewBtn from "./NewBtn";
import Info from "./info";
import "./App.css";
import useComponentSize from "@rehooks/component-size";

const NewStarModal = lazy(() => import("./components/modal/NewStarModal"));

const ModelLoader = () => <div className="model-loader">Loading...</div>;

function positionStars(starsObj, width, height) {
  const updated = {};
  Object.values(starsObj).forEach((star) => {
    updated[star.id] = {
      ...star,
      position: {
        left: width * 0.5,
        top: height * 0.5,
      },
    };
  });
  return updated;
}

function ParseData() {
  const stars = {};
  starDate.forEach((task) => {
    stars[task.id] = { ...task, offset: task.offset || { x: 0, y: 0 } };
  });
  return stars;
}

function addStarToObj(starsObj, age) {
  const id = uuid();
  return {
    ...starsObj,
    [id]: {
      id,
      age,
      offset: { x: 0, y: 0 },
      position: { left: 100, top: 100 },
    },
  };
}

function App() {
  const [stars, setstars] = useState({});
  const [dragStarInfo, setDragStarInfo] = useState(null);  
  const [isAddOpen, setIsAddOpen] = useState(false);
  const boardRef = useRef(null);
  const boardSize = useComponentSize(boardRef);
  const { height, width } = boardSize;

  const showDialog = useCallback(() => setIsAddOpen(true), []);
  const hideDialog = useCallback(() => setIsAddOpen(false), []);

  useEffect(() => {
    if (height && width) {
      const parsedStars = ParseData();
      const placed = positionStars(parsedStars, width, height);
      setstars({ ...placed });
    }
  }, [height, width]);

  const handleDelete = useCallback(
    (star) => {
      setstars((prev) => {
        const temp = { ...prev };
        delete temp[star.id];
        return { ...temp };
      });
    },
    [setstars]
  );

  const handleAddStar = useCallback(
    (age) => {
      setstars((prev) => {
        const updated = addStarToObj(prev, age);
        const placed = { ...updated };
        const newId = Object.keys(updated).find((k) => !prev[k]);
        if (newId && width && height) {
          placed[newId] = {
            ...placed[newId],
            position: { left: width * 0.5 + 20, top: height * 0.5 + 20 },
          };
        }
        return placed;
      });
    },
    [width, height]
  );

  const StarEls = Object.values(stars).map((star) => (
    <StarComponent
      key={star.id}
      star={star}
      boardSize={boardSize}
      onDragStart={(dragOffset) => setDragStarInfo({ starId: star.id, dragOffset })}
      onDragEnd={() => setDragStarInfo(null)}
      onDoubleClick={() => handleDelete(star)}
    />
  ));

  return (
    <>
      <div
        className="App"
        ref={boardRef}
        onMouseMove={(ev) => {
          if (!dragStarInfo) return;

          const { starId, dragOffset } = dragStarInfo;
          const newLeft = ev.pageX - dragOffset.x;
          const newTop = ev.pageY - dragOffset.y;

          setstars((prev) => {
            const prevStar = prev[starId];
            if (!prevStar) return prev;
            const updatedStar = {
              ...prevStar,
              position: { left: newLeft, top: newTop },
            };
            return { ...prev, [starId]: updatedStar };
          });
        }}
      >
        {StarEls}
        <Info stars={stars} />
        <NewBtn onClick={showDialog} />
        {isAddOpen && (
          <Suspense fallback={<ModelLoader />}>
            <NewStarModal
              isOpen={isAddOpen}
              onClose={hideDialog}
              onAdd={(age) => {
                handleAddStar(age);
                hideDialog();
              }}
            />
          </Suspense>
        )}
      </div>
    </>
  );
}

export default App;
