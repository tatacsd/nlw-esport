import express from 'express'; // new ECMAScript module syntax

const app = express();
app.get('/ads', (req, res) => {
  console.log('ads');
  return res.json([
    { id: 1, title: 'Ad 1' },
    { id: 2, title: 'Ad 2' },
    { id: 3, title: 'Ad 3' },
    { id: 4, title: 'Ad 4' },
  ]);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
