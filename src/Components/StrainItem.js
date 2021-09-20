import StarRating from "./StarRating";

function StrainItem({ strain, onUpdateStrain, onDeleteStrain }) {
  const { id, image, name, description, flavors, rating } = strain;

  function handleUpdateRating(pct) {
    const newRating = pct * 5;
    fetch(`/strains/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: newRating }),
    })
      .then((r) => r.json())
      .then(onUpdateStrain);
  }

  function handleDeleteStrain() {
    fetch(`/strains/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteStrain(strain);
      }
    });
  }

  return (
    <div className="strain-item card">
      <img src={image} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          Flavors: <em>{flavors}</em>
        </p>
        <div>
          Rating:{" "}
          <StarRating percentage={rating / 5} onClick={handleUpdateRating} />
        </div>
        <p>
          <button onClick={handleDeleteStrain}>Delete Strain</button>
        </p>
      </div>
    </div>
  );
}

export default StrainItem;
