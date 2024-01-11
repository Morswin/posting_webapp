from typing import Optional
from datetime import datetime

from sqlmodel import Field, SQLModel, create_engine


class User(SQLModel, table=True):
    user_id: int = Field(primary_key=True)
    login: str
    password: str
    nickname: str

class Post(SQLModel, table=True):
    post_id: int = Field(primary_key=True)
    user_id: int = Field(foreign_key=True)
    content: str
    date: datetime

class UserSettings(SQLModel, table=True):
    user_setting_id: int = Field(primary_key=True)
    user_id: int = Field(foreign_key=True)
    dark_mode: bool = False
