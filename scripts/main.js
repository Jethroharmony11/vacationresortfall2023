//connect to the html

//INPUTS

//OUTPUT
let originalroomcost = 0;
let discountAmount =0; //discount, if any
let discountedRoomCost = 0;
let taxAmount = 0;
let totalCost =0;
const TAX_RATE = 0.12;

//INPUTS PARAMENTERS
function isPeak(checkInDate){
    const JUNE = 5 
    const AUDUST = 7
    const m = checkInDate.getMonth()//0-11
    return m >= JUNE && m <= AUGUST

}
function geteRate(roomType, checkInDate){
    let rate = 150; // set default for non-peak non-suite
    const peak = ispeak(checkInDate)
    if (peak){
        rate = 250;
    }

    if(roomType !)

    }
    return rate;

    function getDiscountrate(discountType){
        let discounPercent = 0.0; // default for none
        return discountPercent;
}
function calculate(nights, roomType, chidrenQuantity, discountType){
    let baseRate = gerRate(roomType, checkInDate);
    originaRoomCost = baseRate * nights;
    let discountpercent = getDiscountRate(discountType)
    discountAmount = originalRoomCost* discountpercent;
    discountedRoomcCost = originaRoomCost - discountAmount;
    taxAmount = discountedRoomCost * discountpercent;
    totalCost = discountedRoomCost + taxAmount;

    calculate(new Date(), 2, "suite", 2, "senior")
    calculate(new Date(), 20, "suite", 2, "senior")
    console.log(originalRoomCost,discountAmount, discountedRoomCost, taxAmount, totalCost)
    

}