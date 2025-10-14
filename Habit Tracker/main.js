
  const GetTasks = document.getElementById("GetTasks");
  const addHabit = document.getElementById("addHabits");
  const myLists = document.getElementById("myLists");

  let habits = JSON.parse(localStorage.getItem("habits")) || [];

  function saveHabits() {
    localStorage.setItem("habits", JSON.stringify(habits));
  }

  function renderHabits() {
    myLists.innerHTML = "";
    habits.forEach((habit, index) => {
      const li = document.createElement("li");
      li.className =
        "flex justify-between bg-white px-2 rounded shadow w-[450px] text-left py-3 mt-3 relative";
      li.innerHTML = `
        <span>
          <input type="checkbox" class="checklist" ${habit.completed ? "checked" : ""}>
          <span class="taskText ${habit.completed ? 'line-through text-gray-400' : ''}">${habit.text}</span>
          <button class="deleteBtn text-red-600 absolute right-[2%]">❌</button>
        </span>
      `;

      const checkbox = li.querySelector(".checklist");
      const taskText = li.querySelector(".taskText");
      const deleteBtn = li.querySelector(".deleteBtn");

      checkbox.addEventListener("change", () => {
        habit.completed = checkbox.checked;
        if (habit.completed) {
          taskText.classList.add("line-through", "text-gray-400");
        } else {
          taskText.classList.remove("line-through", "text-gray-400");
        }
        saveHabits();
      });
      deleteBtn.addEventListener("click", () => {
        habits.splice(index, 1);
        saveHabits();
        renderHabits();
      });
      myLists.appendChild(li);
    });
  }
  addHabit.addEventListener("click", () => {
    const task = GetTasks.value.trim();
    if (task === "") return;
    habits.push({ text: task, completed: false });
    saveHabits();
    renderHabits();
    GetTasks.value = "";
  });
  renderHabits();
