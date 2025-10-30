console.log('jai shree ram');

// //ningative number ak side and positive number ak side.
// let arr = [1,2,3,-4,-5,-6,5,6,-40];

// let i = 0 , j = 0
// while(i < arr.length){
//     if(arr[i] < 0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++
//     }
//     i++
    
// }
// console.log(arr);//[-4, -5, -6, -40, 2, 3, 5, 6, 1]





// //ab hame apne array ki values ko left side rotate karna hai jaise [1,2,3] hai to [2,3,1] ho jayga left side ye apni jagaha ko badal lenge sab.

// let arr = [1,2,3,4,5];
// let copy = arr[0];

// for(let i = 0; i < arr.length-1; i++){//yaha par ham ham length ko arr -2 tak chala rhe hai kyuki ham arr-1 tak to normaly chalta hai lekin ham esme i+1 bhi kar rhe hai bad me to hame last me ak bar or kam chalana hoga esliye ham -1 bar chala rhe hai taki -2 bar chale kyuki < orperator -1 tak hi chalta hai ham extra -1 laga rhe hai taki -2 tak chale.
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = copy;
// console.log(arr);//[2, 3, 4, 5, 1]


// //hamne yaha par static code likha hai agar conditoin ye aati hai ki ham number ko right ya left dono side rotate kar sakte hai or sirf 1 bar nhi hame chahe to 2 ya 3 bar bhi rotate kar sakte hai to es logic par hame program banana hai. --

// let arr = [1,2,3,4,5];

// let k = Number(prompt('Enter a number '))//7
// k = k%arr.length;
// let count = 0;//ye esliye kar rhe hai taki dekh sake ki sahi me 7 input dene par loop 2 bar chal rha hai ya nhi.

// for(let j = 1; j <= k; j++){
//     count++
//     let copy = arr[0];

//     for(let i = 0; i < arr.length-1; i++){
//         arr[i] = arr[i+1];
//     }
//     arr[arr.length-1] = copy;

// }
// console.log(arr);//[3, 4, 5, 1, 2]
// console.log(count);//2
// //bas ba user jo value dega utni bar loop chalega or unti bar values left side shift hongi.Lekin agar hame yaha par kuchh handle karna chahiye jaise mana agar k ki vale 5 aati hai to 5 to ghum ke firse apni jagaha par chala jayga to agar k = 5 hai to hame loop ko chalana hi kyu hai jab sem hi result aayga jo abhi bina rotation ke hai to ham loop chala kar load kyu de. or agar k = 7 hai to loop ko to 2 bar hi chalna chahiye .to yaha par ham ese handle karne ke liye (k = k%arr.length) kar denge agar k me 7 hai or hamari lenght hai 5 to 7%5 = 2 aajayga or loop 2 bar hi chalega to bas kam ho gya.

//kam to ho gya lekin ye bilkul achhi aproch nhi hai kyuki loop ke andar loop chal rha hai agar k value 4 hogi to loop 4 bar chalega lekin uske andar ka loop 20 bar chalega ya array agar or badi hue to or jada bar chalega to ye achhi aproch nhi hai.

//es code ko thoda achha banate hai.

// let arr = [1,2,3,4,5];
// let temp = new Array(arr.length);

// let k = Number(prompt('Enter a number'));
// k = k % arr.length;

// for(let i = 0; i < arr.length; i++){
//     temp[i] = arr[(i+k) % arr.length];//ye calculation pahale se bani hai hame bas ese samjhna hai or use karna hai.
// }
// console.log(temp);
// //AB YE GOOD CODE HAI TIME EFICIANT BHI HAI .



//ab kya ye ak achha code hai time eficiant hai to nhi ye bhi achha code nhi hai.--- kyu? - kyuki ham yaha par axtara lenght le rhe hai agar hamari array 2000 lenght ki haito hame extra 2000 lenght ki 2nd array leni padegi esliye.
//esase achha kocode likhne ke liye hame bas sri chijo ko reverse karna smart tarike se .
//[1,2,3,4,5] hai ham 0 se k-1 index ki values ko rev karnege k = 2 hai agar to 1 or 2 ko rev karenge to [2,1,3,4,5] ok ab 3 se 5 tak ki values ko rev karenge to [2,1,5,4,3] ho jyaga ab puri array ko ak bar or rev karenge to [3,4,5,1,2] aa chuka hai hamara result.

// let arr = [1,2,3,4,5]
// let k = Number(prompt('Enter a Number'));
// k = k % arr.length;

// rev(0 , k-1);
// rev(k , arr.length-1);
// rev(0 , arr.length-1);

// function rev(i , j){
//     while(i<j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++
//         j--
//     }
// }
// console.log(arr);//[3, 4, 5, 1, 2]
// //kam ho chuka hai hame 3 bar array ko alg alg index se reverse karna tha esliye hamne ak reverse fun bana liya taki usko bar bar use kar sake. or kam ho chuka hai bina sapce liye bina nexted loop chalay.



// //right rotation ---------------

