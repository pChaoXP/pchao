document.addEventListener('DOMContentLoaded', function() {
    const scenicSpots = [
        {
            id: "xiaoqikong",
            name: "荔波小七孔",
            description: "地球腰带上的“绿宝石”。",
            image_url: "images/xiaoqikong/xiaoqikong_01.jpg"
        },
        {
            id: "daqikong",
            name: "荔波大七孔",
            description: "原始森林、峡谷、伏流、地下湖。",
            image_url: "images/daqikong/daqikong_01.jpg"
        },
        {
            id: "huangguoshu",
            name: "黄果树瀑布",
            description: "亚洲最大的瀑布。",
            image_url: "images/huangguoshu/huangguoshu_01.jpg"
        },
        {
            id: "longgong",
            name: "龙宫景区",
            description: "中国最长、最美的水溶洞。",
            image_url: "images/longgong/longgong_01.jpg"
        },
        {
            id: "zhijindong",
            name: "织金洞",
            description: "“岩溶瑰宝”、“溶洞奇观”。",
            image_url: "images/zhijindong/zhijindong_01.jpg"
        },
        {
            id: "qingyanguzhen",
            name: "青岩古镇",
            description: "历史悠久的军事要塞。",
            image_url: "images/qingyanguzhen/qingyanguzhen_01.jpg"
        },
        {
            id: "xijiangmiaozhai",
            name: "西江千户苗寨",
            description: "世界上最大的苗族聚居村寨。",
            image_url: "images/xijiangmiaozhai/xijiangmiaozhai_01.jpg"
        },
        {
            id: "malinghe",
            name: "马岭河峡谷",
            description: "“地球最美丽的伤疤”。",
            image_url: "images/malinghe/malinghe_01.jpg"
        },
        {
            id: "wanfenglin",
            name: "万峰林",
            description: "中国锥状喀斯特博物馆。",
            image_url: "images/wanfenglin/wanfenglin_01.jpg"
        },
        {
            id: "daxiaojing",
            name: "大小井景区",
            description: "“东方洞穴博物馆”。",
            image_url: "images/daxiaojing/daxiaojing_01.jpg"
        }
    ];

    const spotsListDiv = document.getElementById('scenic-spots-list');

    if (spotsListDiv) {
        spotsListDiv.innerHTML = ''; // Clear the loading message

        scenicSpots.forEach(spot => {
            // Create an anchor tag for the link
            const spotLink = document.createElement('a');
            spotLink.href = `spot_details/${spot.id}.html`;
            spotLink.className = 'spot-link'; // For potential styling of the link itself

            const spotElement = document.createElement('div');
            spotElement.className = 'spot';

            const spotImage = document.createElement('img');
            spotImage.src = spot.image_url;
            spotImage.alt = spot.name;

            const spotName = document.createElement('h3');
            spotName.textContent = spot.name;

            const spotDescription = document.createElement('p');
            spotDescription.textContent = spot.description;

            spotElement.appendChild(spotName);
            spotElement.appendChild(spotImage);
            spotElement.appendChild(spotDescription);

            // Append the spot element to the anchor tag
            spotLink.appendChild(spotElement);

            // Append the anchor tag (which now contains the spot element) to the list
            spotsListDiv.appendChild(spotLink);
        });
    } else {
        console.error("Element with ID 'scenic-spots-list' not found.");
    }
});
