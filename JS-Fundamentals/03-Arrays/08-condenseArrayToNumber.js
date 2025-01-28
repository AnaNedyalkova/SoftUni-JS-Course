function condenseArrayToNumber(nums) {  
    
    while(nums.length > 1) {    // want only one number left in the array, if more --> do the loop
         let condensed = [];
         
         for (let i = 0; i < nums.length - 1; i++) { // nums.length -1 -> this is the size of condensed[]
                condensed[i] = nums[i] + nums[i + 1]; //sum the number and the next number  (example = 2+10 =12) and place it in condensed[]
            }  
            nums = condensed; //update nums Array
        }
        console.log(nums[0]);
    }

condenseArrayToNumber([2,10,3]);


