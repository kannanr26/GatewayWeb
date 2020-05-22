import JwtService from "@/common/jwt.service";
import Operator from '@/models/operator';
import Kulam from '@/models/kulam';
const state = {
    errors: null,
    message:null,
    success:false,
    operator: new Operator('', '','','',''),
    kulam : new Kulam(""),
    isAuthenticated: !!JwtService.getToken()
  }
  export default state;
  