
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
//             if (count < slides.length - 1) {
//                 count++;
//                 slideImage();
//             }
//         };
    
//         const slideImage = () => {
//             slides.forEach(
//                 slide => (slide.style.transform = `translateX(-${count * 100}%)`)
//             );
//         };
// const slides = document.getElementById("container-id");
// let a1=[
//     {id:1,
//     imgurl:"https://ik.imagekit.io/yujmenhju/m_Bhandardara_l_568_852.jpg?updatedAt=1706518988671",
//     description:" Photo 1 "
//     }
//     ,{
//         id:2,
//         imgurl:"https://ik.imagekit.io/yujmenhju/m_Shoghi_l_667_1000.jpg?updatedAt=1706543118904",
//         description:"2Photo"
//     },
//     {
//         id:3,
//         imgurl:"https://ik.imagekit.io/yujmenhju/m_Tadoba_l_587_880.jpg?updatedAt=1706543118946",
//         description:"3Photo"
//     },
//     {
//         id:4,
//         imgurl:"https://ik.imagekit.io/yujmenhju/m_destination-saputara-landscape_l_400_640.jpg?updatedAt=1706543118883",
//         description:"4Photo"
//     },
//     {
//         id:5,
//         imgurl:"https://ik.imagekit.io/yujmenhju/m_Dapoli_l_703_937.jpg?updatedAt=1706543118955",
//         description:"5Photo"
//     },
//     {
//         id:6,
//         imgurl:"https://ik.imagekit.io/yujmenhju/m_Amritsar_activity_heritage_l_684_1026.jpg?updatedAt=1706543118994",
//         description:"6Photo"
//     },
//     {
//         id:7,
//         imgurl:"https://ik.imagekit.io/yujmenhju/m_Australia_destination_6_l_361_641.jpg?updatedAt=1706543118906",
//         description:"7Photo"
//     },
//     {
//         id:8,
//         imgurl:"https://ik.imagekit.io/yujmenhju/m_pilgrimage44_p_540_417.jpg?updatedAt=1706543118907",
//         description:"7Photo"
//     },
//     {
//         id:9,
//         imgurl:"https://ik.imagekit.io/yujmenhju/m_destination-alleppey-landscape_l_400_640.jpg?updatedAt=1706543118899",
//         description:"7Photo"
//     },
//     {
//         id:10,
//         imgurl:"https://ik.imagekit.io/yujmenhju/m_destination-mandarmoni-landscape_l_400_640.jpg?updatedAt=1706543118862",
//         description:"7Photo"
//     }
// ];
// const a2=[];
// a2.push(...a1.slice(0,5))
// let start=0;
// let final=a2.length
// console.log(a2.length)
// const updateSlides = () => {
//     const currentSlides = a1.slice(start, final);
//     slides.innerHTML = currentSlides.map(slide => `<img src="${slides.imgurl}" alt="${slides.description}">`).join('');
// };
// const prev=()=>{
//     start--;
//     final--;
//     const a2=[];
//     a2.push(a1.slice(start,final));
//     updateSlides();
// }
// const next=()=>{
//     start++;
//     final++;
//     const a2=[];
//     a2.push(a1.slice(start,final));
//     updateSlides();
//   }

const images = [
    { id: 1, url: "https://ik.imagekit.io/yujmenhju/m_Bhandardara_l_568_852.jpg?updatedAt=1706518988671" },
    { id: 2, url: "https://ik.imagekit.io/yujmenhju/m_Shoghi_l_667_1000.jpg?updatedAt=1706543118904" },
    { id: 3, url: "https://ik.imagekit.io/yujmenhju/m_Tadoba_l_587_880.jpg?updatedAt=1706543118946" },
    { id: 4, url: "https://ik.imagekit.io/yujmenhju/m_destination-saputara-landscape_l_400_640.jpg?updatedAt=1706543118883" },
    { id: 5, url: "https://ik.imagekit.io/yujmenhju/m_Dapoli_l_703_937.jpg?updatedAt=1706543118955" },
    { id: 6, url: "https://ik.imagekit.io/yujmenhju/m_Amritsar_activity_heritage_l_684_1026.jpg?updatedAt=1706543118994" },
    { id: 7, url: "https://ik.imagekit.io/yujmenhju/m_Australia_destination_6_l_361_641.jpg?updatedAt=1706543118906" },
    { id: 8, url: "https://ik.imagekit.io/yujmenhju/m_pilgrimage44_p_540_417.jpg?updatedAt=1706543118907" },
    { id: 9, url: "https://ik.imagekit.io/yujmenhju/m_destination-alleppey-landscape_l_400_640.jpg?updatedAt=1706543118899" },
    { id: 10, url: "https://ik.imagekit.io/yujmenhju/m_destination-mandarmoni-landscape_l_400_640.jpg?updatedAt=1706543118862" }
  ];

  const container = document.getElementById("imageContainer");
  let start = 0;
  let final = 4; 

  function displayImages() {
    container.innerHTML = "";
    for (let i = start; i <= final; i++) {
      const img = document.createElement("img");
      img.src = images[i].url;
      img.classList.add("unlock_photo");
      container.appendChild(img);
    }
  }

  function nextImages() {
    if (final + 1 < images.length) {
      start ++;
      final ++;
      displayImages();
    }
  }

  function previousImages() {
    if (start - 1 >= 0) {
      start --;
      final --;
      displayImages();
    }
  }
  displayImages();