// let arr = [1,2,3,4,5]
// let k = Number(prompt('Enter a Number'));
// k = k % arr.length;

// //bas hame yahi par changes karna hai fun apna kam kar dega.
// rev(0 , arr.length-1);
// rev(0 , k-1);
// rev(k , arr.length-1);

// function rev(i , j){
//     while(i<j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++
//         j--
//     }
// }
// console.log(arr);//[4, 5, 1, 2, 3]





//hame array me se unique values ko chhatna hai yani dublicate values ko hatana hai.
let num = [1,1,2,3,4,4,5,6,6,3,5,3];

// function removeDublicates(Num) {
//     let j = 1;

//     for(let i = 0; i < Num.length-1; i++){
//         if(Num[i] != Num[i+1]){
//             Num[j] = Num[i+1];
//             j++
//         }
        
//     }
//     return j;
    
// }

// console.log(removeDublicates(num));


// //Agar mai es kam ko set ki madata se karu to  --- 

// function uniqueNum(num) {
//     let number = new Set(num);
//     console.log(number)
// }

// uniqueNum(num);



//murge shorted 2 arrays -- 
// let arr1 = [1,4,6,5];
// let arr2 = [2,3,7,8];

// let newArry = []

// let mainArray = arr1.map((res) => newArry.push(res));
// let mainArray2 = arr2.map((res) => newArry.push(res));

// let finalArray = newArry.sort();
// console.log(finalArray);//[1, 2, 3, 4, 5, 6, 7, 8]




// //Best time to bay and sell stocks ---- [7,1,5,3,6,4] ye array hai hamara 1st day ka stoc hai 7 2nd day ka hai 1 fir 5 and sooooo on ham roj stoc kharidenge lekin hame sme se profit calculate karna hai. to ham sabse pahale hame ye chack karna hai ki kay meri current element minimum hai ki nhi to man lete hai ki abhi 1st element hi hamari min element hai to kya 7 < 7 se nhi ye to barabar hai ab pointer aage jayga or kya 1 < 7 se to ha to ab ham min = 1 kar denge fir kya 1 < 5 se nhi ab 1 - 5 = 4 karenge or 4 hamara profit ho jayga fir kya 1 < 3 se nhi 1-3 = 2 ab chack karenge ki kya 2 > 5 se nhi to vaha par par 5 hi rhega ham abhi bhi proft 5 hi hai badha nhi hai to aise ham sabko calculate karnege jab jad aprofit hoga to add karenge nhi to nhi karenge.Ans - 5 aana chahiye.

// let arr = [7,1,5,3,6,4];
// function maxProfit(arr) {
//     let maxProfit = 0;
//     let min = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//         let profit = arr[i] - min;
//         maxProfit = Math.max(profit , maxProfit);
//     }
//     return maxProfit
// }

// console.log(maxProfit(arr));//5





//sort color ---- 

// let arr = [1,2,1,1,0,0,2,0,2,2,1,0];

// for(let i = 0; i < arr.length; i++){
//     let j = 0; 
//     let k = arr.length-1;

//     if(arr[i] === 0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++
//     }
//     else if(arr[i] === 2){
//         let temp2 = arr[i];
//         arr[i] = arr[k];
//         arr[k] = temp2;
//         k--
//     }
// }
// console.log(arr);
// //es code me i hamesa chal rhi hai lekin k se jab i swap hogi tab hame  i ko ++ nhi karna hai kyuki mana agar k par 0 hoga to i or k apas me swap ho jaynge or i++ ho jayga to jo 0 swap huaa hai vo vahi padha rha jayga esliye ham k se waping ke bad ++ nhi karenge taki dobara us element me conditin check ho sake to esko ham while loop se kar ke dekhte hai.


// let arr = [1,2,1,1,1,2,0,0,2,0,2,0];
// let i = 0;
// let j = 0;
// let k = arr.length-1;

// while(i <= k){
//     if(arr[i] === 0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++
//         j++
//     }
//     else if(arr[i] === 2){
//         let temp2 = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp2;
//         k--
//     }
//     else i++;//else lagana jaruri hai nhilagynge to i hamesa ++ hoga jo hame nhi karna hai.

// }
// console.log(arr)





//maximum subarray. ---- Subarray kya hota hai ? -- sub array continues part hota hai array ka jaise mana ahamare pass [1,2,3,4,5,6] tal lo arr jao to 1 se 4 tak subarray hai 1 se 2 tak 2 se 4 tak 1 se 6 tak 4 se 5 tak 2 se 6 tak yani jaha se suru ho vha se kahi tak continues jay ye nhi ki suru me 1 or 2 or last me 5 6 lelenge ye sub array nhi hai continuse jaha ja rha vo sub array hai. to sub array esme kcuhh bhi ho sakta hai puri array khud ak sub array ho sakti hai.
//to sawal ye hai ki hame ak aisi sub array nikalni hai jo sabse badi hai. -- this array - [-2,1,-3,4,-1,2,1,-5,4];
//esme se max value nikalne ke liye ham sabse pahale ak let max = -Infinity var banaynge or ak sum var banaynge jisme ham array ki values ko sum karenge or agar sum ki value badi hoti hai -infinity se to us val ko max me dal denge or sum ko vapas 0 kar denge taki agla number agar positive me aay to - ho kar kam na ho jay.

