import { Category } from './ManageHabitModals/EditCategoryModal'

export type Habit = {
  id: string;
  name: string;
  icon: string | null;
  category: Category | null;
  days: string[];
  timesPerDay: number;
  reminderTime: Date | null;
};