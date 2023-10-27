window.onload = ()=>{

    go.onclick = ()=>{
        calculate(
            new Date (checkIn.value),
            Number(nights.value),
            document.querySelector("input[name=roomType]:checked").value,
            adult.value,
            document.querySelector("input[name=discounts]:checked").value
        );

        output.innerText = 
        Results:
 original Room cost: ${originalroomcost}
 Discount Amount: ${discountAmount}
 Discount Room Cost:{discountedRoomCost} 
 tax Amount$: {taxAmount}
 total cost: ${totalCost}
 
 `;
    }
}