import JwtService from "@/common/jwt.service";
const state = {
  message: null,
  success: false,
  operator: null,
  currentUserName:'',
 
  selectedCountry:'',
  selectedState:'',
  //kulams:[],
  //educations:[],
  isAuthenticated: !!JwtService.getToken()
}
export default state;