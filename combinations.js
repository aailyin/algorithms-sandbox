// input: array like this [[1,2,3], [4,5], [6]]
// output: [[1,4,6], [1,5,6], [2,4,6], [2,5,6], [3,4,6], [3,5,6]] - all combinations of elements
//
//         4 - 6
//       /
//     1 - 5 - 6
//   /   
// * - 2 - // the same tree as for 1  
//   \ 
//     3 - // the same tree as for 1
//

(function (){
    function getElements(arr) {
        let output = [];

        arr[0].forEach(value => {
            addValue(1, '' + value);
        });
        
        function addValue(index, result) {
            if (index >= arr.length) {
                output.push(result);
                return;
            }
        
            if (arr[index].length === 1) {
                result += ',' + arr[index][0];
                addValue(++index, result);
            } else {
                arr[index].forEach(value => {
                    addValue(index + 1, result + ',' + value);
                });
            }
        }

        return output.map(str => str.split(','));
    }
    
    console.log(getElements([[1,2,3], [4,5], [6]]));
})();
