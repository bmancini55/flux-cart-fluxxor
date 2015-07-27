

var CartClient = {
  load: function(success, failure) {
    success({
      'STK000001': { id: 'STK000001', title: 'BATMAN #1', price: 3.99 },
      'STK000002': { id: 'STK000002', title: 'IRON MAN #42', price: 3.99 },
      'STK000003': { id: 'STK000003', title: 'HULK BUSTER STATUE', price: 89.99 },
      'STK000004': { id: 'STK000004', title: 'SAGA TP #1', price: 14.99 }
    });
  }
};

module.exports = CartClient;