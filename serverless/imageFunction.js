'use strict';

module.exports.handle = async (event) => {
  let response;
  await event.Records.forEach((record) => {
    const filename = record.s3.object.key;
    const filesize = record.s3.object.size;
    response = `new .png object has been created: ${filename} (${filesize} bytes)`;
    console.log(response);
  });
  return response;
};