// let arr = [-2,1,-3,4,-1,2,1,-5,4];
// let max = -Infinity;//ye keyword hai jo js me hi paya jata hai.
// let Sum = 0;

// let output = arr.map((res) => {
//     Sum += res;
//     max = Math.max(max , Sum);
//     if(Sum < 0) Sum = 0;
// });

// console.log(max);//6


//dono sahi hai jo aasan lage vo kar sakte hai.


// for(let i = 0; i<arr.length; i++){
//     Sum += arr[i];
//     max = Math.max(max , Sum);
//     if(Sum < 0) Sum = 0;

// }
// console.log(max);//6;






// //majority elements --- Hame ak array milegi jiski sabse pahale ham length nikalenge or vo (.) nhi rhegi to mana hamare arr ki lenght hai 7 to ese ham 7/2 karenge to ans aayga 3 ok to ab jo ans aaya 3 etni hi bar koe element array me repeat huaa hai ya nhi ye chack karna hai or use print krana hai jaise -- [2,2,1,3,5,2,2] eslki length hai 7 to 7/2 = 3 aagya . Ab 3 bar se jada bar koe element array me repeat huaa hai to ha 2 4 bar repeat huaa hai to ans hoga 2. --- use array is this -- [2,2,1,1,1,2,2] --- es Q solve karne ke liye ham algoritham ka use karenge. jo niche hai.

// let nums = [2,2,1,1,1,2,2];
// let count = 1; 
// let ans = nums[0];//yaha par ham man rhe hai ki 1st element hi hamara asnwere hai.bas man rhe hai.

// for(let i = 1; i < nums.length; i++){
//     if(count === 0){
//         ans = nums[i];
//         count+1;
//     }
//     else if(nums[i] === ans) count+1;
//     else if(nums[i] !== ans) count-1;
// }

// console.log(ans);





//Trapping rain water ---- hamare pass kuchh khambhe hai jinke andar panni hai jaise trading ke candle hote hai n sqeare jaise lambe lambe vaise hi 5 khambhe hai usme upar se hamne panni bhara hai to hame total pani kitna bhara hai vo nikalna hai twist ye hai ki khambhe usme chhote bade hai unki size hai - [4,2,0,3,2,5] kucll 6 khambho ki jagha hai lekin esme 1 khali hai khambha nhi hai vaha par bas space hai to total pani nikalne ke liye hame sabse pahale left ki height and right ki hight nikalni hogi kyuki enke beech me hi to pani hoga ab hame andar jo khambhe hai unki height ke hisab se dekhna hai ki us khambhe ke upar kitna pani tika huaa hai. jaise 1st vale ki lambai hai 4 or 2nd vali ki 2 to ham 4 lenge ham right vala esliye nhi le rhe hai kyuki uski size 5 hai ham chhote vale ko lenge kyuki usase upar pani to tikega nhi usi ke level tak pani tikega esliye to 4 me se 2 ko -  kar denge yani 2nd khambhe par 2 point tak pani jama hai -- ab 3rd khambhe ki size hai 0 to 4 - 0 = 4 yani 4 point pani hai uske bad 4-3 yani 1 point pani hai 4-2 yani 2 point pani hai last me to 5 point vala khambha hai to 5 - 5 kar denge kyuki ham currente khambhe ko - kar rhe hai left ke chhote khambhe se.

// let hight = [4,2,0,3,2,5];
// let left = [4,4,4,4,4,5];//yha ham left side se jo sabse bada hai vo value nikal rhe hai.
// let right = [5,5,5,5,5,5];//yah right se jo bada hai vo nikal liya.
// //ab bas hame current (hight - left = result) karte huy jana hai or asnwere variable me result ko += karte jana hai.
// let result = 0
// for(let i = 0; i < hight.length; i++){
//     result += left[i] - hight[i];
// }
// console.log(result);//9 right answere.
//ye to normal static tarika hai ab dinemic tarika dekhte hai.






//example --- 
let hight = [4,2,0,3,2,5]
let trap = function(hight){
    let left = new Array(hight.length);
    let right = new Array(hight.length);
    let maxLeft = hight[0] , maxRight = hight[hight.length-1];
    left[0] = maxLeft , right[right.length-1] = maxRight;

    for(let i = 1; i < hight.length; i++){
        maxLeft = Math.max(hight[i] , maxLeft);
        left[i] = maxLeft;
    }

    for(let i = hight.length-2; i>= 0; i--){
        maxRight = Math.max(hight[i] , maxRight);
        right[i] = maxRight;
    }

    let answer = 0;
    for(let i = 0; i < hight.length; i++){
        answer += Math.min(left[i] , right[i]) - hight[i];
    }
    // return answer;
    console.log(answer)
}

trap(hight)//9