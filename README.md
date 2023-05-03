# Node GNews API

Thanks for your visiting my Project.

## Requirement

Create a simple API that interacts with a public news API for fetching articles. [GNews API](https://gnews.io) is a good example and then create a API service, with documentation, that interacts with this API for fetching articles.

## Description

I used Node Express API for this task.

For the data caching, I used [memory-cache](https://www.npmjs.com/package/memory-cache) npm package.

Set the caching time as 12 hours.

## Installation

To run Project, you need to install dependencies:

```bash
yarn
```

And copy `.env.example` and rename it as `.env`, then update the env values with your GNews API KEY.

## Usuage

This is a simple example, so just integrate [Search Endpoint](https://gnews.io/docs/v4#search-endpoint) in GNews API

You can use postman for fetching the data

`url: http://localhost:3001/gnews/search`

`method: POST`

`body: {
    "query": "example",
    "count": 5
}`

query should be provided and count is optional. The default value is 10.

## Preview
![image](https://user-images.githubusercontent.com/55793602/235842339-78224bb1-8310-4360-ab32-e45cc0ccae1f.png)
