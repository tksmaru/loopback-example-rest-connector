[strongloop-website]: http://strongloop.com/

#loopback-example-rest-connector
This example demonstrates basic usage of `loopback-connector-rest`. There are
two servers in this project: `local-server` and `remote-server`. Remote server
simply serves up a simple REST API while the local server fetches data using
this REST API.

#Run
1. Clone the app
2. Start up the remote server `slc run remote-server` from the project root.
3. Start up the local server `slc run local-server` from the project root.

You should see console messages on the local server. Verify the data has been
retrieved from the remote server by doing a GET request on Magazines in the
explorer or by running `curl localhost:3000/api/Magazines`.


##FAQs
The following are common questions related to using the REST connector.

###How do you perform a GET request to a remote server?
In this example, we have a REST API exposed in [model-config.json](https://github.com/strongloop/loopback-example-rest-connector/blob/master/external-server/server/model-config.json#L31)
.

To make a request to the remote server, declare new datasource that uses the
REST connector in the local [datasources.json](https://github.com/strongloop/loopback-example-rest-connector/blob/master/local-server/server/datasources.json#L6-L20). A few
things to note:

- connector
  - rest
- operations
  - a list of objects that represent remote resources
    - object template property
      - method = the request http method type (ie. GET, POST, etc)
      - url = the remote resource url
    - object function property
      - find = name of the function that will trigger the request, it can be
        whatever you want

The idea is to use the [`find`](https://github.com/strongloop/loopback-example-rest-connector/blob/master/local-server/server/datasources.json#L16) to make [`GET`](https://github.com/strongloop/loopback-example-rest-connector/blob/master/local-server/server/datasources.json#L12) request to a [`url`](https://github.com/strongloop/loopback-example-rest-connector/blob/master/local-server/server/datasources.json#L13) we specify.
