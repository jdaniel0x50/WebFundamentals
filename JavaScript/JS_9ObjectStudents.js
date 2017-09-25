function firstlastname(students) {
    for (var ind in students) {
        console.log(students[ind].first_name + " " + students[ind].last_name);
    }
}
function studentsinstr(users) {
    var istudents = 1;
    var iinstr = 1;
    
    console.log("Students");
    for (ind in users.Students) {
        console.log(istudents + " - " + users.Students[ind].first_name + " " + users.Students[ind].last_name + " -- " + (users.Students[ind].first_name.length + users.Students[ind].last_name.length));
        istudents++;
    }
    console.log("Instructors");
    for (ind in users.Instructors) {
        console.log(iinstr + " - " + users.Instructors[ind].first_name + " " + users.Instructors[ind].last_name + " -- " + (users.Instructors[ind].first_name.length + users.Instructors[ind].last_name.length));
        iinstr++;
    }    
}


var students = [
    {first_name: 'Michael', last_name: 'Jordan'},
    {first_name: 'John', last_name: 'Rosales'},
    {first_name: 'Mark', last_name: 'Guillen'},
    {first_name: 'KB', last_name: 'Tonel'},    
];

firstlastname(students);
console.log();
console.log();

var users = {
    Students: [
        {first_name: 'Michael', last_name: 'Jordan'},
        {first_name: 'John', last_name: 'Rosales'},
        {first_name: 'Mark', last_name: 'Guillen'},
        {first_name: 'KB', last_name: 'Tonel'},    
    ],
    Instructors: [
        {first_name: 'Michael', last_name: 'Choi'},
        {first_name: 'Martin', last_name: 'Puryear'},
    ]    
}

// console.log(users.Students[0].first_name);
studentsinstr(users);
