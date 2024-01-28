// var slider_img = document.querySelector('.unlock_photo')
// var images=['unlock/m_Bhandardara_l_568_852.jpg','travels/m_Shoghi_l_667_1000.jpg','travels/m_Tadoba_l_587_880.jpg','travels/m_destination-saputara-landscape_l_400_640.jpgs','travels/m_Dapoli_l_703_937.jpg','travels/m_Amritsar_activity_heritage_l_684_1026.jpg','travels/m_destination-udupi-landscape_l_400_640.jpg'];
// var i=0;
// function prev(){
//     if(i<=0) i=images.length;
//     i--;
//     return set_Img();
// }
// function next(){
//     if(i>=images.length-1) i=-1
//     i++;
//     return set_Img();
// }
// function set_Img(){
//     return slider_img.setAttribute('src','travels');
// }
// var slider_img = document.querySelector('.unlock_photo')
// let images=[
//     {photo:1,
//     imgurl:"unlock/m_Bhandardara_l_568_852.jpg",
//     description:" Photo 1 "
//     }
//     ,{
//         photo:2,
//         imgurl:"travels/m_Shoghi_l_667_1000.jpg",
//         description:"2Photo"
//     },
//     {
//         photo:3,
//         imgurl:"travels/m_Tadoba_l_587_880.jpg",
//         description:"3Photo"
//     },
//     {
//         photo:4,
//         imgurl:"travels/m_destination-saputara-landscape_l_400_640.jpg",
//         description:"4Photo"
//     },
//     {
//         photo:5,
//         imgurl:"travels/m_Dapoli_l_703_937.jpg",
//         description:"5Photo"
//     },
//     {
//         photo:6,
//         imgurl:"travels/m_Amritsar_activity_heritage_l_684_1026.jpg",
//         description:"6Photo"
//     },
//     {
//         photo:7,
//         imgurl:"travels/m_Australia_destination_6_l_361_641.jpg",
//         description:"7Photo"
//     }
// ]
// let i=0;
// function prev(){
//     //document.getElementsByClassName('unlock_photo').src=images[6].imgurl;

// }
// function next(){
//     alert("Hello");
// }
// var slider_img = document.querySelector('.unlock_photo');
// var images = [
//     'unlock/m_Bhandardara_l_568_852.jpg',
//     'travels/m_Shoghi_l_667_1000.jpg',
//     'travels/m_Tadoba_l_587_880.jpg',
//     'travels/m_destination-saputara-landscape_l_400_640.jpg',
//     'travels/m_Dapoli_l_703_937.jpg',
//     'travels/m_Amritsar_activity_heritage_l_684_1026.jpg',
//     'travels/m_destination-udupi-landscape_l_400_640.jpg'
// ];
// var i = 0;

// function prev() {
//     if (i <= 0) i = images.length;
//     i--;
//     return set_Img();
// }

// function next() {
//     if (i >= images.length - 1) i = -1;
//     i++;
//     return set_Img();
// }

// function set_Img() {
//     if (slider_img) {
//         slider_img.setAttribute('src', 'travels/' + images[i]);
//     }
// }

// // Initial image display
// set_Img();
// function prev(){
//     var img=document.getElementById(".image1");
//     //img.src="travels/m_Shoghi_l_667_1000.jpg";
//     img.scroll(0,100);
// }
// const button = document.getElementById("b1");

// button.onclick = () => {
//   document.getElementById("unlock_picker").scrollright += 20;
// };
// const slides=document.querySelectorAll(".unlock_photo");
// console.log(slides);
const images=['unlock/m_Bhandardara_l_568_852.jpg',
    'travels/m_Shoghi_l_667_1000.jpg',
    'travels/m_Tadoba_l_587_880.jpg',
    'travels/m_destination-saputara-landscape_l_400_640.jpg',
    'travels/m_Dapoli_l_703_937.jpg',
    'travels/m_Amritsar_activity_heritage_l_684_1026.jpg',
    'travels/m_destination-udupi-landscape_l_400_640.jpg'];
    const sliderImage=document.getElementsByClassName(".unlock_photo");
    let currentindex=0;
    function prev(){
        if(currentindex==0){
            currentindex=images.length-1;
        }else{
            currentindex--;
        }
        sliderImage.src=images[currentindex];
    }
    function next() {
        if (currentindex === images.length - 1) {
            currentindex = 0;
        } else {
            currentindex++;
        }
    
        sliderImage.src= images[currentindex];
    }