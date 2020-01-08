# Hackathon Portal -- Backend

---

# API documentation

    - Base URL: https://hackathon-portal.herokuapp.com/api

    - Headers => Authorization: Bearer ${token} required on all requests

---

## Users

> GET /users

### Returns array of all users

```
[
 {
 "id": 1,
 "username": "lorenzo-simpson",
 "email": "lsimp@hackathon-testing.com"
 },
 {
 "id": 2,
 "username": "austin-powell",
 "email": "apowe@hackathon-testing.com"
 }
]
```

> GET /users/:id

### Returns a user object by id

```
{
  "id": 1,
  "first_name": "Lorenzo",
  "last_name": "Simpson",
  "username": "lorenzo-simpson",
  "email": "lsimp@hackathon-testing.com",
  "hackathons": [
    {
      "hackathon_name": "Tom's Hackathon",
      "username": "lorenzo-simpson",
      "user_hackathon_role": "participant",
      "developer_role": "front-end",
      "team_id": 1,
      "team_name": "Team Pepe",
      "user_id": 1,
      "hackathon_id": 1,
      "start_date": "Sat Jan 18 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
      "end_date": "Wed Jan 22 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
      "hackathon_description": "It's a great hackin' time"
    }
}
```

> GET /users/e/:email

### Returns a user object by email

```
{
  "id": 1,
  "first_name": "Lorenzo",
  "last_name": "Simpson",
  "username": "lorenzo-simpson",
  "email": "lsimp@hackathon-testing.com",
  "hackathons": [
    {
      "hackathon_name": "Tom's Hackathon",
      "username": "lorenzo-simpson",
      "user_hackathon_role": "participant",
      "developer_role": "front-end",
      "team_id": 1,
      "team_name": "Team Pepe",
      "user_id": 1,
      "hackathon_id": 1,
      "start_date": "Sat Jan 18 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
      "end_date": "Wed Jan 22 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
      "hackathon_description": "It's a great hackin' time"
    }
}
```

> GET /users/u/:username

### Returns a user object by username

```
{
  "id": 1,
  "first_name": "Lorenzo",
  "last_name": "Simpson",
  "username": "lorenzo-simpson",
  "email": "lsimp@hackathon-testing.com",
  "hackathons": [
    {
      "hackathon_name": "Tom's Hackathon",
      "username": "lorenzo-simpson",
      "user_hackathon_role": "participant",
      "developer_role": "front-end",
      "team_id": 1,
      "team_name": "Team Pepe",
      "user_id": 1,
      "hackathon_id": 1,
      "start_date": "Sat Jan 18 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
      "end_date": "Wed Jan 22 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
      "hackathon_description": "It's a great hackin' time"
    }
}
```

> PUT /users/:id

### Updates user information and returns updated user object (no hackathon info)

### Does not have to include all fields for updating user information, updateable fields listed below:

```
{
 "first_name": "Alec",
 "last_name": "Blakeley",
 "username": "alec-blakeley",
 "email": "ablak@hackathon-testing.com",
}

```

> DELETE /users/:id

### Deletes the user account

```
{
  "message": "Deleted user with id 10 successfully"
}
```

---

## Hackathons

> GET /hackathons

### Returns an array of all hackathons

```
[
  {
    "id": 1,
    "name": "Tom's Hackathon",
    "description": "It's a great hackin' time",
    "url": "https://www.tomshackathon.com",
    "location": "Denver, CO",
    "start_date": "Sat Jan 18 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
    "end_date": "Wed Jan 22 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
    "is_open": 1,
    "organizer_id": 9
  },
  {
    "id": 2,
    "name": "Bill's Hackathon",
    "description": "It's a great hackin' time",
    "url": "https://www.billshackathon.com",
    "location": "Chicago, IL",
    "start_date": "Sun Jan 19 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
    "end_date": "Thurs Jan 23 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
    "is_open": 0,
    "organizer_id": 10
  }
]
```

> GET /hackathons/:id

### Returns specific hackathon information, including team and admin values.

```
{
  "id": 1,
  "name": "Tom's Hackathon",
  "description": "It's a great hackin' time",
  "url": "https://www.tomshackathon.com",
  "location": "Denver, CO",
  "start_date": "Sat Jan 18 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
  "end_date": "Wed Jan 22 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
  "is_open": 1,
  "organizer_id": 9,
  "teams": [
    {
      "team_id": 1,
      "team_name": "Team Pepe",
      "devs": [
        {
          "user_id": 1,
          "username": "lorenzo-simpson",
          "developer_role": "front-end"
        },
        {
          "user_id": 2,
          "username": "austin-powell",
          "developer_role": "back-end"
        }
      ]
    },
    {
      "team_id": 2,
      "team_name": "Fruit Flies & Stuff",
      "devs": [
        {
          "user_id": 5,
          "username": "santa-clause",
          "developer_role": "UX"
        },
        {
          "user_id": 6,
          "username": "sandy-blakeley",
          "developer_role": "DS"
        }
      ]
    },
    {
      "team_id": 3,
      "team_name": "Clean Water",
      "devs": [
        {
          "user_id": 7,
          "username": "bob-evans",
          "developer_role": "DS"
        }
      ]
    }
  ],
  "admins": [
    {
      "username": "alec-blakeley",
      "user_id": 3,
      "user_hackathon_role": "organizer"
    },
    {
      "username": "joe-schmoe",
      "user_id": 4,
      "user_hackathon_role": "judge"
    },
    {
      "username": "john-adams",
      "user_id": 8,
      "user_hackathon_role": "judge"
    },
    {
      "username": "tom-mcdonald",
      "user_id": 9,
      "user_hackathon_role": "judge"
    }
  ],
  "individual_devs": []
}
```

