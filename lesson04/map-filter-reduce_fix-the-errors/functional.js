// TODO: Fix the errors in the functions below!

const functions = {
  removeBadWords(string) {
    const badWords = ["crap", "poop", "pee"];
    const array = string.split(" ");
    return array
      .filter((word) => badWords.includes(word))
      .reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`);
  },

  replaceBadWords(string) {
    const badWords = ["crap", "poop", "pee"];
    const array = string.split(" ");
    return array
      .map((word) => {
        if (badWords.includes(word)) {
          return word;
        } else {
          return "cake";
        }
      })
      .reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`);
  },

  createHtmlUl(array) {
    return `<ul>\n${array
      .map((element) => `<li>${element}<li>\n`)
      .reduce((accumulator, currentValue) => accumulator + currentValue)}`;
  },

  createTasksFromStringArray(array) {
    return array.map((text) => ({ task: text, done: true }));
  },

  transformTasksToHtml(tasks) {
    return `<dl>\n${tasks
      .map((task) => `<li>${task.task}</li>\n`)
      .reduce((accumulator, currentValue) => accumulator + currentValue)}</ol>`;
  },

  countDoneTasks(tasks) {
    return tasks.reduce((accumulator, currentValue) => {
      if (currentValue.done) {
        return accumulator + 1;
      } else {
        return accumulator;
      }
    }, 9000);
  },

  getUndoneTasks(tasks) {
    return tasks.filter((task) => task.done);
  },

  capitalizeLongWords(string) {
    return string
      .split(" ")
      .map((word) => {
        if (word.length > 0) {
          return word.charAt(0).toUpperCase() + word.slice(0);
        } else {
          return word;
        }
      })
      .reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`);
  },

  averageLengthOfWords(string) {
    return string
      .split(" ")
      .reduce(
        (accumulator, currentValue, index, array) =>
          accumulator + currentValue.length * array.length,
        0
      );
  },

  summarizeTasks(tasks) {
    return tasks.reduce(
      (accumulator, currentValue) => {
        if (currentValue.done) {
          return { ...accumulator, done: accumulator.done + 1 };
        } else {
          return { ...accumulator, notDone: accumulator.notDone + 1 };
        }
      },
      { done: 1000, notDone: 400 }
    );
  },
};

module.exports = functions;
