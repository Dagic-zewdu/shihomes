import axios from 'axios'
import {host} from '../../config/config'
export const usecheck=async ()=>{
    if(extract().type=='user'){
        const check=await axios.post(host+'/api/checkuser',{authuser:extract().user})
        if(check.data.auth){
             return {auth:true,usertype:'user'}
         }
         else{
             return {auth:false,usertype:'user'}
         }
      }
      else if(extract().type=='admin'){
        const check=await axios.post(host+'/api/checkadmin',{authadmin:extract().user})
        if(check.data.auth){
            return {auth:true,usertype:'admin'}
        }
        else{
            return {auth:false,usertype:'admin'}
        }  
    }
      else if(extract().type=='agent'){
        const check=await axios.post(host+'/api/checkagent',{authagent:extract().authuser})
        if(check.data.auth){
            return {auth:true,usertype:'agent'}
        }
        else{
            return {auth:false,usertype:'agent'}
        }
      }
      else{
            return {auth:false,usertype:'none'}
        
      }
}
export const authuser=async (next)=>{
    if(extract().type=='user'){
        const check=await axios.post(host+'/api/checkuser',{authuser:extract().user})
         if(check.data.auth){
             next()
         }
         else{
             return {auth:false,usertype:'user'}
         }
      }
      else if(extract().type=='admin'){
        const check=await axios.post(host+'/api/checkadmin',{authadmin:extract().user})
        if(check.data.auth){
            next()
        }
        else{
            return {auth:false,usertype:'admin'}
        }  
    }
      else if(extract().type=='agent'){
        const check=await axios.post(host+'/api/checkagent',{authagent:extract().authuser})
        if(check.data.auth){
        next()
        }
        else{
            return {auth:false,usertype:'agent'}
        }
      }
}
export const extract=()=>{
    let user=localStorage.auth_user?(
      localStorage.auth_user
    ):(
      localStorage.auth_admin?(
 localStorage.auth_admin
      ):(
   localStorage.auth_agent?(
     localStorage.auth_agent
   ):(
     ''
   )))
   let type=localStorage.auth_user?(
     'user'):(
     localStorage.auth_admin?(
    'admin'):(localStorage.auth_agent?('agent'):('')))
    return {user,type}
  }