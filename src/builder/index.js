import fs from 'fs'; 

export const builder = async (selector, fileName) => {
  // fs.unlink(`${ fileName }.css`, (err) => {
  //   if(err) {
  //     console.error(err);
  //     return;
  //   }
    const writer = fs.createWriteStream(`${ fileName }.css`, {
      flags: 'a'
    });
    writer.write(`${ selector }\n`);
  // });
} 