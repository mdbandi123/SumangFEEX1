// import { appendFile, readFile } from "fs";
// import process from "process";

// export const writeTxtFile = async (fileName, payload) => {
//   const basePath = process.cwd();
//   const filePath = `${basePath}/files/${fileName}`;
//   // const lnPayload = `${payload.isbn} ${payload.title} ${payload.author} ${payload.price} ${payload.qty}`;
//   const jsonPayload = JSON.stringify(payload);
//   await appendFile(filePath, jsonPayload, (err) => {
//     if(!err){
//       console.log("Appended");
//     } else {
//       console.error("Error encountered")
//     }
//   });
// };

// export const readTxtFile  = async (fileName) => {
//   const basePath = process.cwd();
//   const filePath = `${basePath}/files/${fileName}`;

//   await readFile(filePath, (err, data) => {
//     if(!err){
//       return data;
//     } else {
//       console.error("Error encountered")
//     }
//   });
// };