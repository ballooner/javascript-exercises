const findTheOldest = function(peopleArray) {
    let oldestPerson = peopleArray.reduce( (oldestPerson, currentPerson) => {
        let currentBirthDate = currentPerson.yearOfBirth;
        let currentDeathDate = currentPerson.yearOfDeath === undefined ? new Date().getFullYear() : currentPerson.yearOfDeath;
        let oldestBirthDate = oldestPerson.yearOfBirth;
        let oldestDeathDate = oldestPerson.yearOfDeath === undefined ? new Date().getFullYear() : oldestPerson.yearOfDeath;

        let age = currentDeathDate - currentBirthDate;
        let oldestAge = oldestDeathDate - oldestBirthDate;

        if (age > oldestAge)
            return currentPerson;

        return oldestPerson;
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
