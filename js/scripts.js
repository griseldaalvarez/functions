// declare a funtion

function formatName(firstName, lastName) {
    // console.log(firstName);
    // console.log(lastName);

    // console.log(lastName + ' ' + firstName);

    var formattedName = lastName + ' ' + firstName;
    localStorage.setItem('userFullName', formattedName); //save to localStorage

    if (localStorage.getItem('userFullName')) {

    } else{
        localStorage.setItem('userFullName', formattedName);
    }

    return lastName + ' ' + firstName;
}

var userFirstName = 'Griselda';
var userLastName = 'Alvarez';

formatName(userFirstName, userLastName);

// function expression;
var createUserObj = function (firstName, lastName) {
    var userObj = {
        name: formatName(firstName, lastName),
        age: null
    };

    return userObj;
}(userFirstName, userLastName); //add last set of parenthesis to evaluate function expression immediatley after creation

console.log(createUserObj);

//constructor way
var concatinate = new Function('x', 'y', 'return x + y');
console.log(concatinate('griselda', 'alvarez'));