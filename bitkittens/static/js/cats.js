document.addEventListener("DOMContentLoaded", function() {
  const catsBtn = document.querySelector('.summon-cats');
  var catBoxes = document.querySelectorAll('.cat-box');

  catsBtn.addEventListener('click', () => {
    axios.get('http://bitkittens.herokuapp.com/cats.json')
      .then(resp => {
        let cats = resp.data.cats;

        cats.forEach((cat, index) => {
          catImg = document.createElement('img');
          catImg.src = cat.photo;
          catImg.alt = `Photo of ${cat.name}`;
          catBoxes[index].innerHTML = "";
          catBoxes[index].appendChild(catImg);
        })
      })
  })
});
