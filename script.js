console.log("News Website");
// API KEY --   c43e80e0e0ea4c90ba6911d73d4c2d71
let apiKey = 'c43e80e0e0ea4c90ba6911d73d4c2d71';
let newsAccordion = document.getElementById('newsAccordion');
let xhr = new XMLHttpRequest();
xhr.open('GET' , 'https://newsapi.org/v2/top-headlines?country=in&apiKey=c43e80e0e0ea4c90ba6911d73d4c2d71', true);
xhr.onload = function(){
    if(this.status == 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        console.log(articles);
        articles.forEach(function(element , index){
             
            let news = `<div class="card">

                <h2 class="card-header" id="heading${index}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                        <b><span class="badge bg-secondary"> Breaking News - ${index+1}  </b>  
                         ${element.title}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                         ${element.content} <a href= "${element.url}" target =  "_blank"> Read More Here</a>
                    </div>
                </div>
            </div>`

            newsHtml += news ;
            
        });
        newsAccordion.innerHTML = newsHtml ;
    }else{
        console.error("Some Error occured");
    }
}
xhr.send();


