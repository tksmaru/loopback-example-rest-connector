module.exports = function(Magazine) {
  Magazine.beforeCreate = function(next, model) {
    console.log('> Magazine.beforeCreate triggered');

    var coffeeShopService = Magazine.app.dataSources.CoffeeShopService;

    coffeeShopService.find(function(unknown, response, context) {
      //what is the first arg? its not err because its always null
      //is the last argument actually context?
      //response returns error if there is one
      var error = response.error;
      if (error) {
        next('> error: ' + error.stack);
      }
      model.coffeeShops = response;
      console.log('> coffee shops fetched successfully from remote server');
      //verify via `curl localhost:3000/api/Magazines`
      next();
    });
  };
};
