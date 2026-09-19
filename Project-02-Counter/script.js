function increaseLike(){
    const likeCount = document.getElementById("likeCount");

    const currValue = likeCount.textContent;

    const count = Number(currValue);

    const newCount = count + 1;

    likeCount.textContent = newCount;
}
function decreaseLike(){
    const likeCount = document.getElementById("likeCount");

    const currValue = likeCount.textContent;

    const count = Number(currValue);

    let NewCount = count;
    if(count > 0){
        NewCount = count - 1;
    }

    likeCount.textContent = NewCount;
}