type CanadianAddress = {
  street: string;
  province: string;
}

type USAddress = {
  street: string;
  state: string;
}

type RomanianAddress = {
  street: string;
  region: string;
}

//Union

type Address = CanadianAddress | USAddress | RomanianAddress;

const Address: Address = {
  street: "Deerpark Crescent",
  province: "Ontario"
}