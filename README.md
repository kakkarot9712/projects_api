### This Code is not used for my portfolio anymore, I have created the same APIs in Rust as my first practice project, which is [here](https://github.com/kakkarot9712/projects_api_rust). 
# Portfolio API
Simple API to retrieve stored portfolio metadata from database using supported endpoints, created using Node.js, ExpressJS, mongoDB for database.

# Supported Endpoints

## `GET` Languages
_Returns the list of metadata of Programming Languages I know along with base64 SVG data._
* **URL**
  `/languages`

* **Method**
  `GET`
  
* **Success Response**
  * **Code:** 200 <br />
    **Content:** `{"status": "success", "data": {"languages": [ /* List of Language Metadata */] }}`

* **Error Response**
  * **Code:** 500 <br />
    **Content:** `{
      "status": "failed",
      "message": "Something Went Wrong",
    }`

## `GET` Tools
_Gets the list of metadata of Tools I used and am familiar with, Like Render, which was once used for deployment of this web server along with base64 SVG data._

* **URL**
  `/tools`
  
* **Method**
  `GET`
  
* **Success Response**
  * **Code:** 200 <br />
    **Content:** `{"status": "success", "data": {"tools": [ /* List of Tools Metadata */] }}`

* **Error Response**
  * **Code:** 500 <br />
    **Content:** `{
      "status": "failed",
      "message": "Something Went Wrong",
    }`

## `GET` Projects

_Gets the list of metadata of Projects I made for practice and learning purposes._
* **URL**
  `/projects`

* **Method**
  `GET`
  
* **Success Response**
  * **Code:** 200 <br />
    **Content:** `{"status": "success", "data": {"projects": [ /* List of Projects Metadata */] }}`

* **Error Response**
  * **Code:** 500 <br />
    **Content:** `{
      "status": "failed",
      "message": "Something Went Wrong",
    }`
