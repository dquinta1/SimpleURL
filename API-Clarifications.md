# Some questions regarding params in API:

#### POST user/register/

- createdTime: what exactly is this long? Time in milliseconds? Would a DateTime object be better?
  - Here we want the createTime of the user from Firebase, we are not sure what type it is, so leave it as long. Currently, long is stand for time in milliseconds. We could accept any format of it, as long as we can transfer it to database timestamp.

- location: define exactly what this location would be: country, region, city, coordinates?
  - ISO country code would be fine
  - Ex: US for United States, CN for China, CU for Cuba

- language: what format are you expecting? My browser will return _en-US_ for instance.
  - the language code, 'en-US' format is exactly what we want

- limit: if this will always be Null then remove it from the endpoint
  - removed

- In the Response: the message is unnecessary, I can do with a 200, I also would not need the data sent back since most is local to the browser and the rest is already accessed through Firebase Auth
  - Response data is removed


#### POST url/shorten

- shortenedUrl: this is ambiguous in the request, the shortenedUrl only exists after the request completes, the frontend should not have access to this parameter (if it is None then remove it from the endpoint altogether, this is exposing backend logic into the frontend, it is a security liability)

  - removed

- prefix: this should not be a required parameter, as not all users can add a customized prefix to their urls (consider making it nullable: **String?** rather than **String** or the equivalent)

  - It seems that in java, String is already nullable. If input prefix is null, the constructor could still handle. In our case, if the input prefix is null, the response body will not include the prefix

  - Ex:

    - {

      ​    "userID": "123",

      ​    "originalUrl": "https://www.youtube.com"

      }

    - {

         "userID": "123",

         "originalUrl": "https://www.youtube.com",

         "shortenedUrl": "http://SimpleURL/r/8i5XkPm6iu0",

         "createdTime": 1648712873

      }

- Response data: define 'all url attributes', what are we getting here? a String? an Object?

  - ex:

    - {

         "userID": "123",

         "originalUrl": "https://www.youtube.com",

         "shortenedUrl": "http://SimpleURL/r/RICEQETOwZe",

      ​    "prefix": "RICE",

         "createdTime": 1648712873

      }

    - response prefix will not be included if request prefix is null


#### GET /user/getMultiUrls/{userID}&{pageNumber}

- Response data: define URL objects, what would the model be for these objects?

  - ex:

    - {

         "userID": "123",

         "originalUrl": "https://www.youtube.com",

         "shortenedUrl": "http://SimpleURL/r/RICEQETOwZe",

      ​    "prefix": "RICE",

         "createdTime": 1648712873

      }

    - response prefix will not be included if request prefix is null


#### GET /user/upgrade/{userID}

- Why is this a GET and not a POST? Upgrading implies a payment must be made, or a similar process should happen. This endpoint feels like it requires more complexity than it has as a GET (it definitely needs a Body at least)
  - Changed it to post. Currently, this api only used for free user upgrade to premium user, and since we do not have a payment api, we assume every upgrade request from web is payment succeed. This is why there is no body here.

### Note: A message describing the response is unnecessary, the frontend will decide how to provide UI feedback for the user in the success or failure of a request, for this we only need the respective HTTP status code from the backend.

- Changed to use HTTP status code
