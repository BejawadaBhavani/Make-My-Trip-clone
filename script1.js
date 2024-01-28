const slides = document.querySelectorAll(".unlock_photo");
        var count = 0;
    
        slides.forEach(
            (slide, index) => {
                slide.style.left = `${index * 100}%`;
            }
        );
    
        const goPrev = () => {
            if (count > 0) {
                count--;
                slideImage();
            }
        };
    
        const goNext = () => {
            if (count < slides.length - 5) {
                count++;
                slideImage();
            }
        };
    
        const slideImage = () => {
            slides.forEach(
                slide => (slide.style.transform = `translateX(-${count * 100}%)`)
            )};
