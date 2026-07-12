import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({existingToys, donateToy, handleToyLikes}) {

  return (
    <div id="toy-collection">
      {existingToys.map(toy => 
        <ToyCard
          key={toy.id}
          {...toy}
          donateToy={donateToy}
          handleToyLikes={handleToyLikes}
        />
      )}
    </div>
  );
}

export default ToyContainer;
