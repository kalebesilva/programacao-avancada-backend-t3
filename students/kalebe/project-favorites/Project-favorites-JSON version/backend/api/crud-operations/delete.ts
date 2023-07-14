import FileSystem from "fs";
import * as path from "path";
import UrlItem from "../class/UrlItem";

const jsonFilePath = path.join(__dirname, "..", "urls.json");
const fileContents = FileSystem.readFileSync(jsonFilePath, "utf8");
const myJsonData = JSON.parse(fileContents);
let savedElements = new Array();

function deleteById(id: number): boolean {
  let working = true;
  console.log(jsonFilePath);
  try {
    FileSystem.writeFile(jsonFilePath, getFiltedJson(id), (err) => {
      if (err) {
        throw new Error("err: " + err);
      }
    });

    return working;
  } catch (err) {
    throw err;
  }
}
function getFiltedJson(id: number): string {
  console.log("before filter: " + myJsonData);
  myJsonData.forEach((element: UrlItem) => {
    if (element.id != id) {
      savedElements.push(element);
    }
  });

  console.log(savedElements);
  return JSON.stringify(savedElements, null, 2);
}

export default {
  delete: deleteById,
};
