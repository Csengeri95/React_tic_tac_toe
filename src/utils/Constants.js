const red = require('../assets/red.png')
const blue = require('../assets/blue.png')
const purple = require('../assets/purple.png')
const brown = require('../assets/brown.png')

export const symbolData = [
    { value: 'O', label: 'Kör' },
    { value: 'X', label: 'Kereszt' },
]

export const colorData = [
    {
        image: red,
        label: 'Piros',
        value: '#D02020',

    },

    {
        image: blue,
        label: 'Kék',
        value: '#1E2AE6',
    },
    {
        image: purple,
        label: 'Lila',
        value: '#8B008B',
    },
    {
        image: brown,
        label: 'Barna',
        value: '#8b4513',


    },
]

export const boardSizeOptions = [
    { value: 100, label: '10 x 10' },
    { value: 64, label: '8 x 8' }
]