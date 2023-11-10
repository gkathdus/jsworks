// main.js
// 입장객 수에 따른 행과 열, 줄 수 계산
let customer, colNum, rowNum;

customer = 21;
colNum = 5;

// 나머지의 유무에 따른 조건문
if(customer % colNum == 0){
    rowNum = customer / colNum; // 몫
}else {
    rowNum = parseInt(customer / colNum) + 1;
}

document.write("<table>")
// 좌석 번호 배치
for(let i = 0; i < rowNum; i++){
    document.write("<tr>");
    for(let j = 1; j <= colNum; j++){
        let seatNum = colNum * i + j;

        // 좌석번호가 고객수보다 크면 빠져나옴
        if(seatNum > customer)
            break;
        document.write("<td>좌석" + seatNum + "</td>");
    }
    document.write("<tr>");
}
document.write("</table>");