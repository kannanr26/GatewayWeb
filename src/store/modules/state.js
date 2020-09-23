import JwtService from "@/common/jwt.service";
const state = {
  message: null,
  success: false,
  operator: null,
  currentUserName:'',
  states:[],
  selectedCountry:'',

  //kulams:[],
  //educations:[],
  isAuthenticated: !!JwtService.getToken()
}
export default state;