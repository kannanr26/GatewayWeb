import JwtService from "@/common/jwt.service";
import Operator from '@/models/operator';
const state = {
  message: null,
  success: false,
  operator: new Operator('', '','','',''),
  //kulams:[],
  //educations:[],
  isAuthenticated: !!JwtService.getToken()
}
export default state;