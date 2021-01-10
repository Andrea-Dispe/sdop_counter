const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const fs = require('fs');

const sdop7_0Url = path.join(
  path.dirname(__dirname),
  '..',
  '..',
  'sdop',
  'sdop 7.0'
);
const sdop7_1Url = path.join(
  path.dirname(__dirname),
  '..',
  '..',
  'sdop',
  'sdop 7.1'
);

fs.readdir(sdop7_1Url, (err, files) => {
  if (err) console.log(err);
  let counter = 0;
  const filteredImages = files.filter((img) => img.includes('s_'));

  filteredImages.forEach((img) => {
    const seghe = /s_\d+/gi;
    const s_1 = img.match(seghe);
    console.log(s_1)
    var numbers = s_1.match(/\d+/g).map(Number);

    if (s_1 === null) console.log('something is wrong')

  });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:PORT`); // eslint-disable-line no-console
});
