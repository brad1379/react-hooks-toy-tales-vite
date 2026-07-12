import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, donateToy}) {

  return (
    <div id="toy-collection">
      {toys.map(toy => 
        <ToyCard
          key={toy.id}
          {...toy}
          donateToy={donateToy}
        />
      )}
    </div>
  );
}

export default ToyContainer;
