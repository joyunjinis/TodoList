// 날짜 업데이트
function updateDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][date.getMonth()];
  const day = date.getDate();
  const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    date.getDay()
  ];

  const dateElement = document.getElementById("date");
  dateElement.innerText = `${weekDay} ${month} ${day} ${year}`;
}

// 페이지 로드 시 즉시 실행
document.addEventListener("DOMContentLoaded", function () {
  updateDate();
  // 1초마다 업데이트
  setInterval(updateDate, 1000);
});

// ... existing code ...

// 할 일 추가 기능
function addTodo() {
  const input = document.getElementById("newTodo");
  const content = input.value.trim();

  if (content) {
    const newTodo = {
      isDone: false,
      content: content,
    };

    // 새로운 할 일을 리스트에 추가
    const listContainer = document.getElementById("mockData");
    const todoElement = document.createElement("div");
    todoElement.className = "list-item";
    todoElement.innerHTML = `
        <input type="checkbox" name="todo" value="${newTodo.id}" />
        <label>${newTodo.content}</label>
        <button onclick="deleteTodo(${newTodo.id})">삭제</button>
        <br />
      `;
    listContainer.appendChild(todoElement);

    // 입력 필드 초기화
    input.value = "";
  }
}

// 할 일 삭제 기능
function deleteTodo(id) {
  const todoElement = document.querySelector(
    `input[value="${id}"]`
  ).parentElement;
  todoElement.remove();
}

// 추가 버튼 이벤트 리스너
document.getElementById("addButton").addEventListener("click", addTodo);

// Enter 키로도 추가 가능
document.getElementById("newTodo").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});
