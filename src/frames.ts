import { Frame } from "./types"

export const frames: Frame[] = [
    {
        id: 0,
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
        action: '',
        options: []
    },
    {
        // Bodega:
        id: 9,
        action: '',
        options: []
    },
    {
        // Grocery store:
        id: 10,
        action: '',
        options: []
    },
    {
        // Brushed teeth:
        id: 11,
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
