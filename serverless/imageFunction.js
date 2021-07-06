'use strict';

module.exports.handle = (event) => {
  event.Records.forEach((record) => {
    const filename = record.s3.object.key;
    const filesize = record.s3.object.size;
    console.log(`new .png object has been created: ${filename} (${filesize} bytes)`);
  });
};