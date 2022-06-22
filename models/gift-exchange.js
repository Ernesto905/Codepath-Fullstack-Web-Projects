var {BadRequestError} = require("../utils/errors")

module.exports = class GiftExchange {


    static pairs(names) {
        
        if (names.length % 2 != 0) {
            throw new BadRequestError('Should be Even')
        } 
        names = names.sort(() => Math.random() - 0.5)

        let pairedNames = []

        while(names.length > 0) {
            const chunk = names.splice(0, 2);
            pairedNames.push(chunk);
        }
        return pairedNames
    }

    static traditional(names) {
        let ourNewArray = []
        if (names.length % 2 != 0) {
            throw new BadRequestError('Should be Even')
        } else {
            var arr1 = names.slice(), // copy array
                arr2 = names.slice(); // copy array again

            arr1.sort(function() { return 0.5 - Math.random();}); // shuffle arrays
            arr2.sort(function() { return 0.5 - Math.random();});

        

            while (arr1.length) {
                
                var name1 = arr1.pop(), // get the last value of arr1
                    name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
                    //        ^^ if the first value is the same as name1, 
                    //           get the last value, otherwise get the first

                
                ourNewArray.push([name1, name2])
            }
            
        }
        let ourSentece = []
        
        ourNewArray.forEach((item) => 
            ourSentece.push(item[0] + " is giving a gift to " + item[1])
        )
        
        return ourSentece
    }

    
}

