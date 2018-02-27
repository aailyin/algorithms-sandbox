(function (){
    let input = [[1,2,3], [4,5], [6]];

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

    console.log(output);
})();
