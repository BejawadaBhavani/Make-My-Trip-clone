// const slides = document.querySelectorAll(".unlock_photo");
//         var count = 0;
    
//         slides.forEach(
//             (slide, index) => {
//                 slide.style.left = `${index * 100}%`;
//             }
//         );
    
//         const goPrev = () => {
//             if (count > 0) {
//                 count--;
//                 slideImage();
//             }
//         };
    
//         const goNext = () => {
//             if (count < slides.length - 5) {
//                 count++;
//                 slideImage();
//             }
//         };
    
//         const slideImage = () => {
//             slides.forEach(
//                 slide => (slide.style.transform = `translateX(-${count * 100}%)`)
//             )};
var slider_img = document.querySelectorAll('.unlock_photo')
let images=[
    {photo:1,
    imgurl:"unlock/m_Bhandardara_l_568_852.jpg",
    description:" Photo 1 "
    }
    ,{
        photo:2,
        imgurl:"travels/m_Shoghi_l_667_1000.jpg",
        description:"2Photo"
    },
    {
        photo:3,
        imgurl:"travels/m_Tadoba_l_587_880.jpg",
        description:"3Photo"
    },
    {
        photo:4,
        imgurl:"travels/m_destination-saputara-landscape_l_400_640.jpg",
        description:"4Photo"
    },
    {
        photo:5,
        imgurl:"travels/m_Dapoli_l_703_937.jpg",
        description:"5Photo"
    },
    {
        photo:6,
        imgurl:"travels/m_Amritsar_activity_heritage_l_684_1026.jpg",
        description:"6Photo"
    },
    {
        photo:7,
        imgurl:"travels/m_Australia_destination_6_l_361_641.jpg",
        description:"7Photo"
    }
];
let i=0;
const goPrev = () => {
   alert("previous button")
};
