import React, { useState } from "react";

export default function Tag() {
  const tagArray = ["finance", "hobbies", "whatever"];
  const [filteredTags, setFilteredTags] = useState([]);
  const [userTagInput, setUserTagInput] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  console.log("selected: ", selectedTags, "filter: ", filteredTags);
  const filterTagsHandler = (e) => {
    setUserTagInput(e.target.value);
    console.log("selected tag inside filter: ", selectedTags);
    setFilteredTags(
      tagArray.filter(
        (elem) =>
          elem.startsWith(e.target.value) && !selectedTags.includes(elem)
      )
    );
    return;
  };

  const addTagHandler = (e, elem) => {
    e.preventDefault();
    setFilteredTags(removeItemOnce(filteredTags, elem));
    setSelectedTags(selectedTags.concat(elem));
  };
  return (
    <div>
      <input
        type="text"
        className="bg-gray-100 rounded-lg py-3 px-4 my-4"
        placeholder="Enter Tags(if any)"
        onChange={filterTagsHandler}
        value={userTagInput}
      />
      {/* Selected Tags */}
      <div>
        {selectedTags.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
      <div>
        {filteredTags.map((elem) => (
          <button
            className="bg-white mr-2 rounded-lg px-1 py-1"
            onClick={(e) => {
              addTagHandler(e, elem);
            }}
          >
            {elem}
          </button>
        ))}
      </div>
    </div>
  );
}
