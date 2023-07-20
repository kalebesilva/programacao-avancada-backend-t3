import FileSystem from "fs";
import path from "path";
import UrlItem from "../class/UrlItem";

const jsonFilePath = path.join(__dirname, "..", "urls.json");
const fileContents = FileSystem.readFileSync(jsonFilePath, "utf8");
const myJsonData = JSON.parse(fileContents);
let savedElements = new Array();

function update(id: number, data: UrlItem) {
  let working = true;

  try {
    FileSystem.writeFile(jsonFilePath, getUpdatedRegisters(id, data), (err) => {
      if (err) {
        throw new Error("err: " + err);
      }
    });

    return working;
  } catch (err) {
    throw err;
  }
}

function getUpdatedRegisters(id: number, myData: UrlItem): string {
  myJsonData.forEach((element: UrlItem) => {
    if (element.id === id) {
      element.name = myData.name;
      element.url = myData.url;
    }

    savedElements.push(element);
  });
  return JSON.stringify(savedElements, null, 2);
}

export default {
  update: update,
};
