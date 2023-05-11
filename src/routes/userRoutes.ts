import { Router } from "express";
import {addUser,getAllUser,getUserByEmail,updateUser,deleteUser,loginUser} from "../controller/userController";
import {tokenVerification} from '../middlewares/verifyTokens'
// import {getAllUser} from "../controller/userController"

const userRouter= Router()

userRouter.post(''tokenVerification,addUser)
userRouter.get('',getAllUser)
userRouter.get('/:user_email',getUserByEmail)
userRouter.put('/:user_id',updateUser)
userRouter.delete('/:user_id',deleteUser)
userRouter.post('/:login',loginUser)

export default userRouter 