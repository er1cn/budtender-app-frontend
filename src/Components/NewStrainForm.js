import React, {useState} from 'react'

function NewStrainForm({ addStrain }) {
  const [formState, setFormState] = useState({
    name: "",
    image: "",
    description: "",
    flavors: "",
  });

  function handleChange(event) {
    const userInput = event.target.value;
    const fieldName = event.target.name;
    setFormState({
      ...formState,
      [fieldName]: userInput,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const strain = {
      name: formState.name,
      image: formState.image,
      description: formState.description,
      flavors: formState.flavors,
    };
    addStrain(strain);
  }

  return (
    <div className="new-strain-form">
      <h2 className="strain-form-heading">Add a Strain</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formState.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formState.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Flavors:
          <input
            type="text"
            name="flavors"
            value={formState.flavors}
            onChange={handleChange}
          />
        </label>
        <button type="submit" onSubmit={handleSubmit}>
          Add Strain
        </button>
      </form>
    </div>
  );
}

export default NewStrainForm;