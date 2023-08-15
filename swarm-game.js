// SECTION ARRAYS

const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤'
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤'
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
}
]

// SECTION LOCATION DRAWING


draw()

function draw() {
    // for (i = 0; i <= locations.length; i++) {
    //     let location = locations[i]
    //     let filteredPeople = people.filter((person) => {
    //         return person.location === location
    //     })
    //     let picture = filteredPeople.map((person) => {
    //         return person.picture
    //     })
    //     document.getElementById(location).innerHTML = picture
    //     console.log(picture)
    // }

    // NOTE In each location its going to filter through every person[] and see if their location matches the currect location[] in the loop
    locations.forEach((location) => {
        let filteredPeople = people.filter((person) => {
            return person.location === location
        })
        // NOTE creates new array of peoples "EMOJI"
        let picture = filteredPeople.map((person) => {
            return person.picture
        })
        // NOTE While in the currect location, its going to match the element id to the current location and then put the respective emojis in the html
        document.getElementById(location).innerHTML = picture
    })
}

locations.forEach((location) => {
    document.getElementsByClassName(location)[0].addEventListener('click', () => {
        console.log(location + ' clicked.')
        let foundPeople = people.filter((person) => {
            if (person.location === location) {
                person.picture = '🦇'
                draw()
            }
        })
        checkBats()
    })
})

function checkBats() {
    console.log('bats')
}