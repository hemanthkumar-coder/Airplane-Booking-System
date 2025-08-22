####### Setting Up the Project

- To Setup the Project in this repo Execute the below command in your Terminal(Make Sure git installed on your system)

```
git clone https://github.com/hemanthkumar-coder/Airplane-Booking-System.git
```

- Above Command clones the remote repo into your local machine

- After Cloning the Repo move Execute the Below Command to install all dependencies required to run this project(Make sure you are in the path ending with name "Airplane-Booking-System")

```
npm install
```

- Move into src folder by below command

```
cd src

```

##### File Setup to run

1.Create .env file in the root directory and Assign PORT Variable of your choice

```
Eg.PORT='Your PORT number'
```

### To Run the server

1.Execute Below command in your termainal to run the server in SRC Directory

````
npm run server
````

2.And This is it Now you can make API requests to the server

## Below are the Valid Endpoints to run the server

# Airplane Endpoints
1.Create Airplane - POST REQUEST- api/v1/flights   - this endpoint takes json req body and create Airplane in the Database
    Sample Request Body
```
{
"modelNumber":"Airbus A380",
"capacity":100
}
 ```
2.Get Airplanes -GET REQUEST -  api/v1/flights - this endpoint respond you with all availiable airplanes

3.Get Airplane with id - GET REQUEST - api/v1/flights/:id - this endpoint take id in request params and give you details about Airplane with specific id

4.Update Airplane - PATCH REQUEST - api/v1/flights/:id - this request update the Airplanw with given airplane id
    Sample Request Body
```
{
"capacity":80
}
```
5.Delete Airplane - DELETE REQUEST - api/v1/flights/:id - Deletes the Airplane with Given id

# City Endpoints

1.Create City - POST REQUEST- api/v1/cities - this endpoint takes json req body and create City in the Database
Sample Request Body

```
{
"name":"Gujarat"
}
```

2.Get Citys -GET REQUEST - api/v1/cities - this endpoint respond you with all availiable Citys.

3.Get City with id - GET REQUEST - api/v1/cities/:id - this endpoint take id in request params and give you details about City with specific id.

4.Update City - PATCH REQUEST - api/v1/cities/:id - this request update the Airplanw with given City id.
Sample Request Body

```
{
"name":"Gujarat"
}
```

5.Delete City - DELETE REQUEST - api/v1/cities/:id - Deletes the City with Given id

# Airport Endpoints

1.Create Airport - POST REQUEST- api/v1/cities - this endpoint takes json req body and create Airport in the Database
Sample Request Body

```
{
    "name": "Tirupati International Airport",
    "code": "Ren",
    "city_id": 2
}
```

2.Get Airports -GET REQUEST - api/v1/airports - this endpoint respond you with all availiable Airports

3.Get Airport with id - GET REQUEST - api/v1/airports/:id - this endpoint take id in request params and give you details about Airport with specific id

4.Update Airport - PATCH REQUEST - api/v1/airports/:id - this request update the Airplanw with given Airport id
Sample Request Body

```
{
    "name": "Tirupati International Airport",
    "city_id": 2
}
```

5.Delete Airport - DELETE REQUEST - api/v1/airports/:id - Deletes the Airport with Given id

# Flights Endpoints

1.Create Flights - POST REQUEST- api/v1/flights - this endpoint takes json req body and create Flights in the Database
Sample Request Body

```
{
    "flightNumber":"UK30",
    "airplaneId":1,
    "departureAirportId":"BLR",
    "arrivalAirportId":"REN",
    "arrivalTime":"2025-08-18 18:30:00Z",
    "departureTime":"2025-08-18 15:30:00Z",
    "price":1500,
    "totalSeats":120
}
```

2.Get Airports -GET REQUEST - api/v1/flights - this endpoint respond you with all availiable Flights

3.Get Flights with id - GET REQUEST - api/v1/flights/:id - this endpoint take id in request params and give you details about Flights with specific id

4.Update Seats in Flight - api/v1/flights/:id/seats - this request takes request body and updates seats of flight on booking
Request Body

```
    {
    "seats":11
    }
```

* This Project Ensures Code Readability,Reusability and Maintainable