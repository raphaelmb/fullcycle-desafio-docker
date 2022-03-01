FROM golang:1.18rc1-alpine3.15 AS build

WORKDIR /app

COPY . .

RUN go build

FROM scratch

WORKDIR /app

COPY --from=build /app/desafio-go /app/

CMD ["./desafio-go"]