import { Scene } from "./types"

export const scenes: Scene[] = [
    {
        id: 0,
        image: 'https://media3.s-nbcnews.com/i/newscms/2018_47/1387503/queen-elizabeth-bananas-today-main-181119_914937af794d2cd8192fdd9764225243.jpg',
        action: 'You wake up in the morning',
        options: [
            {
                text: 'Brush your teeth.',
                id: 1
            },
            {
                text: 'Go back to sleep.',
                id: 2
            }
        ]
    },
    {
        id: 1,
        image: 'https://media3.s-nbcnews.com/i/newscms/2018_47/1387503/queen-elizabeth-bananas-today-main-181119_914937af794d2cd8192fdd9764225243.jpg',
        action: 'Shit!  Out of toothpaste!  What now?!',
        options: [
            {
                text: 'Go to the store.',
                id: 3
            },
            {
                text: 'Use baking soda.',
                id: 11
            }
        ]
    },
    {
        id: 2,
        image: 'https://media3.s-nbcnews.com/i/newscms/2018_47/1387503/queen-elizabeth-bananas-today-main-181119_914937af794d2cd8192fdd9764225243.jpg',
        action: 'The neighbors are coughing too loud.',
        options: [
            {
                text: 'Brush teeth.',
                id: 1
            },
            {
                text: 'Put the pillow over your head.',
                id: 4
            }
        ]
    },
    {
        id: 3,
        image: 'https://media3.s-nbcnews.com/i/newscms/2018_47/1387503/queen-elizabeth-bananas-today-main-181119_914937af794d2cd8192fdd9764225243.jpg',
        action: 'You hear coughing down the hall. What\'s the move?',
        options: [
            {
                text: 'Make a face mask out of toilet paper.',
                id: 5
            },
            {
                text: 'Cover your mouth and run by them!',
                id: 6
            }
        ]
    },
    {
        id: 4,
        image: 'https://media3.s-nbcnews.com/i/newscms/2018_47/1387503/queen-elizabeth-bananas-today-main-181119_914937af794d2cd8192fdd9764225243.jpg',
        action: 'Haven\'t been to the laundromat in weeks.  Your pillow smells like old drool.',
        options: [
            {
                text: 'FINE!  I\'LL BRUSH MY DAMN TEETH!',
                id: 1
            },
            {
                text: 'Eh.  Time for coffee.',
                id: 7
            }
        ]
    },
    {
        id: 5,
        image: 'https://media3.s-nbcnews.com/i/newscms/2018_47/1387503/queen-elizabeth-bananas-today-main-181119_914937af794d2cd8192fdd9764225243.jpg',
        action: 'Don\'t be a fool!  You ran out of toilet paper a week ago!',
        options: [
            {
                text: 'Go to the store.',
                id: 3
            },
            {
                text: 'Time to watch some Netflix.',
                id: 8
            }
        ]
    },
    {
        id: 6,
        image: 'https://media3.s-nbcnews.com/i/newscms/2018_47/1387503/queen-elizabeth-bananas-today-main-181119_914937af794d2cd8192fdd9764225243.jpg',
        action: 'Past all the coughing people congregating in the hallway, you\'ve made it outside.',
        options: [
            {
                text: 'Head to the bodega a block away.',
                id: 9
            },
            {
                text: 'Let\'s get some real shopping done. Time to brave the grocery store.',
                id: 10
            }
        ]
    },
    {
        id: 7,
        image: 'https://media3.s-nbcnews.com/i/newscms/2018_47/1387503/queen-elizabeth-bananas-today-main-181119_914937af794d2cd8192fdd9764225243.jpg',
        action: 'No coffee filters!',
        options: [
            {
                text: 'Fashion one with toilet paper.',
                id: 5
            },
            {
                text: 'Time to watch some Netflix.',
                id: 8
            }
        ]
    },
    {
        // Netflix:
        id: 8,
        image: 'https://media3.s-nbcnews.com/i/newscms/2018_47/1387503/queen-elizabeth-bananas-today-main-181119_914937af794d2cd8192fdd9764225243.jpg',
        action: 'Your subscription has expired!',
        options: [
            {
                text: 'beg your cousin for his login',
                id: 12
            },
            {
                text: 'pirate it',
                id: 13
            },
            {
                text: 'watch Hulu instead',
                id: 14
            }
        ]
    },
    {
        // Bodega:
        id: 9,
        image: 'https://media3.s-nbcnews.com/i/newscms/2018_47/1387503/queen-elizabeth-bananas-today-main-181119_914937af794d2cd8192fdd9764225243.jpg',
        action: '',
        options: []
    },
    {
        // Grocery store:
        id: 10,
        image: 'https://media3.s-nbcnews.com/i/newscms/2018_47/1387503/queen-elizabeth-bananas-today-main-181119_914937af794d2cd8192fdd9764225243.jpg',
        action: '',
        options: []
    },
    {
        // Brushed teeth:
        id: 11,
        image: 'https://media3.s-nbcnews.com/i/newscms/2018_47/1387503/queen-elizabeth-bananas-today-main-181119_914937af794d2cd8192fdd9764225243.jpg',
        action: 'Nice work.  Teeth shiny, but the taste is foul.',
        options: [
            {
                text: 'Deal with it.  Time for some Netflix.',
                id: 8
            },
            {
                text: 'Nothing a little coffee won\'t cure...',
                id: 7
            },
        ]
    },
]
