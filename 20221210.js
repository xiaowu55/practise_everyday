/*

给定一个整数数组nums和一个目标值target，
请你在该数组中找出和为目标值的那两个整数，
并返回他们的数组下标。




解法：遍历数组中的每一个元素。若值等于 target - nums 返回

*/


const twoSum = function (nums,target){
	for(let i = 0;i < nums.length; i++){
	for(let j = i + 1;j < nums.length;j){
		if (nums[j] === target - nums[i]) {
			return [i,j];
		}
	}
	}
}

console.log(twoSum([20,20,20,120,13],40));

