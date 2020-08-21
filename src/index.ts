import axios from 'axios'
import { move } from './logic'

const responsePromise = axios.get('http://localhost:3033/hello')
console.log('start')
responsePromise.then((response) => {
    console.log(response)
})

console.log('next')
const userProgress = window.location.search.replace('?', '')
if (userProgress === '') {
    move(0)
} else {

    //takes the ;s out of userProgress and puts the stringified numbers into an array called stateIds:
    const stateIds = userProgress.split(';')


    console.log(userProgress)

    //for each stringified number in stateIds, we call callbackMove, which turns that stringified number into a real number
    //for each number, you call move
    const callbackMove = (id) => {
        const numId = parseInt(id)
        move(numId)
    }
    stateIds.forEach(callbackMove)
}


// Products Web Page strategy:

// Go through, find the stars of all the products by id and put them together

const people = [
    {
        name: {
            first: 'bob',
            last: 'smith'
        },
        bio: 'Pleasing me is sometimes possible, while other times not.',
        reviews: [
            {
                stars: 4,
                product: 123,
                review: 'it was good'
            },
            {
                stars: 1,
                product: 321,
                review: 'it was not good'
            },
        ]
    },
    {
        name: {
            first: 'jen',
            last: 'Wolfeschlegelsteinhausenbergerdorff'
        },
        bio: 'I am fairly hard to please.',
        reviews: [
            {
                stars: 1,
                product: 123,
                review: 'it was disappointing'
            },
            {
                stars: 2,
                product: 555,
                review: 'it was mostly disappointing'
            },
        ]
    },
    {
        name: {
            first: 'hank',
            last: 'jones'
        },
        bio: 'I am mostly pleased.',
        reviews: [
            {
                stars: 4,
                product: 123,
                review: 'it was pleasing'
            },
            {
                stars: 3,
                product: 321,
                review: 'it was not bad'
            },
            {
                stars: 5,
                product: 555,
                review: 'in terms of liking things, i felt this way towards it'
            },
        ]
    },
]

const products = [
    {
        id: 123,
        name: 'Product 1',
        description: 'Buy me for you!'
    },
    {
        id: 321,
        name: 'Product 2',
        description: 'Purchase me immediately!'
    },
    {
        id: 555,
        name: 'Product 3',
        description: 'I am the third product.'
    },
]



type Review = {
    stars: number
    product: number
    review: string
}

type Person = {
    name: {
        first: string
        last: string
    },
    bio: string
    reviews: Review[]
}

type Product = {
    id: number
    name: string
    description: string
}


const productStarLookup = (productId) => {

    const lookForProduct = (accumulator, person: Person) => {
        const lookForStars = (review: Review) => {
            return productId === review.product
        }
        const review = person.reviews.find(lookForStars)
        if (review !== undefined) {
            accumulator.push(review.stars)
        }
        return accumulator
    }

    const stars = people.reduce(lookForProduct, [])
    return stars
}
productStarLookup(123)
productStarLookup(321)
productStarLookup(555)

// products[0].id


const makePageElements = (product: Product) => {
    // 		-displays name in an h2      
    const name = document.createElement('h2')
    name.innerText = product.name
    document.body.appendChild(name)

    // 		-displays description in a paragraph
    const description = document.createElement('p')
    description.innerText = product.description
    document.body.appendChild(description)

    // 		-displays avg: in a paragraph
    const starsArray = productStarLookup(product.id)
    // why is starsArray's value never read?
    const starsAvg = (starsArray) => {
        let sum = 0
        for (let i = 0; i < starsArray.length; i++) {
            sum += starsArray[i];
        }
        return sum / starsArray.length;
    }
    //still don't understand the diff between var / let and var / const

    const average = document.createElement('p')
    average.innerText = 'Average Rating: ' + starsAvg(starsArray)
    document.body.appendChild(average)
}

products.forEach(makePageElements)


// dictionary project???

const entries = [
    {
        word: 'word',
        pronunciation: [
            {
            phoneticSpelling: 'wurd',
            recording: 'https://freesound.org/s/524886/'
            //How do you do audio on a page?
            },
        ],
        definitions: [
            {
                partOfSpeech: 'noun',
                number: 1,
                definition: 'this is what the word means',
                example: 'I am using this word in a sentence'
            },
            {
                partOfSpeech: 'noun',
                number: 2,
                definition: 'potentially archaic definition',
                example: 'some dude with a cravat used this word this way once'
            },
        ]
    },   
    
]

type Pronunciation = {
    phoneticSpelling: string,
    recording: string,
}
type Definition = {
    partOfSpeech: string
    number: number
    definition: string
    example: string
}

//make an HTMLInputElement
//if input = a word in an entry, call a function similar to makeElements to display the entry stuffs
//you might have to .find through all of the entries with input to find one that matches the entry
// end result looks like: 
    //Word (phonetic spelling) audio button
    // 1. noun
    // this is the definition
    // ex: sentence in italics