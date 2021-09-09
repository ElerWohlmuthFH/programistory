class Userinterface {
    constructor() {
        this.uiContainer = document.getElementById("content");
        this.city;
        this.defaultCity = "London";
    }

    //takes data from what fetch method returns
    populateUI(data) {
        //de-structure vars

        //add them to inner HTML

        this.uiContainer.innerHTML = `
        
<!--  markup: passing in objects we need: name, max temp, min temp-->
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}</h6>
                <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
                
            </div>
        </div>
        
        
        `;
    }

    clearUI() {
        uiContainer.innerHTML = "";
    }

    saveToLS(data) {
        localStorage.setItem("city", JSON.stringify(data));
    }

    getFromLS() {
        if (localStorage.getItem("city" == null)) {
            return this.defaultCity;
        } else {
            this.city = JSON.parse(localStorage.getItem("city"));
        }

        return this.city;
    }

    clearLS() {
        localStorage.clear();
    }
}