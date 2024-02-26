// Route for handling registration form submission
app.post('/register', async (req, res) => {
  try {
    // Check if the phone number or FastTag number already exists in the database
    const existingRecord = await Registration.findOne({
      $or: [
        { phoneNumber: req.body.phoneNumber },
        { fastTagNumber: req.body.fastTagNumber }
      ]
    });

    if (existingRecord) {
      return res.status(400).send('Account already exists with the same phone number or FastTag number.');
    }

    // Save the new registration
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).send('Registration successful!');
  } catch (error) {
    console.error('Error:', error);
    res.status(400).send('Registration failed. Please try again.');
  }
});



document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(this);
    const name = formData.get('name');
    const carModel = formData.get('carModel');
    const phoneNumber = formData.get('phoneNumber');
    const fastTagNumber = formData.get('fastTagNumber');
  
    // Check for duplicacy here and show popup if necessary
    
    console.log('Name:', name);
    console.log('Car Model:', carModel);
    console.log('Phone Number:', phoneNumber);
    console.log('FastTag Number:', fastTagNumber);
  
    
  });
  
