const imageSets = [
    {
      id:1,  
      name: 'Andrew Smith',
      title: 'Innocence',
      images: [
        'https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
        'https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        'https://images.unsplash.com/photo-1492680967812-4b9226a079de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
      ],
    },
    {
      id:2,
      name: 'Jane Doe',
      title: 'Nature Adventures',
      images: [
        'https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
        'https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80'
      ],
    },
    {
      id:3,
      name: 'Irna Tawsen',
      title: 'Faces of the World',
      images: [
        'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
        'https://images.unsplash.com/photo-1604186837056-8e7c2867b6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      ],
    },
    {
      id:4,
      name: 'Mark Dale',
      title: 'Wild Animals',
      images: [
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
        'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80',
        'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        'https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      ]
    }

  ];


  const displayMenu = (list)=> {
    const photoSubmissionContainer = document.getElementById("photo-submission-container");
    const allPhotos = list.map(item =>{
        return `<a class="main-submission" href="detailspage.html?id=${item.id}">
                  <img src=${item.images} alt=${item.name} class="photo-image" />
                  <div class="photo-info">
                    <p>${item.name}</p>
                    <p class="item-category">${item.title}</p>
                  </div>
                </a>`;
          });
    photoSubmissionContainer.innerHTML = allPhotos.join("");
}

window.onload = function(){displayMenu(imageSets)};


  const up = ()=>{  
    if (numbers.count >= imageSets[values.par].images.length-1) {
      numbers.count = numbers.count; 
    } else {
      numbers.count++;
      selectors.img.src = imageSets[values.par].images[numbers.count];
    }
  };

  const dwn = ()=>{
    if (numbers.count <= 0) {
      numbers.count = numbers.count; 
    } else {
      numbers.count--;
      selectors.img.src = imageSets[values.par].images[numbers.count];
    }
  }; 



const themeButton = document.querySelector(".darkMode");
const body = document.querySelector("body");
const labels = document.querySelectorAll("label");
const toggleDarkMode = () => {
    if(body.style.backgroundColor === "rgb(42, 59, 73)"){
        body.style.backgroundColor = "white";
        themeButton.innerHTML = "Dark Mode";
        menuIcon.style.color = "rgb(53, 50, 50)";
        for(let i = 0; i < labels.length; i++){
            labels[i].style.color = "black";
        }
    } else {
        body.style.backgroundColor="#2A3B49";
        themeButton.innerHTML ="Light Mode";
        menuIcon.style.color="white"
        for (let i = 0; i < labels.length; i++) {
        labels[i].style.color = "white";
        };
    }
};
themeButton.onclick = toggleDarkMode;

const submitBtn = document.querySelector("#submit-button");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const entry = document.querySelector('input[name="entry"]').value;
    const imageURL1 = document.querySelector('input[name="imageURL1"]').value;
    const imageURL2 = document.querySelector('input[name="imageURL2"]').value;
    const imageURL3 = document.querySelector('input[name="imageURL3"]').value;
    const imageURL4 = document.querySelector('input[name="imageURL4"]').value;
    const imageURL5 = document.querySelector('input[name="imageURL5"]').value;
   
    

    const newEntry = document.createElement('div');
    newEntry.innerHTML = `<img src=${imageURL1} alt=${name} class="photo-image" />
    <div class="photo-info">
      <p>${name}</p>
      <p class="item-entry">${entry}</p>
  </div>`

    const photoContainer = document.querySelector("#photo-container");
    mealContainer.insertBefore(newPhoto,photoContainer.firstChild);

    document.querySelector('input[name="name"]').value = "";
    document.querySelector('input[name="entry"]').value = "";
    document.querySelector('input[name="imageURL1"]').value = "";
    document.querySelector('input[name="imageURL2"]').value = "";
    document.querySelector('input[name="imageURL3"]').value = "";
    document.querySelector('input[name="imageURL4"]').value = "";
    document.querySelector('input[name="imageURL5"]').value = "";
    });