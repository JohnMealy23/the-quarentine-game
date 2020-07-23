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
// 	- map? to collect all the objects with product number 123 or whatever

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

const lookForProduct = (accumulator, person: Person) => {
    const productId = 123
    const lookForStars = (review: Review) => {
        return productId === review.product
    }
    const review = person.reviews.find(lookForStars)
    accumulator.push(review.stars)
    return accumulator 
}

const stars = people.reduce(lookForProduct,[])
console.log(stars)


// products[0].id


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


// 	- then you collect all the stars of the corresponding array (with another map?)

// find the averages of # of stars for each product

// 	- need a reduce function to reduce that array and find the average

// 		function average(array) {
//  		   var sum = 0;
// 		    for(var i = 0; i < array.length;i++){
//   		      sum += array[i];
//  		   }
// 		    return sum / array.length;
// 		}

// somehow, these become the property avg: in products
// 		

// then you forEach products and make HTMLElements

// 	products.forEach(makePageElements)

//	makePageElements
// 		-displays name in an h2
// 		-displays description in a paragraph
// 		-displays avg: in a paragraph