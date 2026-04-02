const cars = [
    { model: "Maruti Swift ZXI+", engine: "1.2L Dualjet Petrol", mileage: "22 km/l", year: "2024" },
    { model: "Maruti Swift VXI", engine: "1.2L K-Series", mileage: "21 km/l", year: "2023" },
    { model: "Maruti Swift LXI", engine: "1.2L Petrol", mileage: "20 km/l", year: "2022" },
    { model: "Maruti Swift Sport", engine: "1.4L Boosterjet", mileage: "18 km/l", year: "2024" },
    { model: "Maruti Swift AMT", engine: "1.2L Petrol AMT", mileage: "22 km/l", year: "2023" },
    { model: "Maruti Swift Hybrid", engine: "1.2L Hybrid", mileage: "25 km/l", year: "2025" },
    { model: "Maruti Swift RS", engine: "1.0L Turbo", mileage: "19 km/l", year: "2024" },
    { model: "Maruti Swift CNG", engine: "1.2L CNG", mileage: "26 km/kg", year: "2023" },
    { model: "Maruti Swift Diesel", engine: "1.3L Diesel", mileage: "24 km/l", year: "2022" },
    { model: "Maruti Swift Limited Edition", engine: "1.2L Petrol", mileage: "21 km/l", year: "2025" }
];

const gallery = document.getElementById("carGallery");

// Generate Car Cards
cars.forEach((car, index) => {
    let carCard = document.createElement("div");
    carCard.className = "image-container";
    carCard.innerHTML = `
        <img src="s${index+1}.jpeg" alt="${car.model}">
        <div class="car-details">
            <p><b>Model:</b> ${car.model}</p>
            <p><b>Engine:</b> ${car.engine}</p>
            <p><b>Mileage:</b> ${car.mileage}</p>
            <p><b>Year:</b> ${car.year}</p>
            <button class="book-now" onclick="openBookingForm('${car.model}')">Book Now</button>
        </div>
    `;
    gallery.appendChild(carCard);
});

// Open Booking Form
function openBookingForm(model) {
    document.getElementById("selectedCar").value = model;
    document.getElementById("bookingOverlay").style.display = "flex";
}

// Close Booking Form
function closeForm() {
    document.getElementById("bookingOverlay").style.display = "none";
}

// Handle Form Submission
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Booking Confirmed for " + document.getElementById("selectedCar").value);
    closeForm();
});
document.getElementById('paymentMethod').addEventListener('change', function() {
    const paymentMethod = this.value;
    
    // Hide all payment details initially
    document.getElementById('creditCardDetails').style.display = 'none';
    document.getElementById('paypalDetails').style.display = 'none';
    document.getElementById('bankTransferDetails').style.display = 'none';
    
    // Show the relevant payment details based on the selection
    if (paymentMethod === 'Credit Card') {
      document.getElementById('creditCardDetails').style.display = 'block';
    } else if (paymentMethod === 'PayPal') {
      document.getElementById('paypalDetails').style.display = 'block';
    } else if (paymentMethod === 'Bank Transfer') {
      document.getElementById('bankTransferDetails').style.display = 'block';
    }
  });

  // Function to confirm booking and display success message
  function confirmBooking(event) {
    event.preventDefault();  // Prevent form submission
    alert('Booking Confirmed! Thank you for choosing us.');
    
    // Optionally, clear the form after submission
    document.getElementById('bookingForm').reset();
  }<script>
  // Function to show confirmation message
  function confirmBooking(carId) {
      // Hide the booking form
      let bookingForm = document.getElementById(carId);
      bookingForm.style.display = "none";

      // Display booking completed message
      let confirmationMessage = document.createElement('div');
      confirmationMessage.classList.add('confirmation-message');
      confirmationMessage.style.padding = '15px';
      confirmationMessage.style.backgroundColor = '#28a745';
      confirmationMessage.style.color = 'white';
      confirmationMessage.style.textAlign = 'center';
      confirmationMessage.style.fontWeight = 'bold';
      confirmationMessage.innerHTML = 'Booking Completed! Thank you for choosing Road Relic Rental!';
      
      // Add the confirmation message to the page
      document.body.appendChild(confirmationMessage);
      
      // Optionally, you can remove the confirmation message after 5 seconds
      setTimeout(() => {
          confirmationMessage.remove();
      }, 5000);
  }

  // Attach the confirmBooking function to the button click
  document.querySelectorAll('.confirm-btn').forEach(button => {
      button.addEventListener('click', function() {
          let carId = this.closest('.car-item').querySelector('form').id;
          confirmBooking(carId);
      });
  });
</script>

