export function winningCombos100() {
    const winningCombos = []

    for (let row = 0; row <= 9; row++) {
        for (let col = 0; col <= 5; col++) {
            winningCombos.push(Array.from({ length: 5 }, (_, i) => row * 10 + col + i));
        }
    }

    for (let col = 0; col <= 9; col++) {
        for (let row = 0; row <= 5; row++) {
            winningCombos.push(Array.from({ length: 5 }, (_, i) => (row + i) * 10 + col))
        }
    }

    for (let row = 0; row <= 5; row++) {
        for (let col = 0; col <= 5; col++) {
            winningCombos.push(Array.from({ length: 5 }, (_, i) => (row + i) * 10 + col + i));
        }
    }

    for (let row = 9; row >= 4; row--) {
        for (let col = 0; col <= 5; col++) {
            winningCombos.push(Array.from({ length: 5 }, (_, i) => (row - i) * 10 + col + i));
        }
    }

    return winningCombos;
}

export function winningCombos64() {

    const winningCombos = []

    for (let row = 0; row <= 7; row++) {
        for (let col = 0; col <= 3; col++) {
            winningCombos.push(Array.from({ length: 5 }, (_, i) => row * 8 + col + i));
        }
    }


    for (let col = 0; col <= 7; col++) {
        for (let row = 0; row <= 3; row++) {
            winningCombos.push(Array.from({ length: 5 }, (_, i) => (row + i) * 8 + col));
        }
    }

    for (let row = 0; row <= 3; row++) {
        for (let col = 0; col <= 3; col++) {
            winningCombos.push(Array.from({ length: 5 }, (_, i) => (row + i) * 8 + col + i));
        }
    }


    for (let row = 7; row >= 4; row--) {
        for (let col = 0; col <= 3; col++) {
            winningCombos.push(Array.from({ length: 5 }, (_, i) => (row - i) * 8 + col + i));
        }
    }

    return winningCombos;
}
