from pydantic import BaseModel
from typing import Literal

class Transaction(BaseModel):
    id: int
    title: str
    category: str
    amount: float
    type: Literal["income", "expense"]
