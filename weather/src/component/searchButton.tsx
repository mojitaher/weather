"use client";
import Button from "@mui/material/Button";

interface Props {
  onClick: () => void;
}

export default function SearchButton({ onClick }: Props) {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Search
    </Button>
  );
}
