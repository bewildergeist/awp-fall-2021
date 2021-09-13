const functions = require("./functional");

// Don't try to fix these tests - fix the code that they are testing!

describe("Test of Functions", () => {
  it("should remove bad words", () => {
    const result = functions.removeBadWords("This is some crap");
    expect(result).toBe("This is some");
  });

  it("should replace bad words", () => {
    const result = functions.replaceBadWords("This is some crap");
    expect(result).toBe("This is some cake");
  });

  it("should create a <ul></ul> html list", () => {
    const result = functions.createHtmlUl(["Apple", "Banana", "Orange"]);
    expect(result).toMatch(/^<ul>/); // Matches beginning
    expect(result).toMatch(/<\/ul>$/); // Matches end
  });

  it("should create html list with <li> inside", () => {
    const result = functions.createHtmlUl(["Apple", "Banana", "Orange"]);
    expect(result).toMatch(/<li>/); // Must contain <li>
  });

  it("should create html list with </li> inside", () => {
    const result = functions.createHtmlUl(["Apple", "Banana", "Orange"]);
    expect(result).toMatch(/<\/li>/); // Must contain </li>
  });

  it("should create array of tasks, all not done", () => {
    const result = functions.createTasksFromStringArray([
      "Do stuff",
      "Return books",
      "Cook dinner",
    ]);
    expect(result).toEqual([
      { task: "Do stuff", done: false },
      { task: "Return books", done: false },
      { task: "Cook dinner", done: false },
    ]);
  });

  it("should transform tasks to html", () => {
    const tasks = [
      { task: "Do laundry", done: false },
      { task: "Clean bedroom", done: true },
      { task: "Bake cake", done: true },
    ];
    const result = functions.transformTasksToHtml(tasks);

    expect(result.replace(/(\r\n|\n|\r)/gm, "")).toEqual(
      "<ul><li>Do laundry</li><li>Clean bedroom</li><li>Bake cake</li></ul>"
    );
  });

  it("should count done tasks", () => {
    const tasks = [
      { task: "Do laundry", done: false },
      { task: "Clean bedroom", done: true },
      { task: "Bake cake", done: true },
    ];
    const result = functions.countDoneTasks(tasks);
    expect(result).toBe(2);
  });

  it("should get not done tasks", () => {
    const tasks = [
      { task: "Do laundry", done: false },
      { task: "Clean bedroom", done: true },
      { task: "Bake cake", done: true },
    ];
    const result = functions.getUndoneTasks(tasks);
    expect(result[0]).toEqual({ task: "Do laundry", done: false });
  });

  it("should capitalize long words", () => {
    const result = functions.capitalizeLongWords("welcome to jurrasic park");
    expect(result).toEqual("Welcome to Jurrasic Park");
  });

  it("should count average length of words", () => {
    const result = functions.averageLengthOfWords("welcome to jurrasic park");
    expect(result).toBeCloseTo(5.25);
  });

  it("should summarize tasks", () => {
    const tasks = [
      { task: "Do laundry", done: false },
      { task: "Clean bedroom", done: true },
      { task: "Bake cake", done: true },
    ];
    const result = functions.summarizeTasks(tasks);
    expect(result).toEqual({ done: 2, notDone: 1 });
  });
});
