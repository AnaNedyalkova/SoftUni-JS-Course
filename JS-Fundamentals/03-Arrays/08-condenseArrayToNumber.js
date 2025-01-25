function condenseArrayToNumber(nums) {  
    
    while(nums.length > 1) {    // want only one number left
         let condensed = [];
         
         for (let i = 0; i < nums.length - 1; i++) { // nums.length -1 -> this is the size of condensed[]
                condensed[i] = nums[i] + nums[i + 1]; //sum the number and the next number      
            }  
            nums = condensed; //update nums Array
        }
        console.log(nums[0]);
    }

condenseArrayToNumber([2,10,3]);


