import fs from 'fs'; 

export const builder = async (selector, filename) => {
  fs.unlink(`${ filename }.css`, (err) => {
    const writer = fs.createWriteStream(`${ filename }.css`, {
      flags: 'a'
    });
    writer.write(`${ selector }\n`);
  });
} 