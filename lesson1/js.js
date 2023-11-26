document.getElementById("add").onclick = (() => {
    document.getElementById("addForm").style.display = "block";
    document.querySelector("#save").onclick = (() => {
        let title = document.querySelector("#addTitle").value;
        let date = document.querySelector("#addDate").value;
        axios.post("https://localhost:7104/api/Events", {
            "title": `${title}`,
            "start": `${date}`
        }).then((res) => {
            console.log(res);
        })
    })
})
document.getElementById("delete").onclick = (() => {
    document.getElementById("deleteForm").style.display = "block";
    document.querySelector("#deleteEvent").onclick = (() => {
        let id = document.querySelector("#id").value;
        axios.delete(`https://localhost:7104/api/Events/${id}`).then((res) => {
            console.log(res);
        })
    })
})
document.getElementById("updateEvent").onclick = (() => {
    document.getElementById("updateForm").style.display = "block";
    document.querySelector("#update").onclick = (() => {
        let upId = document.querySelector("#idToUpdate").value;
        let title = document.querySelector("#upTitle").value;
        let date = document.querySelector("#upDate").value;
        axios.put(`https://localhost:7104/api/Events/${upId}`, {
            "title": `${title}`,
            "start": `${date}`
        }).then((res) => {
            console.log(res);
        })
    })
})
document.addEventListener("DOMContentLoaded", function () {
    axios.get("https://localhost:7104/api/Events").then((res) => {
      var calendarEl = document.getElementById("calendar");
      var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        events: res.data,
      });
      calendar.render();
    });
  });



