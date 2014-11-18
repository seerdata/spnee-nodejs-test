
These are sample clients that allow you to talk to our
generic event system server.

Simply cd into one of the client directories for further instructions.

To test curl against the test api

```
curl -H "Content-Type: application/json" -d '{"red":"ralph"}' http://localhost:4567/api/1.0/test1
```

```
curl -H "Content-Type: application/json" -d '{"blue":"sam"}' http://localhost:4567/api/1.0/test2
```
