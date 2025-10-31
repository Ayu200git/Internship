import React from "react";

const StarComponent = (props) => {
  const { star, onDragStart, onDoubleClick, onDragEnd } = props;

  return (
    <div
      className="Star"
      onMouseDown={(ev) => {
        const left = parseFloat(ev.currentTarget.style.left || 0);
        const top = parseFloat(ev.currentTarget.style.top || 0);
        const clickOffset = {
          x: ev.clientX - left,
          y: ev.clientY - top,
        };
        onDragStart(clickOffset);
      }}
      onMouseUp={onDragEnd}
      onDoubleClick={onDoubleClick}
      style={{
        left: star.position?.left ?? 0,
        top: star.position?.top ?? 0,
        position: "absolute",
        userSelect: "none",
        cursor: "grab",
      }}
      key={star.id}
    >
      ⭐{star.age}
    </div>
  );
};

const comparision = (p1, p2) => {
  if (!p1?.star || !p2?.star) return false;

  return (
    p1.star.id === p2.star.id &&
    p1.star.position?.left === p2.star.position?.left &&
    p1.star.position?.top === p2.star.position?.top
  );
};

export default React.memo(StarComponent, comparision);
