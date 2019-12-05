# Front End Test Project

## Project Summary
The goal of this project is to create a single page application that will allow users to search for products and view product details.
You will be given an API interface and a set of mockups and some description. Your goal is to develop a UI in JavaScript using this information.
You are free to use any JS library for that purposes. However, please build this project as it is going to be extended in the future (e.g. components vs a single file application).


## API Spec
### Autocomplete Service
Autocomplete service provides a way to search for products while user types their title.
 
**Workflow:**
    - User types a keyword;
    - Browser sends a search request to the server;
    - Server performs search using this keyword and return possible matches;
    - Browser displays matches to the user;
    - User select one of the matches;
    - Browser sends a lookup request to the server to retrieve product id based on the match id.

### Search Endpoint
**URL:** `/api/autocomplete/search`

**Request:** 
    - Method: GET
    - Search query: `query` (string).

**Response:**
 - Format: `json`
 - Object containing two fields: `results` and `error`
 - `error` - Contains `null` if the request was successful and `string` if the request has encounter an error.
    - `MISSING_QUERY` - If query parameter is missing
    - `EMPTY_QUERY` - If query parameter is empty
    - `INTERNAL_ERROR` - If an internal error occurred.
    - `TOO_MANY_REQUESTS` - If client sends more than 2 requests per second.
 - `results` - Contains an array of matches. Each match consists of an object containing `title`, `match_id` and `highlights`.
    - `title` - string, product title.
    - `match_id` - integer, an internal DB id that is used to identify specific match.
    - `highlights` - array of arrays containing pairs representing offsets where highlight starts and ends. Example: "Map of Toronto - Toronto Publishing" will contain: `[[8,15],[17,24]]` to highlight both "Toronto" matches in this case.

### Lookup Endpoint
**URL:** `/api/autocomplete/search`

**Request:** 
 - Method: Get
 - Search query: `match_id` (integer).
 
**Response:**
 - Format: `json`
 - Object containing two fields: `results` and `error`
 - `error` - Contains `null` if the request was successful and `string` if the request has encountered an error.
    - `MISSING_MATCH_ID` - Match ID is missing
    - `EMPTY_MATCH_ID` - Match ID is empty
    - `WRONG_MATCH_ID` - Match ID is poorly formatted
    - `INTERNAL_ERROR` - If an internal error occurred.
    - `NOT_FOUND` If a match is not found
 - `product_id` - Contains product id that corresponds to specific match

### Product Details Service

**URL:** `/api/products/get`

**Request:** 
 - Method: Get
 - Search query: `product_id` (integer).
 
**Response:**
 - Format: `json`
 - Object containing two fields: `results` and `error`
 - `error` - Contains `null` if request was successful and `string` if request has encountered an error.
    - `MISSING_PRODUCT_ID` - Product ID is missing
    - `EMPTY_PRODUCT_ID` - Product ID is empty
    - `WRONG_PRODUCT_ID` - Product ID has wrong format
    - `INTERNAL_ERROR` - If an internal error occurred.
    - `NOT_FOUND` - If product is not found
 - `product` - Contains an object describing product:
    - `id` Integer - Product Id
    - `title` String - Product Title
    - `description` String - Product description
    - `previews` String[] - an array of URLs displaying previews.
    - `price` Float - Price. If Price is 0, then the product is free.
    - `downloads` Integer - Approximate number of downloads; null if not available.
    - `category` String[] - An array of categories where product belongs
    - `uploaded` String - an ISO formatted timestamp; null if not available.
    - `rating` Float - that represents average rating; null if not available.


