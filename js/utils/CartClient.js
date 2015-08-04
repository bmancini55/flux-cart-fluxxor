

var CartClient = {
  load: function(success, failure) {
    success({});
  },

  // temporary placeholder for superset of test items
  getItems: function() {
    return {
      'STK685617': { id: 'STK685617', title: '1602 WITCH HUNTER ANGELA #4', price: 3.99 },
      'STK685618': { id: 'STK685618', title: '1872 #4', price: 3.99 },
      'STK685598': { id: 'STK685598', title: 'AGE OF APOCALYPSE #5', price: 3.99 },
      'STK685856': { id: 'STK685856', title: 'AMAZING SPIDER-MAN #1', price: 5.99 },
      'STK685857': { id: 'STK685857', title: 'ASTONISHING ANT-MAN #1', price: 3.99 },
      'STK685599': { id: 'STK685599', title: 'CAPTAIN AMERICA WHITE #3', price: 3.99 }
    }
  }
};

module.exports = CartClient;