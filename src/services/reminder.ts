import axios from "axios";
import Reminder from "../models/reminder";

class ReminderService {
  //http = axios.create({ baseURL: "https://jsonplaceholder.typicode.com/" });..
  http = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  async getReminders() {
    const response = await this.http.get<Reminder[]>("/todos");
    return response.data;
  }

  async addReminder(title: string) {
    const response = this.http.post<Reminder>("/todos", { title: title });
    return (await response).data;
  }

  async removeReminder(id: string) {
    const response = await this.http.delete("/todos/" + id);
    return response.data;
  }
}

//exporting an instance so the consumer doesnt need to instantiate it
export default new ReminderService();
