module.exports = function(Magazine) {
  Magazine.beforeCreate = function(next, model) {
    console.log('> Magazine.beforeCreate triggered');

    var coffeeShopService = Magazine.app.dataSources.CoffeeShopService;

    coffeeShopService.find(function(err, response, context) {
      if (err) throw err; //error making request
      if (response.error) {
        next('> response error: ' + response.error.stack);
      }
      model.coffeeShops = response;
      console.log('> coffee shops fetched successfully from remote server');
      //verify via `curl localhost:3000/api/Magazines`
      next();
    });
  };
};
