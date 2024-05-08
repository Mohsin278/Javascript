const form = document.querySelector('form')

form.addEventListener('submit', function(event) {
event.preventDefault()
const height = parseInt(document.querySelector('#height').value)  // .value is used to retrieve the current value of that element. This is typically used with form elements like input fields, selects, and textareas to get the user-inputted value. It gives a String value.
const weight = parseInt(document.querySelector('#weight').value)
const result = document.querySelector('#results')
if ( height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = 'Please Enter a Valid Height'
} else if ( weight === '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = 'Please Enter a valid Weight'
} else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //Show the result
    result.innerHTML = `<span>${bmi}</span>`

    //Determine the category
    let category
    if( bmi < 18.6){
        category = 'Under Weight'
    } else if ( bmi >= 18.6 && bmi <= 24.9) {
      category = 'Normal Weight'
    } else {
      category = "Over Weight"
    }
    //Display BMI Category
    result.innerHTML = result.innerHTML + ` ${category}`
}
})