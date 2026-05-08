function compareObjects(obj1, obj2) {
  let changes = {};

  for (let key in obj2) {
    // Check if value is object and not null
    if (
      typeof obj2[key] === "object" &&
      obj2[key] !== null &&
      typeof obj1[key] === "object" &&
      obj1[key] !== null
    ) {
      let nestedChanges = compareObjects(obj1[key], obj2[key]);

      // Add only if changes exist
      if (Object.keys(nestedChanges).length > 0) {
        changes[key] = nestedChanges;
      }
    } 
    // Compare primitive values
    else if (obj1[key] !== obj2[key]) {
      changes[key] = obj2[key];
    }
  }

  return changes;
}

// Example
const oldObj = {
  name: "Prasanth",
  age: 22,
  address: {
    city: "Hyderabad",
    pincode: 500001
  }
};

const newObj = {
  name: "Prasanth",
  age: 23,
  address: {
    city: "Bangalore",
    pincode: 500001
  }
};

console.log(compareObjects(oldObj, newObj));



 const input = document.getElementById("itemInput");
    const addBtn = document.getElementById("addBtn");
    const list = document.getElementById("list");

    // Add Item
    addBtn.addEventListener("click", () => {
      const value = input.value.trim();

      if (value === "") return;

      const li = document.createElement("li");

      li.innerHTML = `
        <span>${value}</span>
        <button class="remove-btn">Remove</button>
      `;

      list.appendChild(li);

      input.value = "";
    });

    // Single Parent Event Listener (Event Delegation)
    list.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove-btn")) {
        e.target.parentElement.remove();
      }
    });