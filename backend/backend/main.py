from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .auth_routes import router as auth_router  # Import the router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"  # Add this line
    ],
    allow_credentials=True,
    allow_methods=["*"],  # Or you could specify methods ['POST', 'GET']
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

app.include_router(auth_router)  # Include the router, not the function
