import React, {useState} from 'react'
import { BASE_URL } from '../Constraints/routes';

function NewStrainForm(onAddStrain) {
    const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [flavors, setFlavors] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          image: image,
          description: description,
          flavors: flavors
        }),
      })
        .then((r) => r.json())
        .then((newStrain) => onAddStrain(newStrain));
    }
  

    return (
        <div className="new-strain-form">
      <h2>New Strain</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Strain name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="text"
            name="description"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            name="flavors"
            placeholder="flavors"
            value={flavors}
            onChange={(e) => setFlavors(e.target.value)}
          />
        <button type="submit">Add Strain</button>
      </form>
    </div>
  );
}

export default NewStrainForm
