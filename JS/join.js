//패스워드 확인 //////////////////////////////////////////////////////////////
function fnPWChk() {
    var userPW = document.getElementById("PW").value;
    var userRePW = document.getElementById("RePW").value;

    if(userPW == userRePW && userPW != "") {
        //alert("일치");
        document.getElementById("resPW").innerText = "패스워드가 일치합니다.";
        document.getElementById("resPW").style.fontSize = "12px";
        document.getElementById("resPW").style.width = "200px";
        document.getElementById("resPW").style.color = "blue";
    } else if(userPW != userRePW && userPW != "") {
        //alert("불일치");
        document.getElementById("resPW").innerHTML = "패스워드가 불일치합니다.";
        document.getElementById("resPW").style.fontSize = "12px";
        document.getElementById("resPW").style.width = "200px";
        document.getElementById("resPW").style.color = "red";
    } else if(userPW == ""){
        document.getElementById("resPW").innerText = "패스워드를 입력하세요.";
        document.getElementById("resPW").style.fontSize = "12px";
        document.getElementById("resPW").style.width = "200px";
        document.getElementById("resPW").style.color = "black";
    } else if(userPW == "" && userRePW == ""){
        document.getElementById("resPW").innerText = "";
    }
}

//SELECT태그 1970년부터 현재 년도까지 생성////////////////////////////
var now = new Date();
var year = now.getFullYear();
var baseYear = 1970;
var resYear

for(baseYear; baseYear <= year; baseYear++) {
    if(baseYear == year) {
        resYear += "<option selected value=" + baseYear + " id=" + baseYear + ">" + baseYear + "년 </option>"
    } else {
        resYear += "<option value=" + baseYear + " id=" + baseYear + ">" + baseYear + "년</option>"
    }
}
document.getElementById("year").innerHTML = resYear;
//////////////////////////////////////////////////////////////////////////


//SELECT태그 월 생성//////////////////////////////////////////////////////////
var resMonth;

for(var firstMonth = 1; firstMonth <= 12; firstMonth++) {
    resMonth += "<option value=" + firstMonth + ">" + firstMonth + " 월</option>"
}
document.getElementById("month").innerHTML = resMonth;
/////////////////////////////////////////////////////////////////////////////////////


//SELECT태그 일 생성//////////////////////////////////////////////////////////
var month = document.getElementById("month").value;
var selectYear = document.getElementById("year").value;
var resDay;

if(month == 4 || month == 6 || month == 9 || month == 11) {
    for(var firstDay = 1; firstDay <= 30; firstDay++) {
        resDay += "<option value=" + firstDay + ">" + firstDay + " 일</option>"
    }
} else if(month == 2) {
    if((selectYear % 4 == 0 && selectYear % 100 != 0) || selectYear % 400 == 0) {
        for(var firstDay = 1; firstDay <= 29; firstDay++) {
            resDay += "<option value=" + firstDay + ">" + firstDay + " 일</option>"
        }
    } else {
        for(var firstDay = 1; firstDay <= 28; firstDay++) {
            resDay += "<option value=" + firstDay + ">" + firstDay + " 일</option>"
        }
    }
} else {
    for(var firstDay = 1; firstDay <= 31; firstDay++) {
        resDay += "<option value=" + firstDay + ">" + firstDay + " 일</option>"
    }
}

document.getElementById("day").innerHTML = resDay;
//document.getElementById("day").innerHTML = "<option>일</option>";

//년도, 월 값 변경 시 실행되는 함수
function selectDay() {
    var month = document.getElementById("month").value;
    var selectYear = document.getElementById("year").value;
    var resDay;

    if(month == 4 || month == 6 || month == 9 || month == 11) {
        for(var firstDay = 1; firstDay <= 30; firstDay++) {
            resDay += "<option value=" + firstDay + ">" + firstDay + " 일</option>";
        }
    } else if(month == 2) {
        if((selectYear % 4 == 0 && selectYear % 100 != 0) || selectYear % 400 == 0) {
            for(var firstDay = 1; firstDay <= 29; firstDay++) {
                resDay += "<option value=" + firstDay + ">" + firstDay + " 일</option>";
            }
        } else {
            for(var firstDay = 1; firstDay <= 28; firstDay++) {
                resDay += "<option value=" + firstDay + ">" + firstDay + " 일</option>";
            }
        }
    } else {
        for(var firstDay = 1; firstDay <= 31; firstDay++) {
            resDay += "<option value=" + firstDay + ">" + firstDay + " 일</option>";
        }
    }

    document.getElementById("day").innerHTML = resDay;
}
/////////////////////////////////////////////////////////////////////////////////////


function fnCheckbox(chkID) {
    var chkValue = document.getElementById(chkID).value;

    if(chkID == "check1" || chkID == "check2" || chkID == "check3" || chkID == "check4") {
        if(chkValue == "unchecked" ) {
            document.getElementById(chkID).checked = true;
            document.getElementById(chkID).value = "checked";
            //하위 체크박스 전부 선택 시 전체동의 체크박스 true
            if(document.getElementById("check1").value == "checked" &&
            document.getElementById("check2").value == "checked" &&
            document.getElementById("check3").value == "checked" &&
            document.getElementById("check4").value == "checked"){
                document.getElementById("totalAgree").checked = true
                document.getElementById("totalAgree").value = "checked";
            }

        } else if(chkValue == "checked") {
            document.getElementById(chkID).value = "unchecked";
            document.getElementById(chkID).checked = false;
            document.getElementById("totalAgree").checked = false;
            document.getElementById("totalAgree").value = "unchecked";
        }
    } else {
        if(chkValue == "unchecked" ) {
            document.getElementById(chkID).checked = true;
            document.getElementById(chkID).value = "checked";
        } else {
            document.getElementById(chkID).value = "unchecked";
            document.getElementById(chkID).checked = false;
        }
    }
}

//전체동의 체그박스 선택 시 하위 체크박스 전부 true
function fnTotalCheckbox() {
    var totalAgree = document.getElementById("totalAgree").value;

    if(totalAgree == "unchecked" ) {
        document.getElementById("totalAgree").value = "checked";
        document.getElementById("check1").value = "checked";
        document.getElementById("check1").checked = true;
        document.getElementById("check2").value = "checked";
        document.getElementById("check2").checked = true;
        document.getElementById("check3").value = "checked";
        document.getElementById("check3").checked = true;
        document.getElementById("check4").value = "checked";
        document.getElementById("check4").checked = true;
    } else if(totalAgree == "checked") {
        document.getElementById("totalAgree").value = "unchecked";
        document.getElementById("check1").value = "unchecked";
        document.getElementById("check1").checked = false;
        document.getElementById("check2").value = "unchecked";
        document.getElementById("check2").checked = false;
        document.getElementById("check3").value = "unchecked";
        document.getElementById("check3").checked = false;
        document.getElementById("check4").value = "unchecked";
        document.getElementById("check4").checked = false;
    }
}

//회원가입 양식 제출
function fnFrmSubmit() {
    if(document.getElementById("ageCheckbox").checked == true){
        var mtd_Type = "get";
        document.getElementById("frm").method = mtd_Type;
        document.getElementById("frm").action = "https://www.google.co.kr";
        document.getElementById("frm").submit();
    } else {
        alert("필수 체크사항을 선택하세요");
    }

}


