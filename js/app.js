document.body.insertAdjacentHTML(`beforeend`,                          

    `<section>                                     
    <img id="img_one"src="/concert.jpg" >
    <img class="img_two"src="/concert.jpg" >
    <img class="img_three"src="/concert.jpg" >
    </section>`);



    function click_one (details) {
Cookies.set(`image_url`, image_one)
    }

    let img_one = document.getElementById(`img_one`)
    img_one.addEventListener(`click`, click_one)

    

    // function click_two (details) {

    // }

    // let img_two = document.getElementById(`img_two`)
    // img_two.addEventListener(`click`, click_two)




    // function click_three (details) {

    // }

    // let img_three = document.getElementById(`img_three`)
    // img_three.addEventListener(`click`, click_three)




    let image_one = `src="/concert.jpg"`