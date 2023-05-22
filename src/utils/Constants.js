const red = require('../assets/red.png')
const blue = require('../assets/blue.png')
const purple = require('../assets/purple.png')
const green = require('../assets/green.png')

export const symbolData = [
    { value: 'circle', label: 'Kör' },
    { value: 'cross', label: 'Kereszt' },
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
        image: green,
        label: 'Zöld',
        value: '#32CD32',

    },
]

export const boardSizeOptions = [
    { value: 100, label: '10 x 10' },
    { value: 80, label: '8 x 8' }
]