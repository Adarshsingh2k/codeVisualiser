# backend/routes/user.py
from fastapi import APIRouter, Depends
from ..dependencies import get_supabase

router = APIRouter()

@router.post("/users/")
def create_user(user_data: dict, supabase=Depends(get_supabase)):
    data, error = supabase.table("users").insert(user_data).execute()
    if error:
        return {"error": error.message}
    return data
