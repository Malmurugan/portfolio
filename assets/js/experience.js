AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Developer",
    cardImage: "assets/images/experience-page/antpod3.jpg",
    place: "Antpod Designs",
    time: "(Dec, 2020 - Jun, 2021)",
    desp: "<li>Drove development and implementation of precision agriculture solutions using multispectral and radar satellite data from Sentinel 1, 2 and Landsat 8.</li> <li>Developed code for time-series analysis of remote sensing data to determine the phenological stage of a crop.</li> <li>Supported migration and implementation of microservices using GCP serverless protocols.</li><li>Developed computer vision solutions to identify weeds for weed control rovers in tea plantations.</li>",
  },
  {
    title: "Summer Intern",
    cardImage: "assets/images/experience-page/saadhvi.png",
    place: "Saadhvi Technology",
    time: "(May - Jul, 2019)",
    desp: "<li>Developed a chatbot integrated with Graph Database that enabled customer service 24/7 on product and career offerings.</li><li>Deployed the chatbot in Wordpress and integrated it with Facebook Messenger.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Puzzle Champ - 2019",
    cardImage: "assets/images/experience-page/puzzlechamp.png",
    description:
      "Secured 1st place in Puzzle Champ, a nation-wide mathematical aptitude contest held at IIT Madras.",
  },
  {
    title: "Smart India Hackathon - 2019",
    cardImage: "assets/images/experience-page/sih.png",
    description:
      "Lead a team 5 members to the Finals of Smart India Hackathon - 2019 held at Indore.",
  },
  {
    title: "It's Appening - 2018",
    cardImage: "assets/images/experience-page/appening.png",
    description:
      "3rd Place in inter university mobile app development contest held at SSN Chennai.",
  },
  {
    title: "NCAT - 2017",
    cardImage: "assets/images/experience-page/ncat.jpg",
    description:
      "Category 1 contestant in National Creativity Aptitude Test, securing 81.5th percentile. ",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


