function findMYAge(){
    let birthDateInput = document.getElementById("dob").value

    // convert input into date format

    let birthDate = new Date(birthDateInput)
    // console.log(birthDate)

    // Get today's date 
    let currentDate = new Date()
        // console.log(currentDate)

        if (!birthDateInput || birthDate > currentDate) {
            document.getElementById("ageResult").innerText =
              "Please choose a valid birth date."
            return
          }

           // Calculate difference in years, months, days
           let years = currentDate.getFullYear() - birthDate.getFullYear()
           let months = currentDate.getMonth() - birthDate.getMonth()
           let days = currentDate.getDate() - birthDate.getDate()
 
           // Adjust if days are negative
           if (days < 0) {
             months--
             // Get number of days in previous month
             let daysInLastMonth = new Date(
               currentDate.getFullYear(),
               currentDate.getMonth(),
               0
             ).getDate()
             days += daysInLastMonth
           }
 
           // Adjust if months are negative
           if (months < 0) {
             years--
             months += 12
           }
 
           // Show the result
           document.getElementById(
             "ageResult"
           ).innerText = `You are ${years} years, ${months} months, and ${days} days old.`
}