/*
  Name: Riccardo Reali
  Student ID:301242893
  Course: COMP229
  Date: 2022-10-21
  Assignment 2
*/
export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';
}

export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}