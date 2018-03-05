// Task from https://www.geeksforgeeks.org/program-generate-possible-valid-ip-addresses-given-string/
// Given a string containing only digits, restore it by returning all possible valid IP address combinations.
//
// Example:
// Input : 25525511135
// Output : [“255.255.11.135”, “255.255.111.35”]
//

(function () {
    function getValidIP(str) {
        const result = [];
        const length = str.length;
        
        check(0, 0, '');

        function check(start, level, previous){
            let i = 0;
            let num;

            if (level === 3) {
                num = str.substring(start);
                if (num && num < 256) {
                    result.push(`${previous}.${num}`);
                }
                return;                
            }
            num = str.substring(start, start + 1);
            if (num == 0) {
                check(start + 1, level + 1, level === 0 ? `${num}`: `${previous}.${num}`);
            } else {
                while (num.length < 4 && num < 256 && start + i + 1 < length) {
                    check(start + i + 1, level + 1, level === 0 ? `${num}`: `${previous}.${num}`);
                    i++;
                    num = str.substring(start, start + i + 1);
                }
            }
        }

        return result;
    }

    console.log('12345:')
    console.time('1-1');
    console.log(getValidIP('12345'));
    console.timeEnd('1-1');    

    console.log('1234:')
    console.time('1-2');    
    console.log(getValidIP('1234'));
    console.timeEnd('1-2');    
    
    console.log('2555011135:')
    console.time('1-3');
    console.log(getValidIP('2555011135'));
    console.timeEnd('1-3');    
    
    console.log('222011135:')
    console.time('1-4');
    console.log(getValidIP('222011135'));
    console.timeEnd('1-4');    
})();
