const gameContainer = document.querySelector('.container');
const userResult = document.querySelector('.user_result');
const cpuResult = document.querySelector('.cpu_result');
const result = document.querySelector('.result');
const optionImages = document.querySelectorAll('.option_image');

// console.log(gameContainer,userResult,cpuResult,result,optionImages);

optionImages.forEach((image,index) => {
    image.addEventListener('click',(e) => {
        image.classList.add('active');

        optionImages.forEach((image2,index2)=>{
            //if the indexs are not same then we should remove the other unmatched options
            index !== index2 && image2.classList.remove('active');
        });
        //get the source code for the selected image
        let imageSrc = e.target.querySelector('img').src;
        //set the user image to the selected images from the options
        userResult.src = imageSrc;
        // console.log(userResult.src);
        // console.log(imageSrc)   
    });
});