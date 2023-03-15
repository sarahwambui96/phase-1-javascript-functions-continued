//  defines saturdayFun function
function saturdayFun( activity ="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()
saturdayFun("bathe my dog")

// defines mondayWork function
function mondayWork( activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork()
mondayWork("work from home")

//defines wrapAdjective function
let wrapAdjective = function(style="*") {
    return function(word="special") {
      return `You are ${style}${word}${style}!`
    }
  }
  wrapAdjective("*") ("a hard worker")
  wrapAdjective("||") ("a dedicated programmer")
