# OTP Generator and Verifier Frontend Webpage.

This is a single webpage where users can request an OTP via email and subsequently verify it.

## Website Link

[OTP verifier](https://www.yourwebsite.com)

## Technology Used
    ReactJs
    Redux Toolkit
    Tailwind CSS

1. **OTP Request:**
   - Users provide their:
     - Email ID
     - Organization Name
     - Subject
   - Users select the type of OTP required (Numeric, Alphanumeric, Alphabet-based).
   - Error is generated if any of the fields are not filled.

2. **OTP Generation:**
   - OTP is sent to the provided email ID.

3. **OTP Verification:**
   - Users enter the OTP in the input field.
   - Success message is displayed upon successful verification.

4. **Change Email:**
   - Users can change their email ID by clicking on the "Change Email" button.

### OTP Types

Select one of the following OTP types:
- Numeric
- Alphanumeric
- Alphabet-based

### OTP Verification

1. Enter the OTP received in your email in the provided input field.
2. Click the "Verify OTP" button.

### Change Email

If you entered the wrong email:
1. Click on the "Change Email" button.
2. Provide the correct email ID.

### Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/Ajay1105/otp-verifier.git
   ```

2. Navigate to the project directory:

   ```shell
   cd otp-verifier
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Start the service:

   ```shell
   npm start
   ```

The service should now be running on the specified port (default is 3000).


5. Open project on browser
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



