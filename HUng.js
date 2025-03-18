function calculateRectangleArea() {
    let length = parseFloat(prompt("Enter the length of the rectangle:"));
    let width = parseFloat(prompt("Enter the width of the rectangle:"));
    
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert("Please enter valid positive numbers for length and width.");
        return;
    }
    
    let area = length * width;
    alert("The area of the rectangle is: " + area);
}

calculateRectangleArea();