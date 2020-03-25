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
      "hackathon_id": 1,
      "hackathon_name": "Tom's Hackathon",
      "user_hackathon_role": "participant",
      "developer_role": "front-end",
      "start_date": "Sat Jan 18 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
      "end_date": "Wed Jan 22 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
      "hackathon_description": "It's a great hackin' time",
      "project": {
        "user_id": 1,
        "project_id": 1,
        "title": "To-do List",
        "description": "It's a to-do list"
      }
    }
  ]
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
    "max_team_participants": 20,
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
    "max_team_participants": 20,
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
  "max_team_participants": 20,
  "organizer_id": 9,
  "projects": [
    {
      "project_id": 1,
      "project_title": "To-do List",
      "project_description": "It's a to-do list",
      "front_end_spots": 10,
      "back_end_spots": 3,
      "ios_spots": 3,
      "android_spots": 1,
      "data_science_spots": 2,
      "ux_spots": 1,
      "is_approved": 1,
      "submitted": true,
      "participants": [
        {
          "user_id": 1,
          "username": "lorenzo-simpson",
          "user_hackathon_role": "participant",
          "hackathon_id": 1,
          "developer_role": "front-end"
        }
      ]
    },
    {
      "project_id": 2,
      "project_title": "Guidr",
      "project_description": "It's an app",
      "front_end_spots": 10,
      "back_end_spots": 3,
      "ios_spots": 3,
      "android_spots": 1,
      "data_science_spots": 2,
      "ux_spots": 1,
      "is_approved": 1,
      "submitted": false,
      "participants": [
        {
          "user_id": 2,
          "username": "austin-powell",
          "user_hackathon_role": "participant",
          "hackathon_id": 2,
          "developer_role": "front-end"
        }
      ]
    }
  ],
  "admins": [
    {
      "username": "joe-schmoe",
      "user_id": 4,
      "user_hackathon_role": "organizer"
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
  ]
}
```

> POST /hackathons/u/:id

### Allows organizer to create new hackathon :id being organizer id (who is currently signed in and creating the hackathon)

### Location, Name, and Description must be included

```
{
  "name": "Lorenzo's Hackathon",
  "description": "It's a great hackin' time",
  "url": "https://www.lorenzos-hackathon.com",
  "location": "Denver, CO",
  "start_date": "Sat Jan 18 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
  "end_date": "Wed Jan 22 2020 14:37:00 GMT-0500 (Eastern Standard Time)",
  "max_team_participants": 4,
  "is_open": 1
}
```

```
{
  "message": "Could not add hackathon",
  "errors": [
    "Please include a hackathon location.",
    "Please include a hackathon name.",
    "Please include a hackathon description."
  ]
}
```

> POST /hackathons/:id/join/:user_id

#### Creates an instance linking a user to a hackathon (aka register for a hackathon)

```
    id = existing hackathon id
    user_id = The id of the person signing up
```

### Three user scenarios:

    1. User registers themself for a hackathon with a project_id (aka JOINS A PROJECT)
    2. Organizer assigns a judge to a hackathon
    3. Organizer assigns another organizer to their hackathon

```
    Scenario 1: Lorenzo (signed in) registers for a project

    POST /hackathons/{hackathon_id}/join/{lorenzo_user_id}

    {
      "project_id": 1,
	    "user_hackathon_role": "participant",
	    "developer_role": "front-end"
    }

```

```
    Scenario 2: Lorenzo (signed-in & organizer of hackathon) registers Alec for a hackathon as a judge

    POST /hackathons/{hackathon_id}/join/{alec_user_id}

    {
	    "user_hackathon_role": "judge"
    }

```

```
    Scenario 3: Lorenzo (signed-in & organizer of hackathon) registers Alec for a hackathon as another organizer

    POST /hackathons/{hackathon_id}/join/{bob_user_id}

    {
	    "user_hackathon_role": "organizer"
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

## Projects

> GET /projects/

### Returns an array of ALL projects.

```
[
  {
    "id": 1,
    "title": "To-do List",
    "description": "It's a to-do list",
    "is_approved": 1,
    "creator_id": 1,
    "hackathon_id": 1,
    "front_end_spots": 10,
    "back_end_spots": 3,
    "ios_spots": 3,
    "android_spots": 1,
    "data_science_spots": 2,
    "ux_spots": 1
  },
  {
    "id": 2,
    "title": "Guidr",
    "description": "It's an app",
    "is_approved": 1,
    "creator_id": 5,
    "hackathon_id": 1,
    "front_end_spots": 10,
    "back_end_spots": 3,
    "ios_spots": 3,
    "android_spots": 1,
    "data_science_spots": 2,
    "ux_spots": 1
  },
]
```

> GET /projects/:id

### Returns a project object with its participants.

```
{
  "id": 2,
  "title": "Guidr",
  "description": "It's an app",
  "is_approved": 1,
  "creator_id": 5,
  "hackathon_id": 1,
  "front_end_spots": 10,
  "back_end_spots": 3,
  "ios_spots": 3,
  "android_spots": 1,
  "data_science_spots": 2,
  "ux_spots": 1,
  "participants": [
    {
      "user_id": 2,
      "username": "austin-powell",
      "user_hackathon_role": "participant",
      "hackathon_id": 2,
      "developer_role": "front-end"
    }
  ]
}
```

> PUT /projects/:id

### Updates a project. Returns the updated project.

```
{
  "id": 2,
  "title": "Expat Journal"
}
```

> POST /projects

### Creates a new project, returns success message and project information.

```
{
	"title": "Cat App",
  "description": "It's a to-do list",
  "is_approved": true,
  "front_end_spots": 10,
  "back_end_spots": 3,
  "ios_spots": 3,
  "android_spots": 1,
  "data_science_spots": 2,
  "ux_spots": 1,
  "creator_id": 1,
  "hackathon_id": 2
}
```

> DELETE /projects/:id

## Deletes a project

```
{
   "message": 'Deleted project with id 5'
}
```

## Project Submission

> GET /project-submission

### Returns an array of all submitted projects

```
[
    {
        "id": 1,
        "project_id": 1,
        "github_url": "github.com",
        "deployed_url": "randomurl",
        "video_url": "http://res.cloudinary.com/demo/video/upload/v1427018743/ygzxwxmflekucvqcrb8c.mp4"
    },
    {
        "id": 2,
        "project_id": 2,
        "github_url": "github.com",
        "deployed_url": "randomurl",
        "video_url": "http://res.cloudinary.com/demo/video/upload/v1427018743/ygzxwxmflekucvqcrb8c.mp4"
    }
]{
    "message": "Deleted project with id 1"
}
```

> GET /project-submission/:projectId 

### Returns an object with the submitted information for the selected project

```
{
    "id": 1,
    "project_id": 1,
    "github_url": "github.com",
    "deployed_url": "randomurl",
    "video_url": "http://res.cloudinary.com/demo/video/upload/v1427018743/ygzxwxmflekucvqcrb8c.mp4"
}
```

> POST /project-submission/

### Submits completed projects information to the database and returns a success message.

```
{
    "message": "Project was successfully submitted"
}
```

> PUT /project-submission/:id

### Updates a specific project submission and then returns the information that was updated.

```
{
    "id": 1,
    "project_id": 1,
    "github_url": "updated",
    "deployed_url": "updated",
    "video_url": "http://res.cloudinary.com/demo/video/upload/v1427018743/ygzxwxmflekucvqcrb8c.mp4"
}
```

> DELETE /project-submission/:id

### Deletes a specified project submission.

```
{
    "message": "Deleted project-submission with id 1"
}
```