import JwtService from "@/common/jwt.service";
import Operator from '@/models/operator';
import Kulam from '@/models/kulam';
const state = {
  message: null,
  success: false,
  operator: new Operator('', '','','',''),
 // operator: {},
  kulam: new Kulam(""),
  isAuthenticated: !!JwtService.getToken()
}
export default state;
