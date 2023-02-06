async function getData(uId) {
    console.log("Fetched the data!");
    return "skc@gmail.com";
}



const start = async function() {
    console.log("start");
    var email = await getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");

}

start();

