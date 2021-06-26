function findMinAndRemove(array){
    let min = array[0];
    let minIdx = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIdx = i;
        }
    }
    return array.splice(minIdx, 1);
}

function selectionSort(array){
    const sorted = [];
    while (array.length) {
        let min = findMinAndRemove(array);
        sorted.push(...min);
    }
    return sorted;
}
