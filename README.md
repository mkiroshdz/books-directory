# ninja-books

This is a toy project to learn graphql. (Warning: Horrible Code Ahead).

## Server

```
docker run -it -p 3000:3000 --mount type=bind,source="$(pwd)",target=/app node:18 bash
```