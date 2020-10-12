let nums = [1,2,3,6,9,8,7,4];
let ids = [1,2,3,6,9,8,7,4];
for(var i=1;i<10;i++){

    var element = document.createElement("input");
    element.type="button";
    element.value=i;
    element.id ="btn"+i;
    element.setAttribute("style","width:30%;height:48px;font-size:24px");
    var btndiv = document.getElementById("btns");
    btndiv.append(element);

}
document.getElementById('btn5').addEventListener("click",function(){
     nums.unshift(nums.pop());  
    for(let j =0;j<=7;j++){
        document.getElementById("btn"+ids[j]).value=nums[j];
    }
});
