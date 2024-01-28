const images=['travels/m_Bhandardara_l_568_852.jpg',
    'travels/m_Shoghi_l_667_1000.jpg',
    'travels/m_Tadoba_l_587_880.jpg',
    'travels/m_destination-saputara-landscape_l_400_640.jpg',
    'travels/m_Dapoli_l_703_937.jpg',
    'travels/m_Amritsar_activity_heritage_l_684_1026.jpg',
    'travels/m_destination-udupi-landscape_l_400_640.jpg',
    'travels/m_Destination_Dhanaulti_l_534_801.jpg',
    'travels/m_destination-mandarmoni-landscape_l_400_640.jpg',
    'travels/m_Destination_Panchmarhi_l_464_696.jpg',
];
    const sliderImage=document.getElementById("image");
    let currentindex=0;
    function prev(){
        if(currentindex==0){
            currentindex=images.length-1;
        }else{
            currentindex--;
        }
        console.log(currentindex)
        sliderImage.src=images[currentindex];
    }
    function next() {
        if (currentindex === images.length - 1) {
            currentindex = 0;
        } else {
            currentindex++;
        }
        console.log(currentindex)
        sliderImage.src= images[currentindex];
    }