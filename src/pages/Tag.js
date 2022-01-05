import React, { useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Input from "./Input";
import TagButton from "./TagButton";
import theme from "./theme";

const { color1, color2, color3, color4 } = theme;

export default function Tag({ tagsHandler }) {
  const tagArray = ["finance", "hobbies", "food", "shopping", "bar", "cafes"];

  // States
  const [userTagInput, setUserTagInput] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [showFilteredTags, setShowFilteredTags] = useState(true);

  let filteredTags = tagArray.filter(
    (elem) => elem.startsWith(userTagInput) && !selectedTags.includes(elem)
  );

  // console.log("filtered tags in parent: ", filteredTags);
  // console.log("selected tags in parent: ", selectedTags);

  // Handlers / Functions
  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  const selectedTagClickHandler = (tag) => {
    // setSelectedTags(removeItemOnce(selectedTags, tag));
    const remainingTags = selectedTags.filter((t) => t !== tag);
    setSelectedTags(remainingTags);
    tagsHandler(remainingTags);

    // console.log("filtered tags when clicking on selectedTag", filteredTags);
  };

  const filterTagsHandler = (e) => {
    setUserTagInput(e.target.value);
    // console.log("selected tag inside filter: ", selectedTags);
    filteredTags = tagArray.filter(
      (elem) => elem.startsWith(e.target.value) && !selectedTags.includes(elem)
    );
    return;
  };

  const addTagHandler = (e, elem) => {
    e.preventDefault();
    const newFilteredTags = removeItemOnce(filteredTags, elem);
    console.log("tags to remove: ", newFilteredTags);
    filteredTags = newFilteredTags;
    const tags = selectedTags.concat(elem);
    setSelectedTags(tags);
    tagsHandler(tags);
    setUserTagInput("");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-center items-center">
        <Input
          placeholder="Enter Tags(if any)"
          onChangeHandler={filterTagsHandler}
          value={userTagInput}
        />
        <BsFillArrowDownCircleFill
          className="text-orange-900 cursor-pointer"
          style={{ fontSize: "30px", color: color1, fontWeight: "bold" }}
          onClick={() => setShowFilteredTags((previousValue) => !previousValue)}
        />
      </div>
      {/* Selected Tags */}
      <div className="mb-2 flex flex-wrap">
        {selectedTags.map((tag) => (
          <span
            className="bg-green-400 text-white mr-2 mb-2 text-center rounded-lg px-2 py-1"
            onClick={() => selectedTagClickHandler(tag)}
            style={{ cursor: "pointer", minWidth: "100px" }}
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Filtered Tags */}
      {showFilteredTags === true && (
        <div className="mb-3 text-center">
          {filteredTags.map((elem) => (
            // <button
            //   className="bg-gray-200 mr-2 rounded-lg px-2 py-1 mb-2"
            //   onClick={(e) => {
            //     addTagHandler(e, elem);
            //   }}
            // >
            //   {elem}
            // </button>
            <TagButton
              tagName={elem}
              textColor={""}
              backgroundColor={"bg-gray-100"}
              onClickHandler={(e) => {
                addTagHandler(e, elem);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
