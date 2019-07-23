class Print {
    constructor(contents, priority) {
        this.contents = contents;
        this.priority = priority;
    }
}

// let printList = [
//     new Print('A', 2),
//     new Print('B', 1),
//     new Print('C', 3),
//     new Print('D', 2)
// ];
let printList = [
    new Print('A', 1),
    new Print('B', 1),
    new Print('C', 9),
    new Print('D', 1),
    new Print('E', 1),
    new Print('F', 1)
];
printOrderByLocation(printList, 0);

function printOrderByLocation(printList, location) {
    const index = printList[location];
    sortArray(printList);
    for(let i = 0; i < printList.length; i++){
        console.log(printList[i]);
        if(index === printList[i]) {
            console.log(i+1);
        }
    }
}

function sortArray(printList) {
    for(let i = 0; i < printList.length; i++){
        for(let j = i + 1; j < printList.length; j++) {
            if(j !== printList.length && printList[i].priority < printList[j].priority) {
                let dummy = printList[i];
                printList.splice(i,1);
                printList.push(dummy);
    
                return sortArray(printList);
            }
        }
    }
    return printList;
}