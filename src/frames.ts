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
                id: 4
            }
        ]
    },
    {
        id: 2,
        action: '',
        options: [
            {
                text: 'Go to the store.',
                id: 3
            },
            {
                text: 'Use baking soda.',
                id: 4
            }
        ]
    }
]
