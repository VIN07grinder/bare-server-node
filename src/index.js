const bare = require('bare-server-node');
const port = process.env.PORT || 8080;
bare.listen(port, () => {
  console.log(`Bare server running on port ${port}`);
});
