    const Input_Dob = document.getElementById("input-date");
    const Error = document.getElementById("error");
    const Btn = document.getElementById("btn");
    const Result = document.getElementById("result");

    const today = new Date().toISOString().split('T')[0];
    Input_Dob.setAttribute("max", today);


    function calculateAge() {
        const birthValue = Input_Dob.value;
        if (birthValue == "") {
            Error.innerText = "plz select your Dob..."
            setTimeout(() => {
                Error.innerText = ""
            }, 3000);
        }
        else {
            const {years,months,days} = getAge(birthValue);
            Result.innerText = `Your are ${years} years, ${months} months, and ${days} days old.`;
            setTimeout(() => {
                Result.innerText = ""
                Input_Dob.value = ""
            }, 5000);
        }
    }


    function getAge(birthValue) {
        const currentDate = new Date();
        const birthDate = new Date(birthValue);
        let years = currentDate.getFullYear() - birthDate.getFullYear();
        const months = currentDate.getMonth() - birthDate.getMonth();
        const days = currentDate.getDate() - birthDate.getDate()

        if (months < 0) {
            years--;
            months += 12;
        }

        if (days < 0) {
            months--;
            const previousmonths = new Date(today.getFullYear(), today.getMonth(), 0);
            days += previousmonths.getDate();


        }
        return {years, months, days};
    }

    Btn.addEventListener("click", calculateAge)