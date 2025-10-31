import React, { useState, useMemo } from "react";

const Info = React.memo(
  function Info(props) {
     
 
    const Stars = Object.values(props.stars || {});

    const distances = useMemo(() => {
      const distancesCalc = { max: 0, min: Infinity };

      Stars.forEach((currentStar) => {
        Stars.forEach((compareStar) => {
          if (compareStar === currentStar) return;

          distancesCalc.max = Math.max(
            distancesCalc.max,
            Number(currentStar.age) || 0,
            Number(compareStar.age) || 0
          );

          distancesCalc.min = Math.min(
            distancesCalc.min,
            Number(currentStar.age) || Infinity,
            Number(compareStar.age) || Infinity
          );
        });
      });
 
      if (Stars.length === 0) {
        distancesCalc.min = 0;
        distancesCalc.max = 0;
      } else if (Stars.length === 1) {
        const only = Number(Stars[0].age) || 0;
        distancesCalc.min = only;
        distancesCalc.max = only;
      } else if (!isFinite(distancesCalc.min)) {
        distancesCalc.min = 0;
      }

      return distancesCalc;
    }, [Stars.length]);  

    

    return (
      <div className="board">
        <div>You have {Object.keys(props.stars || {}).length} Star!</div>
        <div>Age of the oldest star: {distances.max}</div>
        <div>Age of the youngest star: {distances.min}</div>
      </div>
    );
  }
);

const comparision = (p1, p2) => {
  if (!p1 || !p2) return false;
  const s1 = p1.stars || {};
  const s2 = p2.stars || {};
  return Object.keys(s1).length === Object.keys(s2).length;
};

export default React.memo(Info, comparision);
