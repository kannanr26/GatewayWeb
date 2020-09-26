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
  //kulams:[],
  //educations:[],
  isAuthenticated: !!JwtService.getToken()
}
export default state;