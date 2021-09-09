class Fetch {
    async getCurrent(input) {
        const myKey = "e350480b5dbbb56b05a05c0195f614c4";

        //make api request to custom url takes input and key displaying results with metric units

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
        );


        //store what fetch method returns in response and grab data in JSON
        const data = await response.json();

        console.log(data);

        return data;
    }
}