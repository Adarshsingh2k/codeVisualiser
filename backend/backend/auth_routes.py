from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from supabase import create_client
from .config import SUPABASE_URL, SUPABASE_KEY

router = APIRouter()

# Define a Pydantic model for the request body
class LoginRequest(BaseModel):
    email: str
    password: str

# Dependency to get Supabase client
def get_supabase_client():
    print("hit")
    return create_client(SUPABASE_URL, SUPABASE_KEY)

print(get_supabase_client)
@router.post("/login")
async def login(request: LoginRequest, supabase=Depends(get_supabase_client)):
    try:
        # Attempt to sign in
        credentials = {
        "email": request.email,
        "password": request.password
        }

        user_data = supabase.auth.sign_up(credentials)
        print(user_data)
        if user_data.get('error') or not user_data.get('user'):
            raise HTTPException(status_code=400, detail="Failed to login. Check your credentials.")
        return {"message": "Login successful", "user_data": user_data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
