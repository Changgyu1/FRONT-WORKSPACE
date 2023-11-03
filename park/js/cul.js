
let total = 0;

// 추가 버튼이 클릭될 때 마다 실행되는 함수
function addItem() {
    // document.getElementById : 입력하는 곳의 값과 목록을 관리할 값을 가져옴
    const itemInput = document.getElementById("item");
    const priceInput = document.getElementById("price");
    const conutInput = document.getElementById("count");
    const itemList = document.getElementById("itemList");
    const totalPrice = document.getElementById("totalPrice");

    // 각 id 값의 value(=값)을 알기위해서 value를 붙여줌
    const itemValue = itemInput.value;
    const priceValue = parseInt(priceInput.value);
    // const priceValue = parseInt(priceInput.value);
    // parseInt : 글자 값이나 다른 어떤 값을 정수로 변경해주는 메서드
    // input type ="number" 작성해줘서 parseInt를 사용하지 않아도 숫자 값이 들어가지만
    // 다양한 변수를 막아주기 위해서 parseInt를 사용하는 것을 권장함
    const conutValue = parseInt(conutInput.value);

    // 물건의 총 가격을 계산하고 그 값을 저장하는 곳
    const totalPriceCount = priceValue * conutValue;

    // 새로운 물건 항목을 생성한 후, 해당 항목을 목록에 물건을 추가
    const listItem = document.createElement("li");

    // textContent : 물건이름 가격 갯수 총 가격을 보여줌
    // textContent : 텍스트 내용을 나타낼 수 있게 해주는 속성
    listItem.textContent = `${itemValue} | 가격 : ${priceValue}원 X ${conutValue} = ${totalPriceCount} 원`;
    itemList.appendChild(listItem);

    total += totalPriceCount;
    totalPrice.textContent = total + "원";

    itemInput.value = "";
    priceInput.value = "0";
    conutInput.value = "1";
}
