import { TextField } from "@mui/material";

type inputType = {
  city: string;
  setCity: (city: string) => void;
  error?: string;
};
export default function CityInput({ city, setCity, error }: inputType) {
  return (
    <TextField
      label="Enter city name"
      variant="outlined"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      error={!!error}
      helperText={error}
    />
  );
}
