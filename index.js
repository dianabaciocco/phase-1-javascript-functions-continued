// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activityMonday="go to the office") {
    return `This Monday, I will ${activityMonday}.`;
}
function wrapAdjective(adjective="*") {
        function insideFunction(adjectiveB="special") {
           return `You are ${adjective}${adjectiveB}${adjective}!`
        }
        return insideFunction
}
wrapAdjective("%")("a dedicated programmer")