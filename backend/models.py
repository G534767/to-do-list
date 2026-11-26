from sqlalchemy import Column, Integer, String, Text, Date, DateTime
from datetime import datetime
from database import Base

class Task(Base):
    __tablename__ = "tasks"

    task_id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    description = Column(Text)
    due_date = Column(Date)
    priority = Column(String(20), default="Medium")
    status = Column(String(20), default="Pending")
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, nullable=True)
