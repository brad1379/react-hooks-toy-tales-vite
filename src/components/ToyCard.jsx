import React, {useState} from "react";

function ToyCard({ id, name, image, likes, donateToy }) {

  // handles likes with a patch request to server
  function handleLikes() {
    const updatedLikes = likes + 1;

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({likes: updatedLikes})
    })
    .then(response => {
      if (!response.ok) {throw new Error("failed to update likes")}
      return response.json()
    })
    .catch(error => console.log(error))
  }

  // handles deleting toys with a delete request to server 
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("failed to delete listing")
      }
      donateToy(id)
    })
    .catch(error => console.log("Error:", error.message))
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
