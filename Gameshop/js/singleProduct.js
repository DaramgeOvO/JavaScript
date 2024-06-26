const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log("Game ID : ", id);

const url = "http://localhost:8080/products/" + id;

axios
.get(url)
.then((Response)=> {
    console.log("데이터: ", Response.data);
    displaySingleProduct(Response.data);
})
.catch((error)=> {
    console.log("에러 발생: ", error);
});

function displaySingleProduct(data) {
    const product = document.querySelector(".singleProduct");
    //태그 요소 생성
    const game = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("p");
    const genre = document.createElement("p");
    const price = document.createElement("p");
    const text = document.createElement("p");
    const lowBox = document.createElement("div");
    const left = document.createElement("div");
    const right = document.createElement("div");
    const cartBtn = document.createElement("div");
    // 클래스 이름 생성
    game.classList.add("game");
    img.classList.add("image");
    lowBox.classList.add("low-box");
    cartBtn.classList.add("cartBtn");
    // 태그 속성 추가
    img.src = data.image;
    title.textContent = "게임 타이틀 : " + data.title;
    genre.textContent = "게임 장르 : " + data.genre;
    price.textContent = "게임 가격 : " + data.price + "원";
    text.textContent = data.text;
    game.style.setProperty("box-shadow", "initial", "important");
    game.style.setProperty("transform", "initial", "important");
    game.style.setProperty("cursor", "initial", "important");
    cartBtn.textContent = "장바구니 담기";

    // appendChild 태그 부모자식 위치 설정
    right.appendChild(cartBtn);
    left.appendChild(title);
    left.appendChild(genre);
    left.appendChild(price);
    left.appendChild(text);
    lowBox.appendChild(left);
    lowBox.appendChild(right);
    game.appendChild(img);
    game.appendChild(lowBox);
    product.appendChild(game);

    document.querySelector(".cartBtn").addEventListener("click", ()=>{
        sessionCurrent(data);
    });
}



function sessionCurrent(data) {
    axios
    .get("http://localhost:8080/user/current",{withCredentials: true})
    .then((response) =>{
        console.log("데이터:" , response);
        if(response.status == 200) {
        const userId = response.data.userId;
        let cartItems = JSON.parse(localStorage.getItem(userId));
        if(!cartItems){
            cartItems =[];
        }
        cartItems.push(data);
        localStorage.setItem(userId, JSON.stringify(cartItems));
        }
    })
    .catch((error) => {
        console.log("에러 발생: ", error);
        alert("로그인해주세요.");
    })
};