> POST /hackathons/u/:id

### Allows organizer to create new hackathon :id being organizer id (who is currently signed in and creating the hackathon)

```
{
  "name": "Lorenzo's Hackathon",
  "description": "It's a great hackin' time",
  "url": "https://www.lorenzos-hackathon.com",
  "start_date": "Sat Jan 18 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
  "end_date": "Wed Jan 22 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
  "is_open": 1
}
```

> POST /hackathons/:id/u/:user_id

#### Creates an instance linking a user to a hackathon (aka register for a hackathon)

```
    id = existing hackathon id
    user_id = The id of the person signing up
```

### Four users scenarios:

    1. User registers themself up for a hackathon with a team_id
    2. User registers themself for a hackathon without a team_id
    3. Organizer assigns a judge to a hackathon
    4. Organizer assigns another organizer to their hackathon

```
    Scenario 1: Austin (signed in) registers for a hackathon on a given team

    POST /hackathons/{hackathon_id}/join/{austin_user_id}

    {
	"user_hackathon_role": "participant",
	"developer_role": "front-end",
    "team_id": 1
    }

```

```
    Scenario 2: Austin (signed in) registers for a hackathon as an individual

    POST /hackathons/{hackathon_id}/join/{austin_user_id}

    {
	"user_hackathon_role": "participant",
	"developer_role": "front-end"
    }
```

```
    Scenario 3: Lorenzo (signed-in & organizer of hackathon) registers Alec for a hackathon a judge

    POST /hackathons/{hackathon_id}/join/{alec_user_id}

    {
	"user_hackathon_role": "judge",
    }

```

```
    Scenario 4: Lorenzo (signed-in & organizer of hackathon) registers Bob for a hackathon another organizer

    POST /hackathons/{hackathon_id}/join/{bob_user_id}

    {
	"user_hackathon_role": "organizer",
    }
```

> PUT /hackathons/:id/u/:org_id

### Allows organizer to update the hackathon. Returns the updated hackathon details.

    id = hackathon_id
    org_id = organizer updating the hackathon (must be original hackathon creator)

```
{
  "name": "Alec's First Hackathon",
  "description": "It's a great hackin' time",
  "url": "https://www.alec-other-hackathon.com",
  "start_date": "Sat Jan 18 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
  "end_date": "Wed Jan 22 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
  "is_open": 1
}
```

> DELETE /hackathons/:id/u/:org_id

### Deletes a hackathon. Returns a success message.

    id = hackathon_id
    org_id = organizer updating the hackathon (must be original hackathon creator)

```
{
  "message": "deleted hackathon with id 5"
}
```

---

## Teams

> GET /teams/

### Returns an array of all teams.

```
[
  {
    "id": 1,
    "name": "Team Pepe"
  },
  {
    "id": 2,
    "name": "Fruit Flies & Stuff"
  },
  {
    "id": 3,
    "name": "Clean Water"
  },
  {
    "id": 4,
    "name": "Quesadilla Finder"
  }
]
```

> GET /teams/:id

### Returns a team object with its participants.

```
{
  "id": 1,
  "name": "Team Pepe",
  "participants": [
    {
      "user_id": 1,
      "username": "lorenzo-simpson"
    },
    {
      "user_id": 2,
      "username": "austin-powell"
    },
    {
      "user_id": 7,
      "username": "bob-evans"
    },
    {
      "user_id": 3,
      "username": "alec-blakeley"
    }
  ]
}
```

### Optional query parameter: ?hackathon=hackathon_id returns the team as it appeared in that hackathon.

    eg. /teams/1/?hackathon=3

```
{
  "id": 1,
  "name": "Team Pepe",
  "participants": [
    {
      "user_id": 1,
      "username": "lorenzo-simpson",
      "user_hackathon_role": "participant",
      "developer_role": "front-end"
    },
    {
      "user_id": 2,
      "username": "austin-powell",
      "user_hackathon_role": "participant",
      "developer_role": "back-end"
    }
  ]
}
```

> PUT /teams/:id

### Updates a team's name. Returns the updated team.

```
{
  "id": 2,
  "name": "Fruit Flies n' Stuff"
}
```

> POST /teams/

### Creates a new team, returns success message and team information.

```
{
  "message": "Team was successfully created",
  "data": {
    "id": 6,
    "name": "Lorenzo's Team"
  }
}
```

> DELETE /teams/:id

## Deletes a team

```
{
   "message": 'Deleted team with id 4'
}
```
