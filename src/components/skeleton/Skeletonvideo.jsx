import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Skeletonvideo = () => {
  return (
    <div style={{ margin: "1rem 0", width: "100%" }}>
      <SkeletonTheme color="#343a40" highlightColor="#3c4147">
        <Skeleton height={180} />
        <div>
          <Skeleton
            style={{ margin: "0.5rem" }}
            circle
            height={40}
            width={40}
          />
          <Skeleton height={30} width="75%" />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default Skeletonvideo;
