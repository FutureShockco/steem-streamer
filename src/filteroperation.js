const filter = tx => {
  tx.operations.forEach(op => {
    const [type, payload] = op;
    switch (type) {
      case 'transfer': {
        //TODO
        break;
      }
      default: {
        break;
      }
    }
  });
};
module.exports = {
  filter
};
