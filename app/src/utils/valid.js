const valid = ({full_name,last_name, username, email, gender, City, Region, Age,Cel, password, cf_password}) => {
    const err = {}

    if(!full_name) {
        err.full_name = "Введите имя."
    }else if(full_name.length > 25){
        err.full_name = "Full name is up to 25 characters long."
    }
    if(!last_name) {
        err.last_name = "Введите Фамилию."
    }else if(last_name.length > 25){
        err.last_name = "Full name is up to 25 characters long."
    }

    if(!username) {
        err.username = "Please add your user name."
    }else if(username.replace(/ /g, '').length > 25){
        err.username = "User name is up to 25 characters long."
    }

    if(!email) {
        err.email = "Please add your email."
    }else if(!validateEmail(email)){
        err.email = "Email format is incorrect."
    }

    if(!gender) {
        err.gender = "Введите Фамилию."
    }else if(gender.length > 25){
        err.gender = "Full name is up to 25 characters long."
    }

    if(!City) {
        err.City = "Введите Фамилию."
    }else if(City.length > 25){
        err.City = "Full name is up to 25 characters long."
    }

    if(!Region) {
        err.Region = "Введите Фамилию."
    }else if(Region.length > 25){
        err.Region = "Full name is up to 25 characters long."
    }

    if(!Age) {
        err.Age = "Введите Фамилию."
    }else if(Age.length > 25){
        err.Age = "Full name is up to 25 characters long."
    }

    if(!Cel) {
        err.Cel = "Введите Фамилию."
    }else if(Cel.length > 25){
        err.Cel = "Full name is up to 25 characters long."
    }

    if(!password) {
        err.password = "Please add your password."
    }else if(password.length < 6){
        err.password = "Password must be at least 6 characters."
    }

    if(password !== cf_password) {
        err.cf_password = "Confirm password did not match."
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
}



function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default valid