export const formatTaskList = (tasks) => {
  let arr = [];
  tasks.forEach((item) => {
    if (item.status === "DONE") {
      arr.push(`\u2705 ${item.id} ${item.title} ${item.status} `)
    } else if (item.status === "IN_PROGRESS") {
      arr.push(`\u274c ${item.id} ${item.title} ${item.status} `)
    } else {
      return
    };
  })
  return arr;
}