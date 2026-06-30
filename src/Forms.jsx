// src/Form.jsx
import { useState } from "react";
import { Typography, TextField, Box, Button } from "@mui/material";

const validate = ({ fullName, quantity }) => {
  const errors = {};
  if (!fullName.trim()) {
    errors.fullName = "Full name is required.";
  }
  if (quantity === "") {
    errors.quantity = "Quantity is required.";
  }
  return errors;
};

export default function Forms() {
  const [values, setValues] = useState({ fullName: "", quantity: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    const newErrors = validate(values);
    setErrors(newErrors);
  };

  return (
    <Box sx={{ p: 4, border: '1px solid #ccc', borderRadius: 2, mt: 4, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Adoption/Ticket Form</Typography>
      
      <Typography variant="h5" sx={{ mb: 1 }}>Full Name</Typography>
      <TextField
          type="text"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          error={Boolean(errors.fullName)}
          helperText={errors.fullName || " "}
          fullWidth
      />

      <Box sx={{ mt: 2 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>Quantity (Tickets)</Typography>
        <TextField
          type="number"
          name="quantity"
          value={values.quantity}
          onChange={handleChange}
          error={Boolean(errors.quantity)}
          helperText={errors.quantity || " "}
          fullWidth
        />
      </Box>

      <Button sx={{ mt: 3 }} variant="contained" onClick={handleSubmit} fullWidth>
        Submit
      </Button>
    </Box>
  );
}