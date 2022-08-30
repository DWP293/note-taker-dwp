
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// URL 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// public folder
app.use(express.static('public'));

// apiRoutes
app.use('/api', routes);
//app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});