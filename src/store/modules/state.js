import JwtService from "@/common/jwt.service";
const state = {
  message: null,
  success: false,
  operator: null,
  currentUserName:'',
 
  selectedCountry:'',
  selectedState:'',
  selectedDistrict:'',
  selectedCity:'',
  selectedPincode:'',
  //kulams:[],
  //educations:[],
  isAuthenticated: !!JwtService.getToken()
}
export default state;