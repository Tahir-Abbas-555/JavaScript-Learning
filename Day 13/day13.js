// Symbol as a unique key
const mySym = Symbol("myKey1")

const obj = {
    name: "Tahir Abbas",
    "full name": "Tahir Abbas Shaikh",
    [mySym]: "mykey1", 
    age: 18,
    location: "IBA",
    email: "tahirabbasshaikh555@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

console.log(obj.email)               // Dot notation
console.log(obj["email"])            // Bracket notation
console.log(obj["full name"])        // Bracket notation for properties with spaces
console.log(obj[mySym])              // Accessing the symbol property

// Updating object properties
obj.email = "tahirabbasshaikh1214@gmail.com"
console.log(obj)

// Adding new properties
obj["greeting"] = function() {
    console.log("Hello")
}
obj["greetingTwo"] = function() {
    console.log(`Hello js User ${this.name}`)
}

console.log(obj.greeting())
console.log(obj.greetingTwo())

// Creating another object using the Object constructor
const obj2 = new Object()
obj2.id = "312432"
obj2.name = "ibad"
obj2.isLoggedIn = false
console.log(obj2)

// Merging objects using spread syntax
const user1 = { 1: "a", 2: "b" }
const user2 = { 3: "c", 4: "d" }
const user4 = { 5: "e", 6: "f" }
const user3 = { ...user1, ...user2, ...user4 }
console.log(user3)

const users = [user1, user2, user4]
console.log(users[0][1])  // Accessing value from user1: 'a'

// Object utility methods
console.log(Object.keys(obj))          // Keys of the object
console.log(Object.values(obj))        // Values of the object
console.log(Object.entries(obj))       // Key-value pairs

// Destructuring with aliasing
const course = {
    courseName: "JavaScript-Learning",
    CoursePrice: "$999",
    courseInstructor: "Hitesh"
}
const { courseInstructor: instructor, courseName, CoursePrice } = course
console.log(instructor)

// Example of a JSON object
const jsonResponse = {
    "login": "hiteshchoudhary",
    "id": 11613311,
    "node_id": "MDQ6VXNlcjExNjEzMzEx",
    "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hiteshchoudhary",
    "html_url": "https://github.com/hiteshchoudhary",
    "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
    "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
    "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
    "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
    "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
    "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Hitesh Choudhary",
    "company": null,
    "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
    "twitter_username": "hiteshdotcom",
    "public_repos": 94,
    "public_gists": 4,
    "followers": 31327,
    "following": 0,
    "created_at": "2015-03-23T13:03:25Z",
    "updated_at": "2024-09-28T18:38:57Z"
}

// Parsing JSON object for specific fields
console.log(jsonResponse.name)      // Accessing the name property
console.log(jsonResponse.location)  // Accessing location property
console.log(jsonResponse.bio)       // Accessing bio property
