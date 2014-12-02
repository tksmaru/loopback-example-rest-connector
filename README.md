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
